define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'State_Information',  
        DISCOVERY_NAME: 'State_Information', 
        SYNC_ENDPOINT: '/sfdc/State_Information/sync',   
        priority: 1, 
        incremental: true, 
        chunkSize: -1, 
        MODEL: function (data) {
            var self = this;
			this.State_Information_ID = data.State_Information_ID;
            this.State_Name = data.State_Name;
            this.State_Code = data.State_Code;
            this.Country = data.Country;
            this.City = data.City;
            this.Zip = data.Zip;
            this.Zip_Extension = data.Zip_Extension;
            this.LP_State_Info_Id = data.LP_State_Info_Id;
            
			//Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'State_Information_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'State_Name',
            type: 'STRING'
        }).addField({
            name: 'State_Code',
            type: 'STRING'
        }).addField({
            name: 'Country',
            type: 'STRING'
        }).addField({
            name: 'City',
            type: 'STRING'
        }).addField({
            name: 'Zip',
            type: 'STRING'
        }).addField({
            name: 'Zip_Extension',
            type: 'STRING'
        }).addField({
            name: 'LP_State_Info_Id',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});