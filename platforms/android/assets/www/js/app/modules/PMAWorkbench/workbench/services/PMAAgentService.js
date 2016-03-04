PMAAppServices.service("PMAWorkBenchAjaxservice",['$http','$q',function($http,$q){
    var deferred = $q.defer();
    deferred.notify();
    $http.get('data/workbench.json').success(function(data) {
        deferred.resolve(data);
    }).error(function() {
            deferred.reject();
        });
    this.getData = function(){
        return deferred.promise;
    };
}]);