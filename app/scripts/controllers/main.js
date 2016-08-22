'use strict';

/**
 * @ngdoc function
 * @name spotipposApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spotipposApp
 */
angular.module('spotipposApp')
  .controller('MainCtrl', function ($scope, $log, $http) {
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.properties = [];
    $scope.itemsPerPage = 10;
    $scope.load = true;

    $http({
		
		method: 'GET',
		url: 'http://spotippos.vivareal.com/properties?ax=1&ay=1&bx=1400&by=5'

	}).then(function successCallback(response) {

		$scope.properties = response.data.properties;
		$scope.load = false;
		

	}, function errorCallback(response) {
		

	});

	$scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];
    $scope.numberOfPages=function(){
        return Math.ceil($scope.data.length/$scope.pageSize);                
    }
    for (var i=0; i<45; i++) {
        $scope.data.push("Item "+i);
    }

  });
