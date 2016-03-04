/**
 * Created by 418630 on 11/30/2015.
 */
define(["Services/campaignsDAL"], function (campaignsDAL) {
    return {
        getCampaignsDAL: function () {
            return campaignsDAL;
        }
    };
});