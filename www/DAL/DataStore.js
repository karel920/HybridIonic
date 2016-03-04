/**
 * Created by SaiMukesh on 23/11/15.
 */
define(["SyncTable",
        'q',
        "SyncTableCore/TableCreator",
        "entities/entity_config"],
    function (SyncTable, Q, TableCreator, entityConfig) {

        var entities = {};
        var discoveryToEntityName = {};

        var dataBase = null;

        var boot = function () {
            var deferred = Q.defer();
            var modulesToLoad = entityConfig.map(function (item) {
                return item.name;
            });

            require(modulesToLoad, function () {
                var args = Array.prototype.slice.call(arguments);
                args.forEach(function (module) {
                    entities[module.ENTITY_NAME] = module;
                    discoveryToEntityName[module.DISCOVERY_NAME] = module.ENTITY_NAME;
                });
                if (dataBase == null) {
                    window.sqlitePlugin.openDatabase({
                        name: "PMAMobile_v1.db",
                        key: "",
                        location: 1
                    }, function (db) {
                        dataBase = db;
                        var tableCreationPromises = [];
                        for (var entityName in entities) {
                            tableCreationPromises.push(TableCreator.CreateTable(db, "SY_" + entityName, entities[entityName].SCHEMA));
                        }
                        Q.all(tableCreationPromises).then(function (result) {
                            for (var i = 0; i < result.length; i++) {
                                console.log(result[i]);
                            }
                            deferred.resolve();
                        });
                    });
                }
            }, function (err) {
                deferred.reject(err);
            });
            return deferred.promise;
        };

        function executeSql(sqlQuery, params) {
            var deferred = Q.defer();
            if (dataBase == null) {
                deferred.reject("Data base is not yet opened");
            } else {
                dataBase.executeSql(sqlQuery, params, function (res) {
                    deferred.resolve(res);
                }, function (err) {
                    deferred.reject(err);
                });
            }
            return deferred.promise;
        }

        var DataStore = {
            bootDAL: boot,
            executeSql: executeSql
        };

        return DataStore;
    });