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
  .filter('pagination', function () {
    
    return function (input, start) {
      
      return 'pagination filter: ' + input;
      
    };

  });
