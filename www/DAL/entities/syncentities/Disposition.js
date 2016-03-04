define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Disposition',  
        DISCOVERY_NAME: 'Disposition', 
        SYNC_ENDPOINT: '/sfdc/Disposition/sync',   
        priority: 1, 
        incremental: true, 
        chunkSize: -1, 
        MODEL: function (data) {
            var self = this;
			this.Disposition_ID = data.Disposition_ID;
            this.Campaign_Household_ID = data.Campaign_Household_ID;
            this.Agent_ID = data.Agent_ID;
            this.Sales_Campaign_ID = data.Sales_Campaign_ID;
            this.Disposition = data.Disposition;
			this.Actual_Disposition_Start_Date = data.Actual_Disposition_Start_Date;
			this.Actual_Disposition_End_Date = data.Actual_Disposition_End_Date;
            this.Appointment_Subject = data.Appointment_Subject;
            this.Appointment_End_Time = data.Appointment_End_Time;
            this.Appointment_Duration = data.Appointment_Duration;
			this.Appointment_Location = data.Appointment_Location;
			this.Appointment_Type = data.Appointment_Type;
			this.Follow_Up_Reason = data.Follow_Up_Reason;
			this.Follow_Up_Date_Time = data.Follow_Up_Date_Time;
			this.Disposition_Date = data.Disposition_Date;
			this.Number_Of_Contact = data.Number_Of_Contact;
			this.Number_Of_Appointment = data.Number_Of_Appointment;
			this.Number_Of_Presentation = data.Number_Of_Presentation;
			this.Number_Of_Sale = data.Number_Of_Sale;
			this.Number_Of_Referral = data.Number_Of_Referral;
			this.Gap_Amount = data.Gap_Amount;
			
            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Disposition_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Campaign_Household_ID',
            type: 'STRING'
        }).addField({
            name: 'Agent_ID',
            type: 'STRING'
        }).addField({
            name: 'Sales_Campaign_ID',
            type: 'STRING'
        }).addField({
            name: 'Disposition',
            type: ''//TODO - Yet To be discussed
        }).addField({
            name: 'Appointment_Subject',
            type: 'STRING'
        }).addField({
            name: 'Actual_Disposition_Start_Date',
            type: 'DATETIME'
        }).addField({
            name: 'Actual_Disposition_End_Date',
            type: 'DATETIME'
        }).addField({
            name: 'Appointment_End_Time',
            type: 'DATETIME'
        }).addField({
            name: 'Appointment_Duration',
            type: 'INTEGER'
        }).addField({
            name: 'Appointment_Location',
            type: 'STRING'
        }).addField({
            name: 'Appointment_Type',
            type: ''//TODO - Yet To be discussed
        }).addField({
            name: 'Follow_Up_Reason',
            type: 'STRING'
        }).addField({
            name: 'Follow_Up_Date_Time',
            type: 'DATETIME'
        }).addField({
            name: 'Disposition_Notes',
            type: 'STRING'
        }).addField({
            name: 'Disposition_Date',
            type: 'DATETIME'
        }).addField({
            name: 'Number_Of_Contact',
            type: 'INTEGER'
        }).addField({
            name: 'Number_Of_Appointment',
            type: 'INTEGER'
        }).addField({
            name: 'Number_Of_Presentation',
            type: 'INTEGER'
        }).addField({
            name: 'Number_Of_Sale',
            type: 'INTEGER'
        }).addField({
            name: 'Number_Of_Referral',
            type: 'INTEGER'
        }).addField({
            name: 'Gap_Amount',
            type: 'INTEGER'
        }).toSchema()
    };
	return dataTable;
});