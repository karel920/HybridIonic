define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Lead',  
        DISCOVERY_NAME: 'Lead', 
        SYNC_ENDPOINT: '/sfdc/Lead/sync',   
        priority: 1, 
        incremental: true, 
        chunkSize: -1, 
        MODEL: function (data) {
            var self = this;
            this.Lead_ID = data.Lead_ID;
            this.First_Name = data.First_Name;
            this.Last_Name = data.Last_Name;
            this.Lead_Status = data.Lead_Status;
            this.Lead_Source = data.Lead_Source;
            this.Lead_Owner = data.Lead_Owner;
            this.Lead_Type = data.Lead_Type;
            
			//Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Lead_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'First_Name',
            type: 'STRING'
        }).addField({
            name: 'Last_Name',
            type: 'STRING'
        }).addField({
            name: 'Lead_Status',
            type: 'STRING'
        }).addField({
            name: 'Lead_Source',
            type: 'STRING'
        }).addField({
            name: 'Lead_Owner',
            type: 'STRING'
        }).addField({
            name: 'Lead_Type',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});