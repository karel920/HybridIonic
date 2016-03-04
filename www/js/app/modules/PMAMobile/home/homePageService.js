'use strict';

/** 
  * @desc Home page service will be used to fetch the campaign related data from Web Service
  * @author Alex Stephen
*/
appServices.factory('homePageService', function(appConfig, $http, $resource) {
    var self = this;

    /**
     * @desc getCampaignData function will fetch the campaign related data from webservice for the logged in user
     * @param string successCallback - function reference to be called on successful response received from webservice
     * @param string errorCallback - function reference to be called on failure response received from webservice
     * @return self - homePageService service object
   */
	self.getCampaignData = function(successCallback, errorCallback){
		$resource('data/newContactsData.json').get(successCallback);
		/*$http.post(appConfig.serviceBaseUrl+'JsonResponseServlet').
		success(function(response, status, headers, config) {
				successCallback(response);
			}).error( function(response, status, headers, config) {
				errorCallback(response);
			});*/
	};


    return self;
}).service("contactListDataService",['$http','$q',function($http,$q){
    var deferred = $q.defer();
    deferred.notify();
    $http.get('data/contactListData.json').success(function(data) {
        deferred.resolve(data);
        console.log("data retrived");
    }).error(function() {
            deferred.reject();
        });
    this.getData = function(){
        return deferred.promise;
    };
}]);