'use strict';

describe('Filter: currency', function () {

  // load the filter's module
  beforeEach(module('spotipposApp'));

  // initialize a new instance of the filter before each test
  var currency;
  beforeEach(inject(function ($filter) {
    currency = $filter('currency');
  }));

  
  it('Normaliza o formato do preço para real a partir do dado enviado pela API REST"', function () {
    
    var inputs = [
          '1',
          '10',
          '100',
          '1000',
          '10000',
          '100000',
          '1000000',
          '10000000',
          '100000000'
        ];

    expect(currency()).toBe('');
    expect(currency(inputs[0])).toBe('R$ 1');
    expect(currency(inputs[1])).toBe('R$ 10');
    expect(currency(inputs[2])).toBe('R$ 100');
    expect(currency(inputs[3])).toBe('R$ 1.000');
    expect(currency(inputs[4])).toBe('R$ 10.000');
    expect(currency(inputs[5])).toBe('R$ 100.000');
    expect(currency(inputs[6])).toBe('R$ 1.000.000');
    expect(currency(inputs[7])).toBe('R$ 10.000.000');
    expect(currency(inputs[8])).toBe('R$ 100.000.000');


  });


});
