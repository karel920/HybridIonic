/* global angular */
var PMAAppServices = angular.module('PMAApp.Services',['App.services','App.config']);
var PMAAppConfig =   angular.module('PMAApp.config', ['ui.router']);
var PMAAppControllers = angular.module('PMAApp.controllers',['PMAApp.config']);
var PMAApp = angular.module('PMAApp', ['PMAApp.controllers','PMAApp.Services','PMAApp.config','App','ngMessages']);