var assert = require('assert');
var BowlingGame = require('../bowlinggame');

describe('BowlingGame', function() {
  describe('#add()', function() {
    it('should do nothing if nothing done', function() {
        BowlingGame.Roll(0,0)
        assert.equal(0, BowlingGame.GetScore());
    });
  });
});