var assert = require('assert');
var BowlingGame = require('../bowlinggame');

describe('BowlingGame', function() {
  describe('#add()', function() {
    it('should return score of zero if nothing was striked', function() {
        BowlingGame.Initialize();
        for (i = 0; i < 10; i++){
            BowlingGame.Roll(0,0)
        }
        assert.equal(0, BowlingGame.GetScore());
    });
  });
});
describe('BowlingGame', function() {
  describe('#add()', function() {
    it('should return score of 10 if one pin striked each frame', function() {
        BowlingGame.Initialize();        
        for (i = 0; i < 10; i++){
            BowlingGame.Roll(1,0)
        }
        assert.equal(10, BowlingGame.GetScore());
    });
  });
});