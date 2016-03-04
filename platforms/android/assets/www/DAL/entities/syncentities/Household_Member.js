define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Household_Member',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Household_Member',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Household_Member/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self 					= this;
            this.Household_Member_ID	= data.Household_Member_ID;
            this.Household_ID 			= data.Household_ID;
            this.Sales_Target_ID 		= data.Sales_Target_ID;
            this.Household_Member_Rank 	= data.Household_Member_Rank;
            
            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Household_Member_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Household_ID',
            type: 'STRING'
        })
        .addField({
            name: 'Sales_Target_ID',
            type: 'STRING'
        })
        .addField({
            name: 'Household_Member_Rank',
            type: 'INTEGER'
        }).toSchema()
    };

    return dataTable;
});