var pmaMobileConfig = {

	appVersion 				: '1.0',
	app_name 				: 'PMA Mobile',
	requestTimeout 			: 60000,
	contentType 			: 'application/json',
	timeoutTxt 				: "timeout",
	webServiceUrl 			: 'http://10.102.168.14:8090/Mobility/pmamobile/',
	postRequest 			: 'POST',
	getRequest 				: 'GET',
	errorStatus				: 'error',
	successStatus			: 'success',

	//Network Connection Status
	Connection_NONE 		: 'Please ensure you are connected to internet.',

	init : function() {
	},

};

pmaMobileConfig.init();
