define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Agent',
        DISCOVERY_NAME: 'Agent',
        SYNC_ENDPOINT: '/sfdc/Agent/sync',
        priority: 1,
        incremental: true,
        chunkSize: -1,
        MODEL: function (data) {
            var self = this;
            this.Agent_ID = data.Agent_ID;
			this.Account_ID = data.Account_ID;
            this.Status = data.Status;
            this.isPMA = data.isPMA;
            this.SSN = data.SSN;
            this.Related_User = data.Related_User;

            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Agent_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Account_ID',
            type: 'STRING'
        }).addField({
            name: 'Status',
            type: 'STRING'
        }).addField({
            name: 'isPMA',
            type: 'BOOLEAN'
        }).addField({
            name: 'SSN',
            type: 'STRING'
        }).addField({
            name: 'Related_User',
            type: 'STRING'
        }).toSchema()
    };
    return dataTable;
});