define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Sales_Target_Relationship',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Sales_Target_Relationship',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Sales_Target_Relationship/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self 							= this;
            this.Sales_Target_Relationship_ID 	= data.Sales_Target_Relationship_ID;
            this.Sales_Target_ID 				= data.Sales_Target_ID;
            this.Related_Sales_Target_ID 		= data.Related_Sales_Target_ID;
            this.Relationship 					= data.Relationship;
            this.Referral_Notes 				= data.Referral_Notes;
            
            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Sales_Target_Relationship_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Sales_Target_ID',
            type: 'STRING'
        }).
        addField({
            name: 'Related_Sales_Target_ID',
            type: 'STRING'
        }).
        addField({
            name: 'Relationship',
            type: 'STRING'
        }).
        addField({
            name: 'Referral_Notes',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});