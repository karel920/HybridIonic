PMAAppConfig.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		// For any unmatched url, redirect to /state1
  		$urlRouterProvider.otherwise("/PMAlogin");

		$stateProvider
		//Login Screen
		.state('PMAlogin', {
			url: '/PMAlogin',
			templateUrl : 'js/app/modules/PMAWorkbench/login/login.html',
			controller : 'login.controller'
		})

		//Manager Langding page
		.state('PMAWorkBenchManager', {
			url: '/ManagerLandingPage',
			templateUrl : 'js/app/modules/PMAWorkbench/workbench/partials/wbManagerLandingpage.html',
			controller : 'PMAWorkBench.controller'
		})
		//Agent Landing page
		.state('PMAWorkBenchAgent', {
			url: '/AgentLandingPage',
			templateUrl : 'js/app/modules/PMAWorkbench/workbench/partials/wbAgentLandingPage.html',
			controller : 'PMAWorkBench.controller'
		})

		//Manager workbench
		.state('PMAWorkBenchManagerView', {
			url: '/ManagerPMAWorkbench',
			templateUrl : 'js/app/modules/PMAWorkbench/workbench/partials/WbMangerContactExpand.html',
			controller : 'PMAWorkBench.controller'
		})

		//Agent workbench
		.state('PMAWorkBenchAgentView', {
			url: '/AgentPMAWorkBench',
			templateUrl : 'js/app/modules/PMAWorkbench/workbench/partials/wbAgentContactExpand.html',
			 controller : 'PMAAgentToolBox.controller'
			//controller : 'PMAWorkBench.controller'
		})
		//One Source
		.state('PMAWorkBenchOneSourceView', {
			url: '/PMAWorkBenchOneSourceView',
			templateUrl : 'js/app/modules/PMAWorkbench/oneSource/partials/oneSource.html'
		});
	}]);;