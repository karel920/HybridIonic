define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Account',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Account',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Account/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self 			= this;
            this.Account_ID 	= data.Account_ID;
            this.Account_Name 	= data.Account_Name;
            this.Parent_Account = data.Parent_Account;
            
            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Account_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Account_Name',
            type: 'STRING'
        }).
        addField({
            name: 'Parent_Account',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});