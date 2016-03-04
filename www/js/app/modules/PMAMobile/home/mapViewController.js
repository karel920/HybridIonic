'use strict';

angular.module('App')
    .controller('listViewCtrl', ['$scope', '$http', '$window', '$state', '$rootScope',
        function($scope, $http, $window, $state, $rootScope) {
            $scope.sortingParam = 'name';
            $rootScope.quickFilterSearch = false;
            angular.element('footer').show();
               $scope.strStartsWith = function (actual, expected) {
                      var lowerStr = (actual + "").toLowerCase();
                    return lowerStr.indexOf(expected.toLowerCase()) === 0;
                }
              

            $scope.setSelectedContact = function(data) {
                $scope.selectedContactData = '';
            };

            $scope.fnShowSearchView = function(){
                $state.go('home.search');
               
            }
            
          
            
            $scope.wrapperClose = function(){
                $rootScope.mobileNavToggleFlag = false;
                
            }
            $scope.updateSortingParam = function() {
                    console.log('update param: ' + $scope.sortingParam);
                    $scope.sortingParam == 'name' ? $scope.sortingParam = '-name' : $scope.sortingParam = 'name';
                }
                //This for getting nav panel in other view
            $rootScope.mobileNavToggleFlag = false;

            $scope.toggleNav = function(event) {
                //  console.log('hi dfkjgh   :'+$scope.mobileNavToggleFlag);
                $rootScope.mobileNavToggleFlag = !$rootScope.mobileNavToggleFlag;
                event.stopPropagation();
            }
            
             $rootScope.quickFilterName = function(data, lastName){
                   $rootScope.lastNameMatches = [];
		          angular.forEach(data,function(contact){
                      angular.forEach(contact.members,function(member){
			         if($scope.strStartsWith(member.lastname.toLowerCase(),lastName.toLowerCase())){
				            $scope.lastNameMatches.push(contact);
			         }

		          }) 
                  })
		                  return $rootScope.lastNameMatches;
                           
             }
             
             $rootScope.clearFilterResults = function(){
                $rootScope.selectedCampaign=angular.copy($rootScope.resetSelectedCampaign);
                  $rootScope.loadMapData();
                   $rootScope.quickFilterSearch = false;
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
            $scope.mobileMapView = function() {
                if ($window.innerWidth < 768) {
                    /*this var is create for hiding the nav panel, 
                    while toggling list to map view in mobile only */
                    $rootScope.mobileNavToggleFlag = false;
                    $state.go($state.current, {
                        data: true
                    }, {
                        reload: true
                    });
                }
            }

            if ($rootScope.contactToMapViewFlag && $window.innerWidth < 768) {
                //$scope.showMobileOtherView = !$scope.showMobileOtherView;
                angular.element('#mobileOtherViewContainer').show();
                angular.element('.headerViewContainer').hide();
            }

        }
    ])

.controller('campaignCtrl', function($scope, $http, $rootScope) {
            $scope.campaignOpen = true;
    $rootScope.quickFilterSearch = false;
       /*  if($rootScope.selectedCampaign===undefined)
                        {
        $http.get("data/newContactsData.json")
                    .success(function(response) {
                        $rootScope.selectedCampaignObject = {};
                        console.log("asdfsdf");
                       $rootScope.allCampaigns=response.PMOdata.campaigns;
                        $rootScope.selectedCampaign = response.PMOdata.campaigns[0];
                        $rootScope.contacts = $rootScope.selectedCampaign.contacts;
                        $rootScope.selectedCampaignObject = $rootScope.selectedCampaign;
                    });
                }*/
           /* $scope.selectedCampaignObject = {};

            console.log($rootScope.selectedCampaign);
            $rootScope.campData = response.PMOdata.campaigns;
            console.log($rootScope.campData);
            $scope.selectedCampaignObject = $rootScope.campData[0];

            $scope.sortByDate = function(camp) {
            $scope.selectedCampaignObject = {};

            $rootScope.campData = response.PMOdata.campaigns;
            $scope.selectedCampaignObject = $rootScope.campData[0];

            $scope.sortByDate = function(camp) {
                var date = new Date(camp.creationDate);
                return date;
            }
                  $scope.startsWith = function (actual, expected) {
                      var lowerStr = (actual + "").toLowerCase();
                    return lowerStr.indexOf(expected.toLowerCase()) === 0;
                }  */
                $rootScope.changeCampaign = function(selectedCmpgn){
                    $rootScope.selectedCampaign = selectedCmpgn;
                    // $rootScope.$broadcast("dataUpdated",$rootScope.selectedCampaign);
                     $rootScope.contacts=$rootScope.selectedCampaign.contacts;
                     $rootScope.selectedCampaignObject=$rootScope.selectedCampaign;
                   $rootScope.resetSelectedCampaign=angular.copy($rootScope.selectedCampaign)
                     console.log($rootScope.selectedCampaignObject);
                     $rootScope.loadMapData();
                     $rootScope.isfiltered=false;
                }
          

        $scope.openCloseSelectCampaign = function(campId){
            if(campId > -1){
                $rootScope.selectedCampaignObject.checked = false;
                for(var i =0;i< $rootScope.allCampaigns.length; i++){
                    if($rootScope.allCampaigns[i].campaignId == campId){
                        if($rootScope.selectedCampaignObject.campaignId !== campId){
                            $rootScope.allCampaigns[i].checked = true;
                            $rootScope.selectedCampaignObject = $scope.allCampaigns[i];
                            //trigger the event
                        }
                        $rootScope.campaigns = $scope.allCampaigns[i];
                    }
                }
            }
            $scope.campaignOpen = !$scope.campaignOpen;
        }
        });
