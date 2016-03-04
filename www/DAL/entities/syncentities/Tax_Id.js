define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Tax_ID',
        DISCOVERY_NAME: 'Tax_ID',
        SYNC_ENDPOINT: '/sfdc/Tax_ID/sync',
        priority: 1,
        incremental: true,
        chunkSize: -1,
        MODEL: function (data) {
            var self = this;
            this.TAX_ID = data.TAX_ID;
            this.Agent_ID = data.Agent_ID;

            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'TAX_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Agent_ID',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});