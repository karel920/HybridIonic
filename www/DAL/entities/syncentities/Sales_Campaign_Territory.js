define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Sales_Campaign_Territory',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Sales_Campaign_Territory',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Sales_Campaign_Territory/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self 							= this;
            this.Sales_Campaign_Territory_ID 	= data.Sales_Campaign_Territory_ID;
            this.Agent_ID 						= data.Agent_ID;
            this.Campaign_ID 					= data.Campaign_ID;
            this.Territory_Name 				= data.Territory_Name;
            this.Polygon_Area 					= data.Polygon_Area;
            
            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Sales_Campaign_Territory_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Agent_ID',
            type: 'STRING'
        }).
        addField({
            name: 'Campaign_ID',
            type: 'STRING'
        }).
        addField({
            name: 'Territory_Name',
            type: 'STRING'
        }).
        addField({
            name: 'Polygon_Area',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});