'use strict';

/**
 * @ngdoc filter
 * @name spotipposApp.filter:pagination
 * @function
 * @description
 * # pagination
 * Filter in the spotipposApp.
 */
angular.module('spotipposApp')
  .filter('startFrom', function () {
    
    return function(input, start) {
      if (input) {
        start = +start; //parse to int
        return input.slice(start);
      }
      return [];
    };

  });
