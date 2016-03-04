/**
 * Created by 418630 on 11/30/2015.
 */
define(['q'], function (Q) {
    var getCampaigns = function (options) {
        var deferred = Q.defer();
        var response = {
            "campaignsByAgent": [
                {
                    "Sales_Campaign_ID": "01",
                    "Sales_Campaign_Territory_ID": "01",
                    "Campaign_Name": "campName1",
                    "Status": 3,
                    "remaining": 1,
                    "total": 2
                },
                {
                    "Sales_Campaign_ID": "01",
                    "Sales_Campaign_Territory_ID": "01",
                    "Campaign_Name": "campName1",
                    "Status": 3,
                    "remaining": 1,
                    "total": 2
                }
            ]
        };
        deferred.resolve(response);
        return deferred.promise;
    }

    var getCampaignsHousehold = function (options) {
        var deferred = Q.defer();
        var response = {
            "CampaignHouseholds": [
                {
                    "Household_ID": "id1",
                    "Household_Status": "new",
                    "City": "",
                    "County": "",
                    "Zip": "",
                    "Location": "27.6768768",
                    "Disposition": "new",
                    "Appointment_Type": "C",
                    "Actual_Disposition_Start_Date": "Thu 9 PM - 10 PM",
                    "donotContact": "true",
                    "powernames": "true",
                    "RefferalStatus": "",
                    "PolicyDetails": [
                        {
                            "Policy_ID": "xxxxxxxxxx",
                            "paymentpastdue": true,
                            "Claim_Indicator": true
                        }
                    ],
                    "synedwithsfdc": true,
                    "HouseholdMembers": [
                        {
                            "Sales_Target_ID": "id1",
                            "First_Name": "fn1",
                            "Last_Name": "ln1",
                            "Household_Member_Rank": "1",
                            "Role": "head",
                            "Age": "19",
                            "Phone": "000",
                            "Occupation": "farmer"
                        }
                    ]
                }
            ]
        };

        deferred.resolve(response);
        return deferred.promise;
    };


    var getCampaignsHouseHoldDetails = function (options) {
        var deferred = Q.defer();
        var response = {
            "PMOdata": {
                "HouseholdContactDetails": {
                    "Household_ID": "5657fedafb13d67f869d9837",
                    "Household_Status": "Refferal",
                    "Address_Line_1": "Woodhull Street",
                    "Address_Line_2": "Mulino",
                    "City": "Mulino",
                    "County": "Tunisia",
                    "State": "AZ",
                    "Zip": 87617,
                    "Disposition": "NotHome - Followup",
                    "Appointment_Type": "A",
                    "doNotContact": true,
                    "refferalStatus": "",
                    "members": [
                        {
                            "Sales_Target_ID": 0,
                            "Household_ID": "5657fedadd5882c6e024271b",
                            "First_Name": "Santana",
                            "Last_Name": "Petersen",
                            "Maiden_Name": "Petersen",
                            "Middle_Name_Initial": "Petersen",
                            "Household_Member_Rank": 1,
                            "Role": "Head",
                            "Age": 30,
                            "Phone": "(888) 537-3505",
                            "Occupation": "farmer",
                            "DOB": "03/20/1956",
                            "powernames": true
                        }
                    ],
                    "notes": [
                        {
                            "noteID": 0,
                            "timeStamp": 1288323623006,
                            "houseHoldId": "5657fedadd5882c6e024271b",
                            "noteText": "this is the guy from super market"
                        },
                        {
                            "noteID": 1,
                            "timeStamp": 1288323623006,
                            "houseHoldId": "5657fedadd5882c6e024271b",
                            "noteText": "this is the guy from super market2"
                        }
                    ],
                    "disposition": [
                        {
                            "Disposition_ID": 0,
                            "Disposition_Date": 1288323623006,
                            "Household_ID": "5657fedadd5882c6e024271b",
                            "Disposition": "Appointment",
                            "Follow_Up_Date_Time": "Follow up at 8:00 PM"
                        }
                    ],
                    "likeNames": [
                        {
                            "Sales_Target_ID": 1,
                            "Household_ID": "5657fedad2e7a411b1b913d2",
                            "First_Name": "Perry",
                            "Last_Name": "Henry",
                            "Household_Member_Rank": 3,
                            "Role": "Child"
                        }
                    ],
                    "policydetails": [
                        {
                            "Policy_ID": "xxxxxxxxxx0",
                            "Product_Name": "Cancer",
                            "Policy_Issue_Date": 1288323623006,
                            "Policy_Paid_to_Date": 1288323623006,
                            "Policy_ROP_Maturity_Date": 1288323623006,
                            "Claim_Indicator": false,
                            "policyMembers": [
                                {
                                    "First_Name": "Santana",
                                    "Last_Name": "Petersen",
                                    "Relationship": "owner",
                                    "owner": true,
                                    "Policy_Role_ID": "",
                                    "Role": ""
                                }
                            ]
                        }
                    ],
                    "refferal": [
                        {
                            "Sales_Target_ID": 2,
                            "Household_ID": "5657feda5cc47fdf6039f3fd",
                            "First_Name": "Santana",
                            "Last_Name": "Petersen",
                            "Relationship": "sister",
                            "Address_Line_1": "Woodhull Street",
                            "Address_Line_2": "Mulino",
                            "City": "Mulino",
                            "County": "Tunisia",
                            "State": "AZ",
                            "Zip": 87617,
                            "refferedBy": {
                                "Related_Sales_Target_ID": "ID",
                                "First_Name": "First_Name",
                                "Last_Name": "Last_Name"
                            }
                        }
                    ],
                    "Location": "",
                    "synedwithsfdc": true
                }
            }
        };
        deferred.resolve(response);
        return deferred.promise;
    }

    var getHouseHoldContactDetails = function(options){
        var deferred = Q.defer();
        var response = {
            "PMOdata": {
                "contactdetails": [
                    {
                        "Sales_Target_ID": 1,
                        "Household_ID": "5657fedafb13d67f869d9837",
                        "First_Name": "Santana",
                        "Last_Name": "Petersen",
                        "Maiden_Name": "Petersen",
                        "Middle_Name_Initial": "Petersen",
                        "Address_Line_1": "Woodhull Street",
                        "Address_Line_2": "Mulino",
                        "City": "Mulino",
                        "County": "Tunisia",
                        "State": "AZ",
                        "Zip": 87617,
                        "Phone": "(888) 537-3505",
                        "DOB": "03/21/56",
                        "Relationship": "Spouse",
                        "role": "Homemaker",  //check with anil on this
                        "Email": "snow.je@gmail.com"
                    }
                ]
            }
        };
        deferred.resolve(response);
        return deferred.promise;
    }

    return {
        getCampaigns: getCampaigns,
        getCampaignsHousehold: getCampaignsHousehold,
        getCampaignsHouseHoldDetails:getCampaignsHouseHoldDetails,
        getHouseHoldContactDetails: getHouseHoldContactDetails

    };
})