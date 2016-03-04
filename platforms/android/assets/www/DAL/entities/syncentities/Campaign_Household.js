define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Campaign_Household',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Campaign_Household',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Campaign_Household/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self = this;
            this.Campaign_Household_ID 			= data.Campaign_Household_ID;
            this.Household_ID 					= data.Household_ID;
            this.Sales_Campaign_Territory_ID 	= data.Sales_Campaign_Territory_ID;
            this.Sales_Campaign_ID 				= data.Sales_Campaign_ID;
            this.Household_Status 				= data.Household_Status;
            this.Household_Score 				= data.Household_Score;
            this.Bookmark_Indicator 			= data.Bookmark_Indicator;
            
            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Campaign_Household_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Household_ID',
            type: 'STRING'
        }).
        addField({
            name: 'Sales_Campaign_Territory_ID',
            type: 'STRING'
        }).
        addField({
            name: 'Sales_Campaign_ID',
            type: 'STRING'
        }).
        addField({
            name: 'Household_Status',
            type: 'STRING'
        }).
        addField({
            name: 'Household_Score',
            type: 'INTEGER'
        }).
        addField({
            name: 'Bookmark_Indicator',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});