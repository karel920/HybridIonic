define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Agent_Address',  
        DISCOVERY_NAME: 'Agent_Address', 
        SYNC_ENDPOINT: '/sfdc/Agent_Address/sync',   
        priority: 1, 
        incremental: true, 
        chunkSize: -1, 
        MODEL: function (data) {
            var self = this;
            this.Agent_Address_ID = data.Agent_Address_ID;
            this.Agent_ID = data.Agent_ID;
            this.Address_Type = data.Address_Type;
            this.City = data.City;
            this.State = data.State;
                       
			//Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Agent_Address_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Agent_ID',
            type: 'STRING'
        }).addField({
            name: 'Address_Type',
            type: 'STRING'
        }).addField({
            name: 'City',
            type: 'STRING'
        }).addField({
            name: 'State',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});