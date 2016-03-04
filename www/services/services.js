'use strict';
appServices.factory('DB', function($q,DB_CONFIG) {
    var self = this;
    self.db = null;
    self.init = function() {
        //self.db = window.sqlitePlugin.openDatabase({name: DB_CONFIG.name,key: DB_CONFIG.key});
		self.db = window.openDatabase(DB_CONFIG.name, "1.0", "Test DB", 1000000);
        angular.forEach(DB_CONFIG.tables, function(table) {
            var columns = [];
            angular.forEach(table.columns, function(column) {
                columns.push(column.name + ' ' + column.type);
            });
            var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';
            self.query(query);
        });
    };
    self.query = function(query, bindings) {
        bindings = typeof bindings !== 'undefined' ? bindings : [];
        var deferred = $q.defer();
        self.db.transaction(function(transaction) {
            transaction.executeSql(query, bindings, function(transaction, result) {
                deferred.resolve(result);
            }, function(transaction, error) {
                deferred.reject(error);
            });
        });
        return deferred.promise;
    };
    return self;
}).factory('Document', function(DB) {
    var self = this;
    self.get= function(key, successCallback, errorCallback) {
    	DB.db.transaction(function(transaction) {
            transaction.executeSql('SELECT * FROM tilestorage WHERE key = ?', [key], function(transaction, result) {
            	successCallback(result.rows.length ? result.rows.item(0).value : undefined);
            }, function(transaction, error) {
            	errorCallback();
            });
        });
    };
	self.add= function(key, value) {
        DB.db.transaction(function(transaction) {
            transaction.executeSql('INSERT into tilestorage (key,value) values (?,?)', [key,value]);
        });
    };
	return self;
}).factory('AuthenticationDataBaseFactory', function(DB) {
    var self = this;
    self.retrieveLoginDetails= function(loginObject, successCallback, errorCallback) {
    	DB.db.transaction(function(transaction) {
    		transaction.executeSql('SELECT * FROM loginTable WHERE userName = ? AND password=?', [loginObject.username,loginObject.password], function(transaction, result) {
            	successCallback(result.rows.length ? result.rows.item(0) : undefined);
            }, function(transaction, error) {
            	errorCallback();
            });
        });
    };
    self.insertLoginDetails= function(loginObject, successCallback, errorCallback) {
    	DB.db.transaction(function(transaction) {
    		transaction.executeSql('INSERT into loginTable (userName,password,role,token,expiry,agentName,agentId_SF) values (?,?,?,?,?,?,?)', [loginObject.userName,loginObject.password,loginObject.role,loginObject.token,loginObject.expiry,loginObject.agentName,loginObject.agentId_SF], function(transaction, result) {
            	successCallback(result.rowsAffected ? result.rowsAffected : undefined);
            }, function(transaction, error) {
            	errorCallback();
            });
        });
    };
	return self;
});