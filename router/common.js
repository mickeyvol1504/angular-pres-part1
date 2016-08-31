'use strict';

angular.module('Test', ['ui.router'])

.controller('Item1Ctrl', ['$scope', function($scope){
	$scope.data = [
		{name:"summer", color: "green"},
		{name:"autum", color: "yellow"},
		{name:"winter", color: "white"},
		{name:"spring", color: "brown"},
	]
}])

.controller('Item2Ctrl', ['$scope', function($scope){
	$scope.data = [
		{name:"monday", number: "one"},
		{name:"tuesday", number: "two"},
		{name:"wednesday", number: "three"},
		{name:"thursday", number: "four"},
		{name:"friday", number: "five"},
		{name:"saturday", number: "six"},
		{name:"sunday", number: "seven"},
	]
}])

.controller('Item3Ctrl', ['$scope', function($scope){
	$scope.data = [
		{name:"Kiev", country: "Ukraine"},
		{name:"London", country: "England"},
		{name:"Madrid", country: "Spain"},
		{name:"Tokio", country: "Japan"},
	]
}])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/")

	$stateProvider
		.state('season', {
			url: '/season',
			templateUrl: 'item1.html',
			controller: 'Item1Ctrl'
		}).state('days', {
			url: '/days',
			templateUrl: 'item2.html',
			controller: 'Item2Ctrl'
		}).state('capitals', {
			url: '/capitals',
			templateUrl: 'item3.html',
			controller: 'Item3Ctrl'
		});

}]);