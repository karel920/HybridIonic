'use strict';

/**
 * @desc The controller file for login.html
 * @author Alex Stephen
 */
appControllers.controller('loginController', ['$scope','loginService','$location',
		function($scope, loginService, $location) {
			$scope.loginHome = function() {
				if ($scope.userName == undefined|| $scope.password == undefined) {
					return;
				} else {
					var data = {};
					data.username = $scope.userName;
					data.password = $scope.password;
					loginService.authenticationCheck(data, function(response) {	
						if(!response){//If Data is not available in DB then invoke the service
							loginService.invokeLoginService(data);
						}else{
							//If Data is Available in DB then check the data and navigate to next screen
							//$location.path('/home');
						}
					}, null);
				}
			};
		}]);