'use strict';

(function(){

	var contactViewCtrl = function($scope,$state,$rootScope,$window,contactListDataService)
	{
		 var promise = contactListDataService.getData();
		angular.element('#mobileOtherViewContainer').show();
		$scope.contactToMapView = function(){
            angular.element('.otherViewContainer.mobile').show();
            $scope.showMobileOtherView = true;
			$state.go('home.mapListView');
		
		} 
        $scope.historyToContactView = function(){
            $state.go('home.contactDetails');
        }
        promise.then(function(data){
        	$rootScope.contactData=data.PMOdata.householdContactDetails;
        })

	}

	angular.module('App')
        .controller('contactController',['$scope','$state','$rootScope','$window','contactListDataService',contactViewCtrl])
}());
