'use strict';

angular.module('Test', [])
.controller('TestCtrl', function($scope){
	$scope.data = [
		{name:"summer", color: "green"},
		{name:"autum", color: "yellow"},
		{name:"winter", color: "white"},
		{name:"spring", color: "brown"},
	]
	var date = new Date()
	$scope.today = date;
})