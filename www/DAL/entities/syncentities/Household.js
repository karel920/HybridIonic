define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Household',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Household',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Household/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self 							= this;
            this.Household_ID 					= data.Household_ID;
            this.Address_Line_1 				= data.Address_Line_1;
            this.Address_Line_2 				= data.Address_Line_2;
            this.City 							= data.City;
            this.County 						= data.County;
            this.State 							= data.State;
            this.Zip 							= data.Zip;
            this.Zip_4 							= data.Zip_4;
            this.Location 						= data.Location;
            this.LP_Household_Id 				= data.LP_Household_Id;
            this.Household_Delivery_Point_Code 	= data.Household_Delivery_Point_Code;
            this.Color_Coding 					= data.Color_Coding;
            
            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Household_ID',
            type: 'STRING',
            isKey: true
        }).
        addField({
            name: 'Address_Line_1',
            type: 'STRING'
        }).
        addField({
            name: 'Address_Line_2',
            type: 'STRING'
        }).
        addField({
            name: 'City',
            type: 'STRING'
        }).
        addField({
            name: 'County',
            type: 'STRING'
        }).
        addField({
            name: 'State',
            type: 'STRING'
        }).
        addField({
            name: 'Zip',
            type: 'STRING'
        }).
        addField({
            name: 'Zip_4',
            type: 'STRING'
        }).
        addField({
            name: 'Location',
            type: 'STRING'
        }).
        addField({
            name: 'LP_Household_Id',
            type: 'STRING'
        }).
        addField({
            name: 'Household_Delivery_Point_Code',
            type: 'STRING'
        }).
        addField({
            name: 'Color_Coding',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});