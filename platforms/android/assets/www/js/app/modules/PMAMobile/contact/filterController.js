'use strict';

(function(){

	var filterCtrl = function($scope,$state,$rootScope,$window)
	{
		/**
		**retriving the previous scope values based on isfiltered Flag
		**these scope variables are used in FilterView.
		**/
		if($rootScope.isfiltered)
		{
			$scope.newHHold=$rootScope.filterVal.newHHold;
			$scope.activeHHold=$rootScope.filterVal.activeHHold;
			$scope.termedHHold=$rootScope.filterVal.termedHHold;
			$scope.referralsHHold=$rootScope.filterVal.referralsHHold;
			$scope.notHomeDS=$rootScope.filterVal.notHomeDS;
			$scope.notIntDS=$rootScope.filterVal.notIntDS;
			$scope.appDS=$rootScope.filterVal.appDS;
			$scope.hohappDS=$rootScope.filterVal.hohappDS;
			$scope.sappDS=$rootScope.filterVal.sappDS;
			$scope.oappDS=$rootScope.filterVal.oappDS;
			$scope.aNoSDS=$rootScope.filterVal.aNoSDS;
			$scope.pNsDS=$rootScope.filterVal.pNsDS;
			$scope.pSDS=$rootScope.filterVal.pSDS;
			$scope.cWDS=$rootScope.filterVal.cWDS;
			$scope.pNCD=$rootScope.filterVal.pNCD;
			$scope.ppdPS=$rootScope.filterVal.ppdPS;
			$scope.hcPS =$rootScope.filterVal.hcPS;
			$scope.zero_seventeenAR= $rootScope.filterVal.zero_seventeenAR;
			$scope.twentyFive_thirtyFourAR=$rootScope.filterVal.twentyFive_thirtyFourAR;
			$scope.fourtyFive_fiftyFourAR=$rootScope.filterVal.fourtyFive_fiftyFourAR;
			$scope.sixtyFive_seventyFourAR=$rootScope.filterVal.sixtyFive_seventyFourAR;
			$scope.eighteen_twentyFourAR = $rootScope.filterVal.eighteen_twentyFourAR;
			$scope.thirtyFive_fourtyFourAR =$rootScope.filterVal.thirtyFive_fourtyFourAR;
			$scope.fiftyFive_sixtyFourAR =$rootScope.filterVal.fiftyFive_sixtyFourAR;
			$scope.greaterThanSeventyFiveAR=$rootScope.filterVal.greaterThanSeventyFiveAR;
			$scope.roofOccu =	$rootScope.filterVal.roofOccu;
			$scope.beauOccu =$rootScope.filterVal.beauOccu;
			$scope.mechOccu =$rootScope.filterVal.mechOccu;
			$scope.trucOccu=	$rootScope.filterVal.trucOccu;
			$scope.nurseOccu =$rootScope.filterVal.nurseOccu;
			$scope.schteachOccu= $rootScope.filterVal.schteachOccu; 
			$scope.docOccu= $rootScope.filterVal.docOccu;
			$scope.govtPoliOccu= $rootScope.filterVal.govtPoliOccu;
			$scope.farRanOccu = $rootScope.filterVal.farRanOccu;
			$scope.showFilter=$rootScope.filterVal.showFilter;
		}
		$scope.contacts=$rootScope.selectedCampaign.contacts;//Getting the contacts from Selected Campaign
		$scope.filteredData=$rootScope.selectedCampaign.contacts;//filtered Data is used for showing the results.
		
		/**
		**Resetting the filtered Data based on isFiltered Flag
		**Based on Results will be shown.
		**/

		if($rootScope.isfiltered)
		{
			$scope.filteredData=$rootScope.selectedCampaign.contacts;
		}
		else
		{
			$scope.filteredData=$rootScope.resetSelectedCampaign.contacts;
		}
		$scope.doFilter=false; // Flag is used to filter the data or not based on selection.
		$scope.isAppointmentChecked=false;// Flag is to check whether the appointments are checked or not.
			/*$scope.showAllRemaining={};
			$scope.result=$scope.contacts;
	       	$scope.showAllRemaining.houseHold=$scope.showAllRemaining.newHHold=$scope.showAllRemaining.activeHHold=
	       	$scope.showAllRemaining.termedHHold=$scope.showAllRemaining.referralsHHold=
	       	$scope.showAllRemaining.dispositionStatus=$scope.showAllRemaining.notHomeDS=$scope.showAllRemaining.notIntDS=
	       	$scope.showAllRemaining.appDS=$scope.showAllRemaining.termedDS=$scope.showAllRemaining.refferalsDS=
	       	$scope.showAllRemaining.contactDetails=$scope.showAllRemaining.pNCD=$scope.showAllRemaining.ppdPS=
	       	$scope.showAllRemaining.policyStatus=$scope.showAllRemaining.hcPS=$scope.showAllRemaining.aNoSDS=
	       	$scope.showAllRemaining.pNsDS=$scope.showAllRemaining.pSDS=$scope.showAllRemaining.cWDS=true;*/
		angular.element('#mobileOtherViewContainer').show();
		$scope.filterToMapView = function(){
			$state.go('home.mapListView');
			//if($window.innerWidth < 768){
	       	$scope.showMobileOtherView = true;
	       	$rootScope.mobileNavToggleFlag = false;
	       	$rootScope.contactToMapViewFlag = true;
	       		}
	       		$scope.filterShow=function()
	       		{
	       			if($scope.showFilter)
	       			{
		       			$scope.notHomeDS=true;
		       			$scope.notIntDS=true;
		       			$scope.aNoSDS=true;
		       			$scope.appDS=true;
		       			$scope.pNsDS=false;
		       			$scope.pSDS=false;
		       			$scope.cWDS=true;
	       			}
	       			else
	       			{
	       				$scope.notHomeDS=false;
		       			$scope.notIntDS=false;
		       			$scope.aNoSDS=false;
		       			$scope.appDS=false;
		       			$scope.pNsDS=false;
		       			$scope.pSDS=false;
		       			$scope.cWDS=false;
	       			}
	       			$scope.filterData();
	       		}
	     $scope.showResults = function(){
	     	$state.go('home.mapListView');
    	//console.log("Show mobile other view :"+ $scope.showMobileOtherView)
       if($window.innerWidth < 768){
       		angular.element('#mobileOtherViewContainer').show();
       		angular.element('.headerViewContainer').hide();
       }
    }
		$rootScope.resetFilters = function(){
			$scope.newHHold=$scope.activeHHold=$scope.termedHHold=$scope.referralsHHold=$scope.notHomeDS=
			$scope.notIntDS=$scope.appDS=$scope.hohappDS=$scope.sappDS=$scope.oappDS=$scope.aNoSDS=
			$scope.pNsDS=$scope.pSDS=$scope.cWDS=$scope.pNCD=$scope.ppdPS=$scope.hcPS =$scope.zero_seventeenAR= $scope.twentyFive_thirtyFourAR=$scope.fourtyFive_fiftyFourAR=
			$scope.sixtyFive_seventyFourAR= $scope.eighteen_twentyFourAR = $scope.thirtyFive_fourtyFourAR 
			=$scope.fiftyFive_sixtyFourAR =$scope.greaterThanSeventyFiveAR=$scope.roofOccu =$scope.beauOccu =
			$scope.mechOccu =$scope.trucOccu=$scope.nurseOccu =$scope.schteachOccu= $scope.docOccu= $scope.lawOccu=
			 $scope.govtPoliOccu= $scope.farRanOccu = $scope.showFilter=false;
			$scope.isAppointmentChecked=false;
			$scope.filteredData=angular.copy($rootScope.resetSelectedCampaign.contacts);
			$rootScope.selectedCampaign.contacts=angular.copy($scope.filteredData);
			$rootScope.loadMapData();
			$rootScope.isfiltered=false;
		}
		$scope.filterData=function() 
		{
		$scope.contacts=$rootScope.resetSelectedCampaign.contacts;
	
			$rootScope.isfiltered=true;

			if(!$scope.isAppointmentChecked)
			{
				if($scope.appDS)
				{
					$scope.hohappDS=$scope.sappDS=$scope.oappDS=true;
					$scope.isAppointmentChecked=false;
				}
			}
			if(!$scope.appDS)
			{
					$scope.hohappDS=$scope.sappDS=$scope.oappDS=false;
					$scope.isAppointmentChecked=false;
			}
			if(!($scope.hohappDS || $scope.sappDS || $scope.oappDS))
			{
				$scope.appDS=false;
				$scope.isAppointmentChecked=false;
			}
			if($scope.hohappDS &&  $scope.sappDS && $scope.oappDS)
			{
				$scope.isAppointmentChecked=true;
			}
			$scope.HouseHoldFilterData=[];
			var houseHoldArrayCount=0;
			$scope.dispositionStatusFilterData=[];
			var dispositionArrayCount=0;
			$scope.contactDetailsFilterData=[];
			var contactDetailsArrayCount=0;
			$scope.policyDetailsFilterData=[];
			var policyDetailsArrayCount=0;
			angular.forEach($scope.contacts, function(value, key) {
				console.log("asdfd");
				console.log($scope.contacts);
				var isRecordInsertedCD=false;
				var isRecordInsertedPD=false;
				var isRecordInsertedDS=false;
				$scope.ageFilterSelected=false;
					if(($scope.newHHold && value.houseHoldStatus==="New")||($scope.activeHHold && value.houseHoldStatus==="Active")
						||($scope.termedHHold && value.houseHoldStatus==="Termed")||($scope.referralsHHold && value.houseHoldStatus==="Refferal"))
					{
						console.log("new");
						$scope.HouseHoldFilterData[houseHoldArrayCount]=value;
						houseHoldArrayCount++;
					}
					if(($scope.notHomeDS && value.dispositionStatus==="NotHome - Followup")||($scope.notIntDS &&  value.dispositionStatus==="Not Intrested")
						||($scope.aNoSDS && value.dispositionStatus==="Appointment - No Show")
						||($scope.pNsDS && value.dispositionStatus==="Presentation and No Sale")||($scope.pSDS && value.dispositionStatus==="Presentation and Sale")
						||($scope.cWDS && value.dispositionStatus==="Contacts Without Dispositions"))
					{
						if(!isRecordInsertedDS)
						{
							console.log("HERE");
						$scope.dispositionStatusFilterData[dispositionArrayCount]=value;
						dispositionArrayCount++;
						isRecordInsertedDS=true;
						}
					}
					if(($scope.hohappDS && value.dispositionWith.toUpperCase()==="A")||
						($scope.sappDS && value.dispositionWith.toUpperCase()==="B")||
						($scope.oappDS && value.dispositionWith.toUpperCase()==="C"))
					{
						console.log("Inside Appointment Filter");
						if(!isRecordInsertedDS)
						{
						$scope.dispositionStatusFilterData[dispositionArrayCount]=value;
						dispositionArrayCount++;
						isRecordInsertedDS=true;
						}
					}
					if($scope.pNCD && value.powernames===true)
					{
						if(!isRecordInsertedCD)
						{
						$scope.contactDetailsFilterData[contactDetailsArrayCount]=value;
						contactDetailsArrayCount++;
						isRecordInsertedCD=true;
						}
					}
					if($scope.zero_seventeenAR|| $scope.twentyFive_thirtyFourAR||$scope.fourtyFive_fiftyFourAR ||  
						$scope.sixtyFive_seventyFourAR|| $scope.eighteen_twentyFourAR || $scope.thirtyFive_fourtyFourAR 
						|| $scope.fiftyFive_sixtyFourAR || $scope.greaterThanSeventyFiveAR)
						{
							$scope.ageFilterSelected=true;
						}
					angular.forEach(value.members,function(membersData,membersCount){
						if(((membersData.age>=0 && membersData.age<=17) && $scope.zero_seventeenAR) || 
							((membersData.age>=18 && membersData.age<=24) && $scope.eighteen_twentyFourAR)||
							((membersData.age>=25 && membersData.age<=34) && $scope.twentyFive_thirtyFourAR)||
							((membersData.age>=35 && membersData.age<=44) && $scope.thirtyFive_fourtyFourAR)||
							((membersData.age>=45 && membersData.age<=54) && $scope.fourtyFive_fiftyFourAR)||
							((membersData.age>=55 && membersData.age<=64) && $scope.fiftyFive_sixtyFourAR)||
							((membersData.age>=65 && membersData.age<=74) && $scope.sixtyFive_seventyFourAR)||
							((membersData.age>75) && $scope.greaterThanSeventyFiveAR))
						{
						if(!isRecordInsertedCD)
						{
						$scope.contactDetailsFilterData[contactDetailsArrayCount]=value;
						contactDetailsArrayCount++;
						isRecordInsertedCD=true;
						}
						}
						if(($scope.carpOccu && membersData.occupation=="Carpenters")||
							($scope.roofOccu && membersData.occupation=="Roofers")||
							($scope.beauOccu && membersData.occupation=="Beauticians")||
							($scope.mechOccu && membersData.occupation=="Mechanics")||
							($scope.trucOccu && membersData.occupation=="Truckers")||
							($scope.nurseOccu && membersData.occupation=="Nurses")||
							($scope.schteachOccu && membersData.occupation=="School Teacher")||
							($scope.docOccu && membersData.occupation=="Doctor")||
							($scope.lawOccu && membersData.occupation=="Lawyer")||
							($scope.govtPoliOccu && membersData.occupation=="Government/Politician")||
							($scope.farRanOccu && membersData.occupation=="Farmer/Rancher"))
						{
							if(!isRecordInsertedCD)
							{
							$scope.contactDetailsFilterData[contactDetailsArrayCount]=value;
							contactDetailsArrayCount++;
							isRecordInsertedCD=true;
							}
						}
					});
					angular.forEach(value.policydetails,function(policydetailsData,policyCount){
						console.log(value.policydetails);
						if(($scope.ppdPS && policydetailsData.paymentpastdue) || $scope.hcPS && policydetailsData.hasclaims)
						{
						if(!isRecordInsertedPD)
							{
							$scope.policyDetailsFilterData[policyDetailsArrayCount]=value;
							policyDetailsArrayCount++;
							isRecordInsertedPD=true;
							}
						}

					});
            });
			$scope.filteredData=$scope.filteringArrays();
			$rootScope.selectedCampaign.contacts=angular.copy($scope.filteredData);
			console.log($rootScope.selectedCampaign.contacts);
			$scope.storingScopeValues();
			$rootScope.loadMapData();
		}
		$scope.filteringArrays=function()
		{
			var filteringArrayCount=0;
			$scope.filteredDataArray=[];
			if($scope.HouseHoldFilterData.length!==0 || $scope.newHHold	|| $scope.activeHHold || $scope.termedHHold 
				|| $scope.referralsHHold)
			{
				$scope.filteredDataArray[filteringArrayCount]=$scope.HouseHoldFilterData;
				filteringArrayCount++;
				$scope.doFilter=true;
			}
			if($scope.dispositionStatusFilterData.length!==0 || $scope.notHomeDS ||	$scope.notIntDS 
				|| $scope.hohappDS || $scope.sappDS ||$scope.oappDS || $scope.aNoSDS 
				|| $scope.pNsDS || $scope.pSDS || $scope.cWDS)
			{
				$scope.filteredDataArray[filteringArrayCount]=$scope.dispositionStatusFilterData;
				filteringArrayCount++;
				$scope.doFilter=true;
			}
			if($scope.contactDetailsFilterData.length!==0 || $scope.ageFilterSelected || $scope.pNCD)
			{
				$scope.filteredDataArray[filteringArrayCount]=$scope.contactDetailsFilterData;
				filteringArrayCount++;
				$scope.doFilter=true;
			}
			if($scope.policyDetailsFilterData.length!==0 || $scope.ppdPS || $scope.hcPS)
			{
				$scope.filteredDataArray[filteringArrayCount]=$scope.policyDetailsFilterData;
				filteringArrayCount++;
				$scope.doFilter=true;
			}
			if($scope.HouseHoldFilterData.length===0 && $scope.dispositionStatusFilterData.length===0 && $scope.contactDetailsFilterData.length===0)
			{
				$scope.doFilter=false;
			}
			if($scope.ageFilterSelected || $scope.occuCD!==undefined || $scope.ppdPS || $scope.hcPS || 
				$scope.newHHold	|| $scope.activeHHold || $scope.termedHHold || $scope.referralsHHold|| 
				$scope.notHomeDS ||	$scope.notIntDS || $scope.hohappDS || $scope.sappDS ||
				$scope.oappDS || $scope.aNoSDS || $scope.pNsDS || $scope.pSDS || $scope.cWDS || $scope.pNCD ||
				$scope.ppdPS || $scope.hcPS)
			{
				$scope.doFilter=true;
			}

			if($scope.doFilter)
			{
				console.log($scope.filteredDataArray);
				if($scope.filteredDataArray.length!==0)
				{
					$scope.result = $scope.filteredDataArray.shift().filter(function(v) {
				    return $scope.filteredDataArray.every(function(a) {
				        return a.indexOf(v) !== -1;
				    });
					});
				}
				else
				{
					$scope.result=[];
				}
			return $scope.result;
			}
			else
			{
				return $scope.contacts;
			}
		}
		$scope.storingScopeValues=function()
		{

			$rootScope.filterVal={};
			$rootScope.filterVal.newHHold=$scope.newHHold;
			$rootScope.filterVal.activeHHold=$scope.activeHHold;
			$rootScope.filterVal.termedHHold=$scope.termedHHold;
			console.log($rootScope.filterVal.termedHHold);
			$rootScope.filterVal.referralsHHold=$scope.referralsHHold;
			$rootScope.filterVal.notHomeDS=$scope.notHomeDS;
			$rootScope.filterVal.notIntDS=$scope.notIntDS;
			$rootScope.filterVal.appDS=$scope.appDS;
			$rootScope.filterVal.hohappDS=$scope.hohappDS;
			$rootScope.filterVal.sappDS=$scope.sappDS;
			$rootScope.filterVal.oappDS=$scope.oappDS;
			$rootScope.filterVal.aNoSDS=$scope.aNoSDS;
			$rootScope.filterVal.pNsDS=$scope.pNsDS;
			$rootScope.filterVal.pSDS=$scope.pSDS;
			$rootScope.filterVal.cWDS=$scope.cWDS;
			$rootScope.filterVal.pNCD=$scope.pNCD;
			$rootScope.filterVal.ppdPS=$scope.ppdPS;
			$rootScope.filterVal.hcPS=$scope.hcPS;
			$rootScope.filterVal.zero_seventeenAR=$scope.zero_seventeenAR;
			$rootScope.filterVal.twentyFive_thirtyFourAR=$scope.twentyFive_thirtyFourAR;
			$rootScope.filterVal.fourtyFive_fiftyFourAR=$scope.fourtyFive_fiftyFourAR;
			$rootScope.filterVal.sixtyFive_seventyFourAR=$scope.sixtyFive_seventyFourAR;
			$rootScope.filterVal.eighteen_twentyFourAR=$scope.eighteen_twentyFourAR;
			$rootScope.filterVal.thirtyFive_fourtyFourAR=$scope.thirtyFive_fourtyFourAR;
			$rootScope.filterVal.fiftyFive_sixtyFourAR=$scope.fiftyFive_sixtyFourAR;
			$rootScope.filterVal.greaterThanSeventyFiveAR=$scope.greaterThanSeventyFiveAR;
			$rootScope.filterVal.roofOccu=	$scope.roofOccu;
			$rootScope.filterVal.beauOccu=$scope.beauOccu;
			$rootScope.filterVal.mechOccu=$scope.mechOccu ;
			$rootScope.filterVal.trucOccu=$scope.trucOccu;
			$rootScope.filterVal.nurseOccu=$scope.nurseOccu;
			$rootScope.filterVal.schteachOccu= $scope.schteachOccu;
			$rootScope.filterVal.docOccu=$scope.docOccu;
			$rootScope.filterVal.govtPoliOccu=$scope.govtPoliOccu;
			$rootScope.filterVal.farRanOccu=$scope.farRanOccu;
			$rootScope.filterVal.showFilter=$scope.showFilter;
		}
}

	angular.module('App')
        .controller('filterController',['$scope','$state','$rootScope','$window',filterCtrl])
}());
