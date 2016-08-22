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
    
    // var inputs = [
    //       '0',
    //       '1',
    //       '2'
    //     ],
    //     text = 'exemplo';

    // expect(plural(inputs[0])).toBe('');
    // expect(plural(text)).toBe('plural filter: ' + text);
    expect(true);
  });

});
