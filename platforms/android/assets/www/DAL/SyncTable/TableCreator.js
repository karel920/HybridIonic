/**
 * Created by SaiMukesh on 23/11/15.
 */
define(['q'], function (Q) {

    var IS_KEY_FIELD = "isKey";
    var NAME_KEY = "name";
    var TYPE_KEY = "type";

    var TableCreator = {
        CreateTable: function (db, tableName, schema) {
            var deferred = Q.defer();
            var createSqlMain = generateCreateStatement(tableName, schema, false);
            var createSqlShadow = generateCreateStatement(tableName, schema, true);
            db.executeSql(createSqlMain);
            db.executeSql(createSqlShadow);
            deferred.resolve(createSqlMain);
            return deferred.promise;
        }
    };

    function generateCreateStatement(tableName, schema, isShadowTable) {
        var sqlStatmentBuilder = [];
        sqlStatmentBuilder.push("CREATE TABLE IF NOT EXISTS " + tableName + (isShadowTable ? "_Shadow" : "") + " (");
        sqlStatmentBuilder.push("LocalKey TEXT NOT NULL");
        var fields = schema.getFields();
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            sqlStatmentBuilder.push(",");
            sqlStatmentBuilder.push(field[NAME_KEY]);
            sqlStatmentBuilder.push(" " + getSqlTypeFromJavascriptType(field[TYPE_KEY]) + " ");
            if (field[IS_KEY_FIELD]) {
                sqlStatmentBuilder.push(" PRIMARY KEY NOT NULL");
            }
        }
        if (isShadowTable) {
            sqlStatmentBuilder.push(",ROW_STATUS TEXT NOT NULL");
        }
        sqlStatmentBuilder.push(");")
        return sqlStatmentBuilder.join("");
    };

    function getSqlTypeFromJavascriptType(javascriptType) {
        switch (javascriptType) {
            case  "STRING":
                return "TEXT";
            case  "INTEGER":
                return "INT";
            case  "REAL":
                return "REAL";
            case  "DATE":
                return "INT";
            case  "BINARY":
                return "STRING";
        }
    }

    return TableCreator;
});