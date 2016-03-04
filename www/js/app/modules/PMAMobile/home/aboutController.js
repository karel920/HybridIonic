'use strict';

(function(){

	var aboutCtrl = function($scope,$state,$rootScope)
	{
        $rootScope.quickFilterSearch = false;
		angular.element('#mobileOtherViewContainer').show();
         var footerElement = angular.element('footer');
            footerElement.hide();
        $scope.closeAboutView = function(){
            $state.go('home.mapListView');
            footerElement.show();
        };
		
	}

	angular.module('App')
        .controller('aboutController',['$scope','$state','$rootScope',aboutCtrl])
}());