'use strict';

var headerCtrl = function($scope,$window,$state,$rootScope,$stateParams){
	$scope.navToggleFlag = true;
    $rootScope.quickFilterSearch = false;
	//console.log('state param :'+$state.current.name)
	if($rootScope.mobileNavToggleFlag === false ||
	    $state.current.name === 'home.contactDetails'
	    ||$state.current.name === 'home.filter'
		|| $state.current.name === 'home.disposition')
	{
		$scope.navToggleFlag = false;
	}

	//console.log(' $rootscope :'+$rootScope.navToggleFlag)
    
      $scope.wrapperClose = function(){
                $scope.navToggleFlag = false;
            }
      

	$scope.toggleNav = function(navToggleFlag){
		//console.log("navToggleFlag : "+ navToggleFlag)
		$scope.navToggleFlag = !navToggleFlag;
		
	}
     $scope.fnShowSearchView = function(){
                $state.go('home.search');
               
            }
	
	$scope.navAnimate = function(navToggleFlag){
		var getNavElement = (event.target.classList.contains('expandnav'));
							   
		if(event.target.classList.contains('hamburger')){
			$scope.navToggleFlag = !navToggleFlag;
			return;
		}					   
		if(getNavElement){
		$scope.navToggleFlag = !navToggleFlag;
		}
	}
	

}

 angular.module('App').controller('headerController',['$scope','$window','$state','$rootScope','$stateParams', headerCtrl ]);
