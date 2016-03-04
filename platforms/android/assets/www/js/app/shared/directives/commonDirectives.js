'use strict';

/*custom directive*/
angular.module('App')
       .directive('mapListViewDirectiveNew',function(){
          return {
            restrict: "E",
			replace: true,
            templateUrl: "js/app/modules/PMAMobile/templates/mapListViewtemplate.html",
            controller: function($scope,$http,$document){

                $scope.displaySwipPanelFlag = [];
                             
                $scope.displaySwipeLayer = function(displaySwipPanelFlag,$index){

                  angular.forEach($scope.displaySwipPanelFlag,function(val,key){
                     $scope.displaySwipPanelFlag[key] = false;
                  });

                  //$scope.displaySwipPanelFlag[$index] = !displaySwipPanelFlag;
                  $scope.displaySwipPanelFlag[$index] = true;
                };

                $scope.hideSwipePanel = function(displaySwipPanelFlag,$index){
                  $scope.displaySwipPanelFlag[$index] = false;
                };

            }
          }
        });