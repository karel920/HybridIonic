define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Sales_Campaign_Area',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Sales_Campaign_Area',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Sales_Campaign_Area/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self = this;
            this.Sales_Campaign_Area_ID = data.Sales_Campaign_Area_ID;
            this.State = data.State;
            this.Campaign_City = data.Campaign_City;
            this.Campaign_County = data.Campaign_County;
            this.Campaign_Zip = data.Campaign_Zip;
            this.Sales_Campaign_ID = data.Sales_Campaign_ID

            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Sales_Campaign_Area_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'State',
            type: 'STRING'
        }).addField({
            name: 'Campaign_City',
            type: 'STRING'
        }).addField({
            name: 'Campaign_County',
            type: 'STRING'
        }).addField({
            name: 'Campaign_Zip',
            type: 'STRING'
        }).addField({
            name: 'Sales_Campaign_ID',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});