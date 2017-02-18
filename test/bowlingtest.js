var assert = require('assert');
var bowlinggame = require('../bowlinggame');

describe('stringcalculator', function() {
  describe('#add()', function() {
    it('should do nothing if nothing done', function() {
      assert.equal(3, bowlinggame.Roll(1,2));
    });
  });
});