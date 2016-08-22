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

    $scope.listConfig = {
      reverseSort: true,
      currentPage: 1,
      maxSize: 5,
      entryLimit: 5,
      orderByField: 'orderBy',
      load: true
    };


    $http({

      method: 'GET',
      url: 'http://spotippos.vivareal.com/properties?ax=1&ay=1&bx=1400&by=1000'

    }).then(function successCallback(response) {

      $scope.properties = response.data.properties;
      $scope.listConfig.load = false;


    }, function errorCallback(response) {


    });

});
