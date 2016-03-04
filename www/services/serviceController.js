/**
 * This is the main service controller factory which can be used to invoke the
 * service calls in the application.
 */

appServices.factory('ServiceController',function($http) {
		var self = this;
		self.domainURL = pmaMobileConfig.webServiceUrl;
		self.requestURL = null;
		self.requestType = 'POST';
		self.successCallBack = null;
		self.errorCallBack = null;
		self.contentType = pmaMobileConfig.contentType;
		self.params = {};
		self.timeout = pmaMobileConfig.requestTimeout;
		self.scope = null;
		self.requestGetParam = '';

		self.callService = function(serviceObj) {
			self.requestURL = self.domainURL+ RemoteURL[serviceObj.requestMethod];
			self.domainURL = serviceObj.domainURL ? serviceObj.domainURL: self.domainURL;
			self.requestGetParam = serviceObj.requestGetParam ? serviceObj.requestGetParam: self.requestGetParam;
			self.requestType = serviceObj.requestType ? serviceObj.requestType: self.requestType;
			self.successCallBack = serviceObj.successCallBack ? serviceObj.successCallBack: self.successCallBack;
			self.errorCallBack = serviceObj.errorCallBack ? serviceObj.errorCallBack: self.errorCallBack;
			self.contentType = serviceObj.contentType ? serviceObj.contentType: self.contentType;
			self.scope = serviceObj.scope ? serviceObj.scope: self.scope;
			if (self.requestType == 'POST') 
			{
				self.params = serviceObj.params ? serviceObj.params: self.params;
				self.requestURL = self.requestURL+ self.requestGetParam;
			} else {
				self.requestURL = self.requestURL+ serviceObj.requestGetParam;
			}
			self.serviceObj = serviceObj;
			var req = {
					method: self.requestType,
					url : self.requestURL,
					context : self,
					timeout : self.timeout,
					contentType : self.contentType,
					data : self.params
				}
			//$http(req).then(self.callSucessCallBack,self.callErrorCallBack);
			// uncomment below line for login without service call
			$http({method: 'GET', url: 'data/LoginSuccessResponse.json'}).then(self.callSucessCallBack,self.callErrorCallBack);
		};

		self.callSucessCallBack = function(data) {
			if (self.successCallBack) {
				try {
					self.successCallBack.call(self.scope, data);
				} catch (error) {
					console.log('123');
					console.log(error);
				}
			}
		};

		self.callErrorCallBack = function(XMLHttpRequest,textStatus) {
			console.log('error in response');
			console.log(self.errorCallBack);
			if (self.errorCallBack) {
				try {
					self.errorCallBack.call(null,XMLHttpRequest.statusText);
				} catch (error) {
					console.log(error);
				}
			}
			
		};
		return self;
});


