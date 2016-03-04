appServices.factory('DataAccessLayer', function () {
    var self = this;
    var isDALInitialized = false;
    self.init = function (initCallBack) {
        if (!isDALInitialized) {
            try {
                isDALInitialized = true;
                require(['DataStore'], function (DataStore) {
                    for (var prop in DataStore) {
                        self[prop] = DataStore[prop];
                    }
                    self.bootDAL().then(function () {
                        initCallBack(true);
                    }).fail(function () {
                        initCallBack(false);
                    });
                });
            } catch
                (ex) {
                alert(ex);
            }
        }
    };
    return self;
});