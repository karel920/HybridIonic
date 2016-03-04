'use strict';

/** 
 * @desc App initialization file having all module declaraation and route provider configuration.
 * @author Alex Stephen 
*/
var app = angular.module('App', ['App.controllers','App.services','App.config','ngRoute','ngResource','ngAnimate','ui.router','leaflet-directive']);
var appControllers = angular.module('App.controllers',['App.services','App.config']);
var appServices = angular.module('App.services',['App.config']);
var appConfig =   angular.module('App.config', []);

//app.filter('highlight', function($sce) {
//	alert("hiii");
//    return function(name, phrase) {
//      if (phrase) name = name.replace(new RegExp('('+phrase+')', 'gi'),
//        '<span class="highlighted">$1</span>')
//
//      return $sce.trustAsHtml(name)
//    }
//  });

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		// For any unmatched url, redirect to /state1
  		//$urlRouterProvider.otherwise("/login");

		$stateProvider
		//Login Screen
		.state('login', {
			url: '/login',
			templateUrl : 'js/app/modules/PMAMobile/login/login.html',
			controller : 'loginController'
		})
		//Map View Landing Screen
		.state('home', {
			url: '/home',
			templateUrl : 'js/app/modules/PMAMobile/home/mapView.html',
			controller : 'homePageController'
		})
		//Map View with list view Screen
		.state('home.mapListView', {
			url: '/mapListView',
			views: {
		        "headerView": { 
		        	templateUrl: "js/app/modules/PMAMobile/templates/headerView.html",
		        	controller: "headerController"
		        	},
		        "otherView": { 
		        	templateUrl : 'js/app/modules/PMAMobile/templates/mapListView.html',
		        	controller : 'listViewCtrl' 
		        }
		    }	
		})
		//Mobile map View 
		.state('home.mobileMapView', {
			url: '/mobile/mapView',
			views: {
		        "headerView": { 
		        	templateUrl: "js/app/modules/PMAMobile/templates/headerView.html",
		        	controller: "headerController"
		        	},
		        "otherView": { }
		    },
		    data: {
		        mobileMapView: true
		    },
		    onEnter: function(){
			    console.log(" hi mobile");
			    $state.navToggleFlag = false;
			    angular.element('.headerViewContainer').show();
			} 	
		})

		//contact View
		.state('home.contactDetails', {
			url: '/contactDetails',
			views: {
		        "headerView": { 
		        	templateUrl: "js/app/modules/PMAMobile/templates/headerView.html",
		        	controller: "headerController"
		        	},
		        "otherView": { 
		        	templateUrl : 'js/app/modules/PMAMobile/contact/contactView.html',
		        	controller: "contactController"
		        }
		    }
		})
          //search View
		.state('home.search', {
			url: '/search',
			views: {
		        "headerView": { },
		        "otherView": { 
		        	templateUrl : 'js/app/modules/PMAMobile/templates/searchPage.html',
		        	controller: "searchController"
		        }
		    }
		})
        
        //policyhistory View
		.state('home.policyHistory', {
			url: '/policyHistory',
			views: {
		        "headerView": { 
		        	templateUrl: "js/app/modules/PMAMobile/templates/headerView.html",
		        	controller: "headerController"
		        	},
		        "otherView": { 
		        	templateUrl : 'js/app/modules/PMAMobile/contact/policyHistory.html',
		        	controller: "contactController"
		        }
		    }
		})
        
        //about View
		.state('home.about', {
			url: '/about',
			views: {
		        "headerView": { },
		        "otherView": { 
		        	templateUrl : 'js/app/modules/PMAMobile/templates/aboutPage.html',
		        	controller: "aboutController"
		        }
		    }
		})
		
          //help View
		.state('home.help', {
			url: '/help',
			views: {
		        "headerView": { },
		        "otherView": { 
		        	templateUrl : 'js/app/modules/PMAMobile/templates/helpPage.html',
		        	controller: "helpController"
		        }
		    }
		})
		//Disposition View
		.state('home.disposition', {
			url: '/disposition',
			views: {
		        "headerView": { 
		        	templateUrl: "js/app/modules/PMAMobile/templates/headerView.html",
		        	controller: "headerController"
		        	},
		        "otherView": { 
		        	templateUrl : 'js/app/modules/PMAMobile/disposition/dispositionView.html',
		        	controller: "contactController"
		        }
		    }
		})

		//Filter Screen
		.state('home.filter', {
			url: '/filter',
			views: {
		        "headerView": { 
		        	templateUrl: "js/app/modules/PMAMobile/templates/headerView.html",
		        	controller: "headerController"
		        	},
		        "otherView": { 
		        	templateUrl : 'js/app/modules/PMAMobile/contact/filterView.html',
		        	controller: 'filterController'
		        }
		    }
		});
	 }
]);

app.run([ '$rootScope', 'DB', function($rootScope, DB) {
	$rootScope.$on("$routeChangeStart", function(event, next, current) {
	});

	$rootScope.logout = function() {
		$rootScope.isAuthenticated = false;
		$location.path('/mobile/mapView');
		$rootScope.safeApply();
	}

	$rootScope.safeApply = function(fn) {
		var phase = this.$root.$$phase;
		if (phase == '$apply' || phase == '$digest') {
			if (fn && (typeof (fn) === 'function')) {
				this.$eval(fn);
			}
		} else {
			if (fn) {
				this.$apply(fn);
			} else {
				this.$apply();
			}
		}
	}
	DB.init();
}
]);



