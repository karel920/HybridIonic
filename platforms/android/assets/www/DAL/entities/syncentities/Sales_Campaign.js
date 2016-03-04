define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Sales_Campaign',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Sales_Campaign',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Sales_Campaign/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self 				= this;
            this.Sales_Campaign_ID	= data.Sales_Campaign_ID;
            this.Campaign_Name 		= data.Campaign_Name;
            this.Campaign_Manager 	= data.Campaign_Manager;
            this.Status 			= data.Status;
            this.Campaign_Initiator = data.Campaign_Initiator; 
            this.State 				= data.State;
            this.Start_Date 		= data.Start_Date;
            this.End_Date 			= data.End_Date;
            this.New_HH_Goal 		= data.New_HH_Goal;
            this.Existing_HH_Goal 	= data.Existing_HH_Goal;
            this.GAP 				= data.GAP;
            this.Apps_Goal 			= data.Apps_Goal; 
            
            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Sales_Campaign_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Campaign_Name',
            type: 'STRING'
        }).
        addField({
            name: 'Campaign_Manager',
            type: 'STRING'
        }).
        addField({
            name: 'Status',
            type: 'STRING'
        }).
        addField({
            name: 'Campaign_Initiator',
            type: 'STRING'
        }).
        addField({
            name: 'State',
            type: 'STRING'
        }).
        addField({
            name: 'Start_Date',
            type: 'DATE'
        }).
        addField({
            name: 'End_Date',
            type: 'DATE'
        }).
        addField({
            name: 'New_HH_Goal',
            type: 'INTEGER'
        }).
        addField({
            name: 'Existing_HH_Goal',
            type: 'INTEGER'
        }).
        addField({
            name: 'GAP',
            type: 'INTEGER'
        }).
        addField({
            name: 'Apps_Goal',
            type: 'INTEGER'
        }).toSchema()
    };

    return dataTable;
});