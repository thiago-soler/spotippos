'use strict';

/**
 * @ngdoc filter
 * @name spotipposApp.filter:currency
 * @function
 * @description
 * # currency
 * Filter in the spotipposApp.
 */
angular.module('spotipposApp')
  .filter('currency', function () {

    return function (input) {

    	input = input || '';

    	var mod = input.length % 3,
    		idx = 0,
    		valueSplit = input.split(''),
    		result = '',
    		count = false,
    		nextDot = 0;


		for (idx in valueSplit) {

			if (count === true) {
				nextDot = nextDot + 1;
			}

			if (parseInt(idx) === parseInt(mod) && parseInt(idx) > 0) {
				result = result + '.';
				count = true;
			}

			if (nextDot === 3 || (parseInt(idx) % 3) === 0 && count === false && parseInt(idx) > 0) {

				result = result + '.';
				nextDot = 0;

			}

			result = result + valueSplit[idx];

		}
		
		if (result !== '') {

			result = 'R$ ' + result;
		}

		return result;

    };

  });
