'use strict';

(function(){

	var searchCtrl = function($scope,$state,$rootScope)
	{
        $rootScope.quickFilterSearch = false;
		angular.element('#mobileOtherViewContainer').show();
            var footerElement = angular.element('footer');
            footerElement.hide();
        $scope.closeSearchView = function(){
            $state.go('home.mapListView');
            footerElement.show();
            
        };
        
           $rootScope.mobileNavToggleFlag = false;

            $scope.toggleNav = function(event) {
                //  console.log('hi dfkjgh   :'+$scope.mobileNavToggleFlag);
                $rootScope.mobileNavToggleFlag = !$rootScope.mobileNavToggleFlag;
                event.stopPropagation();
            }


            $scope.navAnimate = function(mobileNavToggleFlag) {
                var getNavElement = (event.target.classList.contains('expandnav'));

                if (event.target.classList.contains('hamburger')) {
                    $rootScope.mobileNavToggleFlag = !mobileNavToggleFlag;
                    return;
                }
                if (getNavElement) {
                    $rootScope.mobileNavToggleFlag = !mobileNavToggleFlag;
                }
            }
           
             $scope.logFilteredList = function(val){
                 if(val.length > 2){
                    $scope.sortFilterData($rootScope.DetailedMemberList,val);
                 }
             }
             
             
               $scope.strStartsWith = function (actual, expected) {
                      var lowerStr = (actual + "").toLowerCase();
                    return lowerStr.indexOf(expected.toLowerCase()) === 0;
                }
               
                $scope.wrapperClose = function(){
                    $rootScope.mobileNavToggleFlag = false;
                
            }
                
                $scope.clearTextValue = function(){
                    $scope.contact_filter.name = ''
                }
               
         $scope.sortFilterData = function(data,searchValue){
		      $scope.filteredNames = [];
		          angular.forEach(data,function(contact){
			         if($scope.strStartsWith(contact.firstname.toLowerCase(),searchValue.toLowerCase())){
				            $scope.filteredNames.push(contact);
			         }
//                      else{
//				        $scope.contains.push(contact);
//			         }
		          }); 
//                        $scope.startWith.push.apply($scope.startWith, $scope.contains);
		                  return $scope.filteredNames;
	       }
		
	}

	angular.module('App')
        .controller('searchController',['$scope','$state','$rootScope',searchCtrl])
}());