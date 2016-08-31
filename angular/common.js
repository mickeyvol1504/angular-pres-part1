'use strict';

// Сервис $http
// 	$http.get
// 	$http.post
// 	$http.head
// 	$http.put
// 	$http.delete
// 	$http.jsonp
// 	$http.patch

angular.module('Test', [])
.controller('TestCtrl', function($scope, $http){
	$scope.sendRequest = function(){
		$http.get('data2.json').then(function successCallback(response){
			console.log(response);
			$scope.data = response.data;
		}, function errorCallback(response){
			console.log(response);
		})
		// $http({
		// 	method: 'GET',
		// 	url: 'data.json',
		// }).then(function successCallback(response){
		// 	console.log(response);
		// 	$scope.data = response.data;
		// }, function errorCallback(response){
		// 	console.log(response);
		// })
	}
})