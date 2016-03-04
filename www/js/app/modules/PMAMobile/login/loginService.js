'use strict';

/**
 * @desc Login Service will do the authentication check by calling thewebservice
 * @author Alex Stephen
 */
appServices.factory('loginService', function(AuthenticationDataBaseFactory,ServiceHelper,$location) {
	var self = this;
	var loginRequestObject=null;

	/**
	 * @desc Do the authentication Check by calling Webservice
	 * @param string data - the parameters to be passed in JSON format
	 * @param string successCallback - function reference to be called on successful response received from web service
	 * @param string errorCallback - function reference to be called on failure response received from web service
	 */
	self.authenticationCheck = function(data, successCallback, errorCallback) {
		// Check the data from the DB.
		loginRequestObject=data;
		loginRequestObject = {"username": "admin","password": "admin123"};
		var retrieveLoginDetailsFromDB = AuthenticationDataBaseFactory.retrieveLoginDetails(data, successCallback, errorCallback);
	};

	self.invokeLoginService = function() {
		ServiceHelper.invokeService(ServiceMethod.LOGIN, loginRequestObject,this.onLoginSuccess, this.onLoginError);
	};

	self.onLoginSuccess = function(response) {
		if(response.data.status==pmaMobileConfig.successStatus){
			var loginResponseObj = {};
			loginResponseObj.userName = loginRequestObject.username;
			loginResponseObj.password = loginRequestObject.password;
			loginResponseObj.role = response.data.role;
			loginResponseObj.token = response.data.token;
			loginResponseObj.expiry = response.data.expiry;
			loginResponseObj.agentName = response.data.agentName;
			loginResponseObj.agentId_SF = response.data.agentId_SF;
			AuthenticationDataBaseFactory.insertLoginDetails(loginResponseObj, null, null);
			$location.path('/home');
		}else{
			alert(response.data.result);
		}
	};

	self.onLoginError = function(response) {
		$location.path('/home');
		console.log("onLoginError---->"+response);
	};

	return self;
});