'use strict';

/**
 * @ngdoc filter
 * @name spotipposApp.filter:plural
 * @function
 * @description
 * # plural
 * Filter in the spotipposApp.
 */
angular.module('spotipposApp')
  .filter('plural', function () {
    
    return function (input, text) {

    	var number = parseInt(input);

      	if (number > 1) {
      		text = input + ' ' + text + 'S';
      	} else {
      		
      		text = input + ' ' + text;

      	}

		return text.toUpperCase();

    };

  });
