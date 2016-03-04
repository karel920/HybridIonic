define(['SyncTable'], function (SyncTable) {
    var dataTable = {
        ENTITY_NAME: 'Gap',
        DISCOVERY_NAME: 'Gap',
        SYNC_ENDPOINT: '/sfdc/Gap/sync',
        priority: 1,
        incremental: true,
        chunkSize: -1,
        MODEL: function (data) {
            var self = this;
            this.Gap_ID = data.Gap_ID;
            this.Product_ID = data.Product_ID;
            this.Disposition_ID = data.Disposition_ID;
            this.Sale_Type = data.Sale_Type;
            this.Sale_Gap_Amount = data.Sale_Gap_Amount;

            //Local Key
            this.Local_Key = data.Local_Key;
        },

        SCHEMA: new SyncTable.SchemaBuilder().addField({
            name: 'Gap_ID',
            type: 'STRING',
            isKey: true
        }).addField({
            name: 'Product_ID',
            type: 'STRING'
        }).addField({
            name: 'Disposition_ID',
            type: 'STRING'
        }).addField({
            name: 'Sale_Type',
            type: 'STRING'
        }).addField({
            name: 'Sale_Gap_Amount',
            type: 'INTEGER'
        }).toSchema()
    };

    return dataTable;
});