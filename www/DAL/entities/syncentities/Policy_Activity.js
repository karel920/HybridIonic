define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Policy_Activity',
        DISCOVERY_NAME: 'Policy_Activity',
        SYNC_ENDPOINT: '/sfdc/Policy_Activity/sync',
        priority: 1,
        incremental: true,
        chunkSize: -1,
        MODEL: function (data) {
            var self = this;
            this.Policy_Activity_ID = data.Policy_Activity_ID;
            this.Policy_ID = data.Policy_ID;
            this.Description = data.Description;
            this.Policy_Activity_Date = data.Policy_Activity_Date;
            this.LP_Policy_Activity_ID = data.LP_Policy_Activity_ID;

            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Policy_Activity_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Policy_ID',
            type: 'STRING'
        }).addField({
            name: 'Description',
            type: 'STRING'
        }).addField({
            name: 'Policy_Activity_Date',
            type: 'DATE'
        }).addField({
            name: 'LP_Policy_Activity_ID',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});