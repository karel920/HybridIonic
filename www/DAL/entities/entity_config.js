/**
 * Created by SaiMukesh on 21/11/15.
 */
define([], function() {

	var syncentities = [ {
		name : "Agent"
	}, {
		name : "Campaign_Household"
	}, {
		name : "Disposition"
	}, {
		name : "Gap"
	}, {
		name : "Hotsheet"
	}, {
		name : "Household"
	}, {
		name : "Household_Member"
	}, {
		name : "Policy"
	}, {
		name : "Policy_Activity"
	}, {
		name : "Policy_Role"
	}, {
		name : "Product"
	}, {
		name : "Role"
	}, {
		name : "Sales_Campaign"
	}, {
		name : "Sales_Campaign_Area"
	}, {
		name : "Sales_Campaign_Territory"
	}, {
		name : "Sales_Target"
	}, {
		name : "Sales_Target_Relationship"
	}, {
		name : "User"
	} ];
	var offlinepluginentities = [];
	var nonsyncentities = [];
	var onlinepluginentities = [];

	var mergedEntityArray = [];

	syncentities.forEach(function(item) {
		mergedEntityArray.push({
			name : 'entities/syncentities/' + item.name
		});
	});
	offlinepluginentities.forEach(function(item) {
		mergedEntityArray.push({
			name : 'entities/offlinepluginentities/' + item.name
		});
	});
	nonsyncentities.forEach(function(item) {
		mergedEntityArray.push({
			name : 'entities/nonsyncentities/' + item.name
		});
	});
	onlinepluginentities.forEach(function(item) {
		mergedEntityArray.push({
			name : 'entities/onlinepluginentities/' + item.name
		});
	});

	return mergedEntityArray;
});