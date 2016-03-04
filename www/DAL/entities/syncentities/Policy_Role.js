define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Policy_Role',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Policy_Role',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Policy_Role/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self 				= 	this;
            this.Policy_Role_ID 	= 	data.Policy_Role_ID;
            this.Policy_ID 			= 	data.Policy_ID;
            this.Sales_Target_ID 	=	data.Sales_Target_ID;
            this.Role 				= 	this.Role;
            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Policy_Role_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Policy_ID',
            type: 'STRING'
        })
        .addField({
            name: 'Sales_Target_ID',
            type: 'STRING'
        })
        .addField({
            name: 'Role',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});