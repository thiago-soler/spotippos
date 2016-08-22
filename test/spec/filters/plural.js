'use strict';

describe('Filter: plural', function () {

  // load the filter's module
  beforeEach(module('spotipposApp'));

  // initialize a new instance of the filter before each test
  var plural;
  beforeEach(inject(function ($filter) {
    plural = $filter('plural');
  }));

  it('should return the input prefixed with "plural filter:"', function () {
    var text = 'angularjs';
    expect(plural(text)).toBe('plural filter: ' + text);
  });

});
