define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Role',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Role',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Role/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self = this;
            this.Role_ID = data.Role_ID;
            this.Role_Name = data.Role_Name;
            
            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Role_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Role_Name',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});