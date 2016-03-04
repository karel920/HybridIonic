define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Agent_Number',  
        DISCOVERY_NAME: 'Agent_Number', 
        SYNC_ENDPOINT: '/sfdc/Agent_Number/sync',   
        priority: 1, 
        incremental: true, 
        chunkSize: -1, 
        MODEL: function (data) {
            var self = this;
            this.Agent_Number_ID = data.Agent_Number_ID;
            this.Agent_ID = data.Agent_ID;
            this.Tax_ID = data.Tax_ID;
            this.Agent_Number = data.Agent_Number;
            this.Status = data.Status;
            this.Received_Date = data.Lead_Owner;
            this.Termination_Date = data.Termination_Date;
            
			//Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Agent_Number_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Agent_ID',
            type: 'STRING'
        }).addField({
            name: 'Tax_ID',
            type: 'STRING'
        }).addField({
            name: 'Agent_Number',
            type: 'STRING'
        }).addField({
            name: 'Status',
            type: 'STRING'
        }).addField({
            name: 'Received_Date',
            type: 'DATE'
        }).addField({
            name: 'Termination_Date',
            type: 'DATE'
        }).toSchema()
    };

    return dataTable;
});