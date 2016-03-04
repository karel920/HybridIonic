PMAAppControllers.controller('PMAWorkBench.controller', ['$scope','$rootScope','$state','$window','$interval', 'PMAWorkBenchAjaxservice','$sce', function($scope,$rootScope,$state, $window,$interval,PMAWorkBenchAjaxservice,$sce) {
    var promise = PMAWorkBenchAjaxservice.getData();
    $scope.isWbLanding=true;
    if (!$scope.tileData) {
        promise.then(function(data) {
            $scope.tileData = data;
            var agentTileCount = 0;
            var managerTileCount = 0;
            var favoriteCount = 0;
            $scope.selectionLimit = 3;
            $scope.checked = 0;
            $scope.agentTileData = [];
            $scope.managerTileData = [];
            $scope.favoriteTileData = [];
            $scope.agentFavoritesTileList = [];
            $scope.managerFavoritesTileList = [];
            angular.forEach($scope.tileData.data, function(value, key) {
                if (value.agentToolBox === true) {
                    $scope.agentTileData[agentTileCount] = value;
                    agentTileCount++;
                }
                if (value.managerToolBox === true) {
                    $scope.managerTileData[managerTileCount] = value;
                    managerTileCount++;
                }
                
                if(value.favorite === true){ 
                    $scope.checked++;
                }
            });

            if (agentTileCount <= 6) {
                $scope.agentTileLimit = 6;
            } else {
                $scope.agentTileLimit = 5;
            }
            if (managerTileCount <= 6) {
                $scope.managerTileLimit = 5;
            } else {
                $scope.managerTileLimit = 5;
            }
            $scope.agentFavoritesTileList = angular.copy($scope.agentTileData);
            $scope.managerFavoritesTileList = angular.copy($scope.managerTileData);
            $scope.agentAllTileList = angular.copy($scope.agentTileData);
            console.log($scope.agentTileData);
            $scope.managerAllTileList = angular.copy($scope.managerTileData);
            $scope.selectedTiles=$scope.checked;
});
}
    $scope.checkChanged = function(tiledata){
        if(tiledata.favorite){ 
            $scope.checked++;
                   }
        else $scope.checked--;
    }
       
    $scope.saveFavoritiesData = function()
    {
        $scope.agentTileData = angular.copy($scope.agentFavoritesTileList);
        $scope.managerTileData = angular.copy($scope.managerFavoritesTileList);
        $scope.isWbLanding=true;
        $scope.selectedTiles=$scope.checked;
    }
    $scope.editFavorities=function()
    {
    	$scope.isWbLanding=false;
    }

    $rootScope.redirectionURL = function(value){

		$rootScope.selectedTileFrame = value;
		$rootScope.selectedFrameUrl = $sce.trustAsResourceUrl (value.url);
		$state.go('PMAWorkBenchOneSourceView');
		$sceProvider.enabled(true);

}

    $scope.redirectToLandingPage=function()
    {
    	$scope.isWbLanding=true;
    	$scope.agentFavoritesTileList = angular.copy($scope.agentTileData);
        $scope.managerFavoritesTileList = angular.copy($scope.managerTileData);
        $scope.checked=$scope.selectedTiles;
    }
    
    if($rootScope.agentAllTileList != undefined){
     var timer = $interval(function() {
			    	var lastElement = $scope.agentAllTileList.length;
			    	if(!angular.isUndefined(lastElement) && lastElement !== null){
                        if(lastElement % 3 == 1){
                            $scope.agentAllTileList.push({
      "tileID": "",
      "tileName": "",
      "mobileOptimization": "",
      "platforms": "",
      "tablet": "",
      "mobile": "",
      "baselineFeature": "",
      "offlineApp": "",
      "dataClipping": "",
      "liveTiles": "",
      "defaultFavorite": "",
      "authuentication": "",
      "sourceSystem": "",
      "contentType": "",
      "agentToolBox": " " ,
      "managerToolBox": "",
      "favoriteOrder": "",
      "favorite": " " ,
      "tileImageSrc": '',
      "iconName": "",
      "url": ""
    },
     {
      "tileID": "",
      "tileName": "",
      "mobileOptimization": "",
      "platforms": "",
      "tablet": "",
      "mobile": "",
      "baselineFeature": "",
      "offlineApp": "",
      "dataClipping": "",
      "liveTiles": "",
      "defaultFavorite": "",
      "authuentication": "",
      "sourceSystem": "",
      "contentType": "",
      "agentToolBox": " " ,
      "managerToolBox": "",
      "favoriteOrder": "",
      "favorite": " " ,
      "tileImageSrc": '',
      "iconName": "",
      "url": ""
    });}
                        if(lastElement % 3 == 2){$scope.agentAllTileList.push({
      "tileID": "",
      "tileName": "",
      "mobileOptimization": "",
      "platforms": "",
      "tablet": "",
      "mobile": "",
      "baselineFeature": "",
      "offlineApp": "",
      "dataClipping": "",
      "liveTiles": "",
      "defaultFavorite": "",
      "authuentication": "",
      "sourceSystem": "",
      "contentType": "",
      "agentToolBox": " " ,
      "managerToolBox": "",
      "favoriteOrder": "",
      "favorite": " " ,
      "tileImageSrc": '',
      "iconName": "",
      "url": ""
    });}
			    		
				    	$interval.cancel(timer);
                         
			    	}
		        }, 100);
}

}]);