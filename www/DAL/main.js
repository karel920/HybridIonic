/**
 * Created by SaiMukesh on 12/6/2015.
 */

require.config({
    baseUrl: "DAL",
    paths: {
        'underscore': 'lib/underscore/underscore',
        'sql-bricks': 'lib/sqlBricks/sqlBricks',
        'sqlite-bricks': 'lib/sqlBricks/sqlite',
        'PubSubJS': 'lib/PubSubJS/src/pubsub',
        'moment': 'lib/moment/moment',
        'q': 'lib/q/q.min',
        'SyncTable': 'SyncTable/SyncTable',
        'SyncTableCore': 'SyncTable'
    },
    shim: {
        'underscore': {
            "exports": "_"
        },
        'sql-bricks': {
            "deps": ["underscore"],
            "exports": "SqlBricks"
        },
        'sqlite-bricks': {
            "deps": ["sql-bricks"],
            "exports": "SQLiteBricks"
        }
    }
});