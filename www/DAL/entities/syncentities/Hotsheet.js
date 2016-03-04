define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Hotsheet',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Hotsheet',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Hotsheet/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self = this;
            this.Hotsheet_ID = data.Hotsheet_ID;
            this.Agent_ID = data.Agent_ID;
            this.District_Manager = data.District_Manager;
            this.Regional_Manager = data.Regional_Manager;
            this.State_Manager = data.State_Manager;
            this.Divisional_Vice_President = data.Divisional_Vice_President;
            this.CMD = data.CMD;
            this.Sales_Campaign_ID = data.Sales_Campaign_ID;
            this.Hotsheet_Entry_Date = data.Hotsheet_Entry_Date;
            this.GAP = data.GAP;
            this.Role = data.Role;
            this.Week = data.Week;
            this.Week_End = data.Week_End;
            this.Contact = data.Contact;
            this.Appointment = data.Appointment;
            this.Presentation = data.Presentation;
            this.Sale = data.Sale;
            this.Referral = data.Referral;

            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Hotsheet_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Agent_ID',
            type: 'STRING'
        }).addField({
            name: 'District_Manager',
            type: 'STRING'
        }).addField({
            name: 'Regional_Manager',
            type: 'STRING'
        }).addField({
            name: 'State_Manager',
            type: 'STRING'
        }).addField({
            name: 'Divisional_Vice_President',
            type: 'STRING'
        }).addField({
            name: 'CMD',
            type: 'STRING'
        }).addField({
            name: 'Sales_Campaign_ID',
            type: 'STRING'
        }).addField({
            name: 'Hotsheet_Entry_Date',
            type: 'DATE'
        }).addField({
            name: 'GAP',
            type: 'STRING'
        }).addField({
            name: 'Role',
            type: 'STRING'
        }).addField({
            name: 'Week',
            type: 'STRING'
        }).addField({
            name: 'Week_End',
            type: 'DATE'
        }).addField({
            name: 'Contact',
            type: 'INTEGER'
        }).addField({
            name: 'Appointment',
            type: 'INTEGER'
        }).addField({
            name: 'Presentation',
            type: 'INTEGER'
        }).addField({
            name: 'Sale',
            type: 'INTEGER'
        }).addField({
            name: 'Referral',
            type: 'INTEGER'
        }).toSchema()
    };

    return dataTable;
});