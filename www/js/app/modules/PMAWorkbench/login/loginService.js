'use strict';

/**
 * @desc Login Service will do the authentication check by calling thewebservice
 * @author Alex Stephen
 */
appServices.factory('loginService', function($state,AuthenticationDataBaseFactory,ServiceHelper,$location) {
	var self = this;
	var loginRequestObject=null;
	var demoSucessCallback=null;
	var demoErrorCallback=null;
	/**
	 * @desc Do the authentication Check by calling Webservice
	 * @param string data - the parameters to be passed in JSON format
	 * @param string successCallback - function reference to be called on successful response received from web service
	 * @param string errorCallback - function reference to be called on failure response received from web service
	 */
	/* self.authSuccessCallback = function(data,successCallback){
		successCallback(data);
	};*/

	//self.authCheck

	self.authenticationCheck = function(data, successCallback, errorCallback) {
		// Check the data from the DB.
		loginRequestObject=data;
		this.success=successCallback;
		var retrieveLoginDetailsFromDB = AuthenticationDataBaseFactory.retrieveLoginDetails(data, successCallback,errorCallback);
	};	

	self.invokeLoginService = function(data, successCallBack,errorCallback) {
		demoSucessCallback=successCallBack;
		demoErrorCallback = errorCallback;
		ServiceHelper.invokeService(ServiceMethod.LOGIN, loginRequestObject,this.onLoginSuccess, this.onLoginError);
	};

	self.onLoginSuccess = function(response) {
		if(response.data.status==pmaMobileConfig.successStatus){
			var loginResponseObj = {};
			loginResponseObj.role = response.data.role;
			console.log(loginResponseObj.role);
			loginResponseObj.userName = loginRequestObject.username;
			loginResponseObj.password = loginRequestObject.password;
			loginResponseObj.token = response.data.token;
			loginResponseObj.expiry = response.data.expiry;
			loginResponseObj.agentName = response.data.agentName;
			loginResponseObj.agentId_SF = response.data.agentId_SF;
			AuthenticationDataBaseFactory.insertLoginDetails(loginResponseObj,
			       function(response){
			       	demoSucessCallback(loginResponseObj);
			       },
			        function(response){
			        	//demoErrorCallback(response);
			       		console.log('failure');
			       });
		}else{
			demoErrorCallback(response);
		}
	};

	self.onLoginError = function(response) {
		//$location.path('/PMAlogin');
		console.log("onLoginError---->"+response);
		demoErrorCallback(response);
		return response;
	};

	return self;
});