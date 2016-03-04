define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Sales_Target',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Sales_Target',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Sales_Target/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self 								= this;
            this.Sales_Target_ID 					= data.Sales_Target_ID;
            this.Name 								= data.Name;
            this.First_Name 						= data.First_Name;
            this.Last_Name 							= data.Last_Name;
            this.Middle_Name_Initial 				= data.Middle_Name_Initial;
            this.Maiden_Name 						= data.Maiden_Name;
            this.Email 								= data.Email;
            this.Fax 								= data.Fax;
            this.Phone 								= data.Phone;
            this.Alternative_Phone 					= data.Alternative_Phone;
            this.Age 								= data.Age;
            this.DOB 								= data.DOB;
            this.First_Name_Updated 				= data.First_Name_Updated;
            this.Last_Name_Updated 					= data.Last_Name_Updated;
            this.DOB_Updated 						= data.DOB_Updated;
            this.Hobbies 							= data.Hobbies;
            this.Lead_Processor_ID 					= data.Lead_Processor_ID;
            this.Mobile_Update_Indicator 			= data.Mobile_Update_Indicator;
            this.Name_Search_Display_Indicator 		= data.Name_Search_Display_Indicator;
            this.Occupation 						= data.Occupation;
            
            
            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Sales_Target_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Name',
            type: 'AUTONUMBER'// yet to decide
        }).
        addField({
            name: 'First_Name',
            type: 'STRING'
        }).
        addField({
            name: 'Last_Name',
            type: 'STRING'
        }).
        addField({
            name: 'Middle_Name_Initial',
            type: 'STRING'
        }).
        addField({
            name: 'Maiden_Name',
            type: 'STRING'
        }).
        addField({
            name: 'Email',
            type: 'STRING'
        }).
        addField({
            name: 'Fax',
            type: 'STRING'
        }).
        addField({
            name: 'Phone',
            type: 'STRING'//yet to decide
        }).
        addField({
            name: 'Alternative_Phone',
            type: 'STRING'// yet to decide
        }).
        addField({
            name: 'Age',
            type: 'INTEGER'
        }).
        addField({
            name: 'DOB',
            type: 'DATE'//yet to decide
        }).
        addField({
            name: 'First_Name_Updated',
            type: 'STRING'
        }).

        addField({
            name: 'Last_Name_Updated',
            type: 'STRING'
        }).
        addField({
            name: 'DOB_Updated',
            type: 'DATE'//yet to decide
        }).
        addField({
            name: 'Hobbies',
            type: 'STRING'
        }).
        addField({
            name: 'Lead_Processor_ID',
            type: 'STRING'
        }).
        addField({
            name: 'Mobile_Update_Indicator',
            type: 'STRING'//CHECKBOX yet to decide
        }).
        addField({
            name: 'Name_Search_Display_Indicator',
            type: 'STRING'//CHECKBOX yet to decide
        }).
        addField({
            name: 'Occupation',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});