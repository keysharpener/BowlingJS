var assert = require('assert');
var BowlingGame = require('../bowlinggame');

describe('BowlingGame', function() {
  describe('#Roll()', function() {
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
  describe('#Roll()', function() {
    it('should return score of 10 if one pin striked each frame', function() {
        BowlingGame.Initialize();        
        for (i = 0; i < 10; i++){
            BowlingGame.Roll(1,0)
        }
        assert.equal(10, BowlingGame.GetScore());
    });
  });
});

describe('BowlingGame', function() {
  describe('#Roll()', function() {
    it('should double the score of the next frame if all pins striked in one frame (spare)', function() {
        BowlingGame.Initialize();        
        BowlingGame.Roll(1,9);
        BowlingGame.Roll(1,0);
        for (i = 2; i < 10; i++){
            BowlingGame.Roll(0,0)
        }
        assert.equal(12, BowlingGame.GetScore());
    });
  });
});

describe('BowlingGame', function() {
  describe('#Roll()', function() {
    it('should double the next two strikes of the next frame if strike occurs and next frame is normal', function() {
        BowlingGame.Initialize();        
        BowlingGame.Roll(10,0);
        BowlingGame.Roll(5,5);
        for (i = 2; i < 10; i++){
            BowlingGame.Roll(0,0)
        }
        assert.equal(30, BowlingGame.GetScore());
    });
  });
});

describe('BowlingGame', function() {
  describe('#Roll()', function() {
    it('should double the next two strikes of the next frame if strike occurs and next frame is normal', function() {
        BowlingGame.Initialize();        
        BowlingGame.Roll(10,0);
        BowlingGame.Roll(10,0);
        BowlingGame.Roll(5,5);
        for (i = 3; i < 10; i++){
            BowlingGame.Roll(0,0)
        }
        assert.equal(55, BowlingGame.GetScore());
    });
  });
});