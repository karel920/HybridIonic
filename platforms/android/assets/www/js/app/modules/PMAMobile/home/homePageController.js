'use strict';


appControllers.controller('homePageController', ['$scope', 'appConfig', 'homePageService', 'leafletData', '$state', '$window', '$stateParams', 'Document', '$http', '$rootScope', function($scope, appConfig, homePageService, leafletData, $state, $window, $stateParams, Document, $http, $rootScope) {
    /*Fetch the campaign data and load the map*/
    //	homePageService.getCampaignData(
    //		function(data){
    ////			window.offlineMaps.mapDetails.mapAccessToken = 'pk.eyJ1IjoidGliaW5hdiIsImEiOiJhNjg5NTEwNzgyY2JmNDZkODBjNTk1ZGUyMDI3OGFkOCJ9.7DGMsKti-9N4vjKcQyzVkg';
    ////			window.offlineMaps.mapDetails.mapData = data.PMOdata.campaigns[0];
    ////			var emr = window.offlineMaps.eventManager;
    ////			emr.on('storageLoaded', 'mapLoad');
    ////		   	emr.fire('storageLoad',Document);
    //		},
    //		function(response){
    //			alert("Server Error");
    //		});

    $scope.showMobileOtherView = true;
    $scope.viewName = 'List';
    $scope.previewCard = false;
    $rootScope.quickFilterSearch = false;


    $rootScope.loadMapData = function() {
        $scope.previewCard = false;
        //                    $rootScope.allMembers = [];

        $rootScope.contacts = $rootScope.selectedCampaign.contacts;
        $rootScope.allContacts = angular.copy($rootScope.contacts);
        $rootScope.DetailedMemberList = [];
        $scope.changeData();
        $scope.renderIcons();

        $scope.startsWith = function(actual, expected) {
            var lowerStr = (actual + "").toLowerCase();
            return lowerStr.indexOf(expected.toLowerCase()) === 0;
        }
    }

    $scope.changeData = function() {
        for (var i = 0; i < $rootScope.allContacts.length; i++) {
            var a = $rootScope.allContacts[i];
            for (var j = 0; j < a.members.length; j++) {
                var thisObj = a.members[j];
                var contact = {};
                //contact.id = thisObj.id;
                contact.firstname = thisObj.firstname;
                contact.lastname = thisObj.lastname;
                contact.rank = thisObj.rank;
                contact.role = thisObj.role;
                contact.age = thisObj.age;
                contact.synedwithsfdc = thisObj.synedwithsfdc;
                contact.householdid = a.householdid;
                contact.houseHoldStatus = a.houseHoldStatus;
                contact.street = a.street;
                contact.city = a.city;
                contact.country = a.country;
                contact.zip = a.zip;
                contact.phoneNumber = a.phoneNumber;
                contact.dispositionStatus = a.dispositionStatus;
                contact.dispositionWith = a.dispositionWith;
                contact.powernames = a.powernames;
                contact.occupation = a.occupation;
                contact.refferalStatus = a.refferalStatus;
                contact.policydetails = a.policydetails;
                contact.lat = $rootScope.contacts[i].lat;
                contact.lon = $rootScope.contacts[i].lng;
                contact.iconName = $scope.getIconName(a.houseHoldStatus, a.dispositionStatus, a.dispositionWith);
                $rootScope.DetailedMemberList.push(contact);
            }
        }

    }



    var html = " <a href=''>info</a><button type='button' ng-click='doSomeAction()'>Choose</button>";

    $scope.$on('leafletDirectiveMarker.click', function(event, args) {
        var previewCardIconName = $scope.getIconName(args.model.houseHoldStatus, args.model.dispositionStatus, args.model.dispositionWith);

        $scope.PreviewData = args;
        angular.forEach($scope.PreviewData.model.members, function(data) {
            if (data.role == "Head" && data.rank == 1) {
                $rootScope.filterName = data.lastname;
            }
            $scope.PreviewData.model.iconName = previewCardIconName;
            });

        $scope.eventDetected = "Click";

        if (screen.width <= 768) {
            $scope.previewCard = true;
        } else {
            $scope.previewCard = false;
        }
    });
    $scope.$on('leafletDirectiveMap.click', function(event, args) {
        $scope.previewCard = false;
    });

    $scope.quickFilter = function() {
        $rootScope.quickFilterSearch = true;

        $rootScope.quickFilterName($rootScope.selectedCampaign.contacts, $rootScope.filterName);

        $rootScope.selectedCampaign.contacts = $rootScope.lastNameMatches;
        $rootScope.loadMapData();

    };
    angular.extend($scope, {
        center: {
            lat: 48.398843,
            lng: -106.875638,
            zoom: 5
        },
        events: {
            map: {
                enable: ['click'],
                logic: 'emit'
            }
        },
        layers: {
            baselayers: {
                mapbox: {
                    name: 'mapbox',
                    type: 'xyz',
                    url: 'https://api.mapbox.com/{version}/mapbox.streets/{z}/{x}/{y}.png?access_token={access_token}',
                    layerParams: {
                        version: 'v4',
                        access_token: 'pk.eyJ1IjoibWFwYm94IiwiYSI6IlhHVkZmaW8ifQ.hAMX5hSW-QnTeRCMAy9A8Q'
                    }
                }
            },
            overlays: {
                thingsGroup: {
                    name: 'thingsGroup',
                    type: 'markercluster'
                },
                thingsCluster: {
                    name: 'thingsCluster',
                    type: 'markercluster',
                    visible: true
                }
            }
        },
        markers: $rootScope.contacts
    });

    $scope.getIconName = function(houseHoldStatus, dispositionStatus, dispositionWith) {
        var returnValue = '';
        if (houseHoldStatus === 'Active') {

            if (dispositionStatus === 'null' || dispositionWith == 'null') {
                returnValue = 'dispos01'
            } else {

                switch (dispositionStatus) {
                    case 'NotHome - Followup':
                        returnValue = "dispos02";
                        break;
                    case 'Not Intrested':
                        returnValue = "dispos03";
                        break;
                    case 'Presentation and Sale':
                        returnValue = "dispos04";
                        break;
                    case 'Presentation and No Sale':
                        returnValue = "dispos12";
                        break;
                    case 'Appointment':
                        returnValue = $scope.getDisposition(houseHoldStatus, dispositionStatus, dispositionWith);
                        break;
                    case 'Appointment - No Show':
                        returnValue = $scope.getDisposition(houseHoldStatus, dispositionStatus, dispositionWith);;
                        break;
                        defaultkey: "value",
                            returnValue = "";
                        break;
                }
            }
        } else if (houseHoldStatus === 'Termed') {
            if (dispositionStatus === 'null' || dispositionWith == 'null') {
                returnValue = 'dispos13'
            } else {
                switch (dispositionStatus) {
                    case 'NotHome - Followup':
                        returnValue = "dispos14";
                        break;
                    case 'Not Intrested':
                        returnValue = "dispos15";
                        break;
                    case 'Presentation and Sale':
                        returnValue = "dispos16";
                        break;
                    case 'Presentation and No Sale':
                        returnValue = "dispos24";
                        break;
                    case 'Appointment':
                        returnValue = $scope.getDisposition(houseHoldStatus, dispositionStatus, dispositionWith);
                        break;
                    case 'Appointment - No Show':
                        returnValue = $scope.getDisposition(houseHoldStatus, dispositionStatus, dispositionWith);;
                        break;
                    default:
                        returnValue = "";
                        break;
                }
            }
        } else if (houseHoldStatus === 'New') {
            if (dispositionStatus === 'null' || dispositionWith == 'null') {
                returnValue = 'dispos37'
            } else {
                switch (dispositionStatus) {
                    case 'NotHome - Followup':
                        returnValue = "dispos38";
                        break;
                    case 'Not Intrested':
                        returnValue = "dispos39";
                        break;
                    case 'Presentation and Sale':
                        returnValue = "dispos40";
                        break;
                    case 'Presentation and No Sale':
                        returnValue = "dispos48";
                        break;
                    case 'Appointment':
                        returnValue = $scope.getDisposition(houseHoldStatus, dispositionStatus, dispositionWith);
                        break;
                    case 'Appointment - No Show':
                        returnValue = $scope.getDisposition(houseHoldStatus, dispositionStatus, dispositionWith);;
                        break;
                    default:
                        returnValue = "";
                        break;
                }
            }


        } else if (houseHoldStatus === 'Refferal') {
            if (dispositionStatus === 'null' || dispositionWith == 'null') {
                returnValue = 'dispos25'
            } else {
                switch (dispositionStatus) {
                    case 'NotHome - Followup':
                        returnValue = "dispos26";
                        break;
                    case 'Not Intrested':
                        returnValue = "dispos27";
                        break;
                    case 'Presentation and Sale':
                        returnValue = "dispos28";
                        break;
                    case 'Presentation and No Sale':
                        returnValue = "dispos36";
                        break;
                    case 'Appointment':
                        returnValue = $scope.getDisposition(houseHoldStatus, dispositionStatus, dispositionWith);
                        break;
                    case 'Appointment - No Show':
                        returnValue = $scope.getDisposition(houseHoldStatus, dispositionStatus, dispositionWith);;
                        break;
                    default:
                        returnValue = "";
                        break;
                }
            }
        }
        return returnValue;
    }

    $scope.getDisposition = function(houseHoldStatus, dispositionStatus, dispositionWith) {
        var getDispositionIcon = '';
        dispositionWith = dispositionWith.toLowerCase();
        if (houseHoldStatus === 'Active') {
            if (dispositionStatus === 'Appointment') {
                if (dispositionWith === 'a') {
                    getDispositionIcon = 'dispos05'
                } else if (dispositionWith === 'b') {
                    getDispositionIcon = 'dispos06'
                } else if (dispositionWith === 'c') {
                    getDispositionIcon = 'dispos07'
                }
            } else if (dispositionStatus === 'Appointment - No Show') {
                if (dispositionWith === 'a') {
                    getDispositionIcon = 'dispos09'
                } else if (dispositionWith === 'b') {
                    getDispositionIcon = 'dispos10'
                } else if (dispositionWith === 'c') {
                    getDispositionIcon = 'dispos11'
                }
            }
        } else if (houseHoldStatus === 'Termed') {
            if (dispositionStatus === 'Appointment') {
                if (dispositionWith === 'a') {
                    getDispositionIcon = 'dispos17'
                } else if (dispositionWith === 'b') {
                    getDispositionIcon = 'dispos18'
                } else if (dispositionWith === 'c') {
                    getDispositionIcon = 'dispos19'
                }
            } else if (dispositionStatus === 'Appointment - No Show') {
                if (dispositionWith === 'a') {
                    getDispositionIcon = 'dispos21'
                } else if (dispositionWith === 'b') {
                    getDispositionIcon = 'dispos22'
                } else if (dispositionWith === 'c') {
                    getDispositionIcon = 'dispos23'
                }
            }
        } else if (houseHoldStatus === 'New') {
            if (dispositionStatus === 'Appointment') {
                if (dispositionWith === 'a') {
                    getDispositionIcon = 'dispos41'
                } else if (dispositionWith === 'b') {
                    getDispositionIcon = 'dispos42'
                } else if (dispositionWith === 'c') {
                    getDispositionIcon = 'dispos43'
                }
            } else if (dispositionStatus === 'Appointment - No Show') {
                if (dispositionWith === 'a') {
                    getDispositionIcon = 'dispos45'
                } else if (dispositionWith === 'b') {
                    getDispositionIcon = 'dispos46'
                } else if (dispositionWith === 'c') {
                    getDispositionIcon = 'dispos47'
                }
            }
        } else if (houseHoldStatus === 'Refferal') {
            if (dispositionStatus === 'Appointment') {
                if (dispositionWith === 'a') {
                    getDispositionIcon = 'dispos29'
                } else if (dispositionWith === 'b') {
                    getDispositionIcon = 'dispos30'
                } else if (dispositionWith === 'c') {
                    getDispositionIcon = 'dispos31'
                }
            } else if (dispositionStatus === 'Appointment - No Show') {
                if (dispositionWith === 'a') {
                    getDispositionIcon = 'dispos33'
                } else if (dispositionWith === 'b') {
                    getDispositionIcon = 'dispos34'
                } else if (dispositionWith === 'c') {
                    getDispositionIcon = 'dispos35'
                }
            }
        }
        return getDispositionIcon;
    }

    $scope.renderIcons = function() {
        for (var i = 0; i < $rootScope.contacts.length; i++) {
            var obj = {};
            var iconName = $scope.getIconName($rootScope.contacts[i].houseHoldStatus, $rootScope.contacts[i].dispositionStatus, $rootScope.contacts[i].dispositionWith);

            obj.type = 'div';
            obj.iconSize = [0, 0];
            obj.iconAnchor = [0, 0];
            obj.popupAnchor = [-0, -48];
            if (screen.width >= 768) {
                $rootScope.contacts[i].message = "<div class = 'trigger'><p class='startAlign'>(A) <span class='contactAppointment'>Appointment: Thursday 9PM - 10 PM</span></p><img class= 'imgLeft' src='images/hotlist_grey.svg'><img class='imgSelected' src='images/disposition_icons/" + iconName + ".svg'><img class='imgRight' src='images/likesname_grey.svg'><div class='panel-addr'><p>" + $rootScope.contacts[i].street + " " + '</b>' + $rootScope.contacts[i].city + "</p><p>" + $rootScope.contacts[i].members[0].firstname + " " + $rootScope.contacts[i].members[0].lastname + "</p><p>John Snow</p><p>" + $rootScope.contacts[i].phoneNumber + "</p></div></div>";
            }
            obj.html = "<img src='images/disposition_icons/" + iconName + ".svg' width='30px' height='30px' class='pma-marker-position'>";
            //obj.message = markerPopupTempalte
            /*if(screen.width<=768)
            {
            	var previewCardDiv = angular.element(document.querySelector('#name_details'));
            	$scope.previewCard=true;
            	previewCardDiv.empty();
            	previewCardDiv.append(markerPopupTempalte);
            }
            else
            {
            //obj.message=markerPopupTempalte;
            //'<img src="'+iconName+'".svg" class="pma-marker-position">';
            }*/
            $rootScope.contacts[i].icon = obj;
            $rootScope.contacts[i].lat = parseFloat($rootScope.contacts[i].lat);
            $rootScope.contacts[i].lng = parseFloat($rootScope.contacts[i].lng);
            $rootScope.contacts[i].layer = 'thingsCluster';
        }
    }

    //	$scope.fnShowOtherView = function(){
    //       console.log("Show other view :"+ $scope.showMobileOtherView)
    //       if($window.innerWidth < 768){
    //       		$scope.showMobileOtherView = !$scope.showMobileOtherView;
    //       }
    //    }

    $scope.mobileShowOtherView = function() {
        //console.log("Show mobile other view :"+ $scope.showMobileOtherView)
        if ($window.innerWidth < 768) {
            angular.element('#mobileOtherViewContainer').show();
            angular.element('.headerViewContainer').hide();
        }
    }
    if ($rootScope.selectedCampaign === undefined) {
        $http.get("data/newContactsData.json")
            .success(function(response) {
                $rootScope.selectedCampaignObject = {};
                console.log("asdfsdf");
                $rootScope.allCampaigns = response.PMOdata.campaigns;
                $rootScope.selectedCampaign = response.PMOdata.campaigns[0];
                $rootScope.resetSelectedCampaign = angular.copy($rootScope.selectedCampaign);
                $rootScope.contacts = $rootScope.selectedCampaign.contacts;
                $rootScope.selectedCampaignObject = $rootScope.selectedCampaign;
                $rootScope.loadMapData();
            });

    }
    $state.go('home.mapListView')
}]);