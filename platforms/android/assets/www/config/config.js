'use strict';
appConfig.constant('DB_CONFIG', {
	name : 'PMOMobileDB',
	key : 'passwordkey',
	tables : [ {
		name : 'tilestorage',
		columns : [ {
			name : 'key',
			type : 'TEXT PRIMARY KEY'
		}, {
			name : 'value',
			type : 'text'
		} ]
	}, {
		name : 'loginTable',
		columns : [ {
			name : 'userName',
			type : 'TEXT'
		}, {
			name : 'password',
			type : 'TEXT'
		}, {
			name : 'role',
			type : 'TEXT'
		}, {
			name : 'token',
			type : 'TEXT'
		}, {
			name : 'expiry',
			type : 'DATETIME'
		}, {
			name : 'agentName',
			type : 'TEXT'
		}, {
			name : 'agentId_SF',
			type : 'TEXT'
		} ]
	} ]
});