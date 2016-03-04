'use strict';

(function(){

	var helpCtrl = function($scope,$state,$rootScope,$window)
	{
        $rootScope.quickFilterSearch = false;
		angular.element('#mobileOtherViewContainer').show();
       var footerElement = angular.element('footer');
            footerElement.hide();
        $scope.closeHelpView = function(){
            $state.go('home.mapListView');
            footerElement.show();
        };
		
	}

	angular.module('App')
        .controller('helpController',['$scope','$state','$rootScope','$window',helpCtrl])
}());