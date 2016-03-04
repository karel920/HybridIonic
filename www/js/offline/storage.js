'use strict';
(function (window, emr, undefined) {
    emr.on('storageLoad', function (Document) {
        var storage =  Document || null;
        if (!storage) {
            emr.fire('storageLoaded', null);
        }else{
        	emr.fire('storageLoaded', Document);
        }
    });
})(window, window.offlineMaps.eventManager);