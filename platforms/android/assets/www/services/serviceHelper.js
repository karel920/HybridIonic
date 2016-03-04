appServices.factory('ServiceHelper', function(ServiceController) {
	var self = this;

	self.login = function(serviceObj) {
		serviceObj.requestMethod = ServiceMethod.LOGIN;
		this.execute(serviceObj);
	};

	self.invokeService = function(method, params, successCallBack,errorCallBack, scope) {
		if (checkConnection()) {
			this[method]({
				"params" : params,
				"successCallBack" : successCallBack,
				"errorCallBack" : errorCallBack,
				"scope" : scope
			});
		} else {
			if (errorCallBack) {
				errorCallBack.call(null, pmaMobileConfig.Connection_NONE);
			} else {
				alert(pmaMobileConfig.Connection_NONE);
			}
		}
	};

	self.execute = function(serviceObj) {
		ServiceController.callService(serviceObj);
	}
	return self;
});