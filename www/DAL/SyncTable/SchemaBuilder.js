/**
 * Created by SaiMukesh on 23/11/15.
 */
define(['underscore'], function (_) {

    var IS_KEY_FIELD = "isKey";
    var NAME_KEY = "name";
    var TYPE_KEY = "type";

    var VALID_FIELD_TYPES = ["STRING", "INTEGER", "REAL", "DATE", "BINARY"];

    var SchemaBuilder = function () {
        this.fields = [];
    };

    SchemaBuilder.prototype.addField = function (field) {
        if (VALID_FIELD_TYPES.indexOf(field[TYPE_KEY]) == -1) {
            field[TYPE_KEY] = "STRING";
        }
        this.fields.push(field);
        return this;
    };

    SchemaBuilder.prototype.toSchema = function () {
        var self = this;

        return {
            getFields: function () {
                return self.fields;
            },
            getKeyFields: function () {
                var keys = [];
                for (var item in self.fields) {
                    if (item[IS_KEY_FIELD]) {
                        keys.push(item[NAME_KEY]);
                    }
                }
                return keys;
            },
            getIndexes: function () {
                return [];
            }
        };
    };

    return SchemaBuilder;
});