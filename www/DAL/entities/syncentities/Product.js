define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Product',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Product',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Product/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self 			= this;
            this.Product_ID 	= data.Product_ID;
            this.Product_Name 	= data.Product_Name;
            this.Product_Family = data.Product_Family;
            this.LP_Product_ID  = data.LP_Product_ID;

            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Product_ID',
            type: 'STRING',
            isKey: true
        }).
        addField({
            name: 'Product_Name',
            type: 'STRING'
        }).
		addField({
            name: 'Product_Family',
            type: 'STRING'
        }).
        addField({
            name: 'LP_Product_ID',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});