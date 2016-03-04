define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'User',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'User',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/User/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self = this;
            this.User_ID = data.User_ID;
            this.Name = data.Name;
            this.Out_Of_Office = data.Out_Of_Office;
            this.Profile = data.Profile;
            this.IsActive = data.IsActive;
            this.Manager = data.Manager;

            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'User_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Name',
            type: 'STRING'
        }).addField({
            name: 'Out_Of_Office',
            type: 'STRING' //boolean  yet to decide
        }).addField({
            name: 'Profile',
            type: 'STRING'
        }).addField({
            name: 'IsActive',
            type: 'STRING'//boolean  yet to decide
        }).addField({
            name: 'Manager',
            type: 'STRING'//lookup yet to decide
        }).toSchema()
    };

    return dataTable;
});