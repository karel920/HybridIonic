PMAAppControllers.controller('login.controller',['$scope','$rootScope','loginService', '$location','$state',
 function($scope,$rootScope, loginService, $location,$state){
 	$rootScope.isManager=false;
	 	$scope.loginHome = function() {
	 			var data = {};
					data.username = $scope.userName;
					data.password = $scope.password;

				if ($scope.userName == undefined|| $scope.password == undefined) {
					return;
				} else {
					loginService.authenticationCheck(data, function(response) {	
			
                        if(!response){//If Data is not available in DB then invoke the service
							var resp = loginService.invokeLoginService(data,function(data){//for service user authentication
								console.log("  response data :"+data);
								console.log("New credentials");
                                $rootScope.responseValues = data.role;
								//sucess function
								console.log(data.role);
								if(data.role == 'Manager'){
									$rootScope.isManager=true;
									console.log('redirected to workBench Manager');
								    $state.go('PMAWorkBenchManager');
								}else{
									console.log('redirected to workBench Agent');
									$rootScope.isManager=false;
									$state.go('PMAWorkBenchAgent');
								}
							},function(error){//failure callback
								$scope.errMsg = error;
								console.log('errMsg  :'+$scope.errMsg);
								$('.modal').modal('show');
							});
						
						}else{
							//If Data is Available in DB then check the data and navigate to next screen
							//$location.path('/home');
							console.log('Details received from local Db');
							if (response.role == 'Manager') {
								$rootScope.isManager=true;
								console.log('redirected to workBench Manager');
								$state.go('PMAWorkBenchManager');
							}else{
								console.log('redirected to workBench Agent');
								$rootScope.isManager=false;
								$state.go('PMAWorkBenchAgent');
							};
						}
					}, function(){
						//alert('1234');

					});
				}
			};
		
	
	
}]);