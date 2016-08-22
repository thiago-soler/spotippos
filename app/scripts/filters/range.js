'use strict';

/**
 * @ngdoc filter
 * @name spotipposApp.filter:range
 * @function
 * @description
 * # range
 * Filter in the spotipposApp.
 */
angular.module('spotipposApp')
  .filter('range', function () {

    return function (input, price, min, max) {

    	console.log(price, min, max);
    
		return true;
    
    };

  });
