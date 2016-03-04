define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Policy',   //Value should be the name of table as per ERD diagram
        DISCOVERY_NAME: 'Policy',  // TODO - For now fill the same as ENTITY_NAME
        SYNC_ENDPOINT: '/sfdc/Policy/sync',   // TODO - Need to fill the actual service sync endpoint
        priority: 1,  //TODO - Need to sit with Mathew, Anil and identify the table parent - child hierarchy
        incremental: true, //For now put the value as true.
        chunkSize: -1, //For now put the value as -1 assuming services doesn't support pagination
        MODEL: function (data) {
            var self 						= 	this;
            this.Policy_ID 					= 	data.Policy_ID;
            this.Policy_Product_ID 			= 	data.Policy_Product_ID;
            this.Policy_Number 				= 	data.Policy_Number;
            this.Policy_Issue_Date  		= 	data.Policy_Issue_Date;
            this.Policy_Paid_to_Date		=	data.Policy_Paid_to_Date;
            this.Claim_Indicator			=	data.Claim_Indicator;
            this.Policy_Status				=	data.Policy_Status;
            this.Policy_ROP_Maturity_Date	=	data.Policy_ROP_Maturity_Date;
            this.LP_Policy_ID				=	data.LP_Policy_ID;

            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Policy_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Policy_Product_ID',
            type: 'STRING'
        }).addField({
            name: 'Policy_Number',
            type: 'STRING'
        }).addField({
            name: 'Policy_Issue_Date',
            type: 'DATE'
        }). addField({
            name: 'Policy_Paid_to_Date',
            type: 'DATE'
        }).addField({
            name: 'Claim_Indicator',
            type: 'CHECKBOX'
        }) .addField({
            name: 'Policy_Status',
            type: 'STRING'
        })
		
        addField({
            name: 'Policy_ROP_Maturity_Date',
            type: 'DATE'
        })
        .
        addField({
            name: 'LP_Policy_ID',
            type: 'STRING'
        }).toSchema()
    };

    return dataTable;
});