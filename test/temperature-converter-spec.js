'use strict';
var expect = require('chai').expect;
var TemperatureConverter = require('../temperature-converter.js');

describe('Temperature Converter', function() {
    it('0 Kelvin should be -273.15 Celsius', function() {
        var expected = -273.15;
        var actual = TemperatureConverter.convertKtoC(0);
        expect(actual).to.equal(expected);
    });
});