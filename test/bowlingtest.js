var assert = require('assert');
var BowlingGame = require('../bowlinggame');

describe('BowlingGame', function () {
    describe('#Roll()', function () {
        it('should return score of zero if nothing was striked', function () {
            BowlingGame.Initialize();
            for (i = 0; i < 10; i++) {
                BowlingGame.Roll(0, 0)
            }
            assert.equal(0, BowlingGame.GetScore());
        });
    });
});
describe('BowlingGame', function () {
    describe('#Roll()', function () {
        it('should return score of 10 if one pin striked each frame', function () {
            BowlingGame.Initialize();
            for (i = 0; i < 10; i++) {
                BowlingGame.Roll(1, 0)
            }
            assert.equal(10, BowlingGame.GetScore());
        });
    });
});

describe('BowlingGame', function () {
    describe('#Roll()', function () {
        it('should double the score of the next frame if all pins striked in one frame (spare)', function () {
            BowlingGame.Initialize();
            BowlingGame.Roll(1, 9);
            BowlingGame.Roll(1, 0);
            for (i = 2; i < 10; i++) {
                BowlingGame.Roll(0, 0)
            }
            assert.equal(12, BowlingGame.GetScore());
        });
    });
});

describe('BowlingGame', function () {
    describe('#Roll()', function () {
        it('should double the next two strikes of the next frame if strike occurs and next frame is normal', function () {
            BowlingGame.Initialize();
            BowlingGame.Roll(10, 0);
            BowlingGame.Roll(5, 5);
            for (i = 2; i < 10; i++) {
                BowlingGame.Roll(0, 0)
            }
            assert.equal(30, BowlingGame.GetScore());
        });
    });
});

describe('BowlingGame', function () {
    describe('#Roll()', function () {
        it('should double the next two strikes of the next frame if strike occurs and next frame is normal', function () {
            BowlingGame.Initialize();
            BowlingGame.Roll(10, 0);
            BowlingGame.Roll(10, 0);
            BowlingGame.Roll(5, 5);
            for (i = 3; i < 10; i++) {
                BowlingGame.Roll(0, 0)
            }
            assert.equal(55, BowlingGame.GetScore());
        });
    });
});

describe('BowlingGame', function () {
    describe('#Roll()', function () {
        it('should raise an error if an eleventh frame is added and tenth frame is regular', function () {
            BowlingGame.Initialize();
            for (i = 0; i < 10; i++) {
                BowlingGame.Roll(0, 0)
            }
            try {
                BowlingGame.Roll(0, 0)
                assert.fail();
            } catch (error) {
                assert.equal(error, "No more than 10 frames in a game");
            }
        });
    });
});

describe('BowlingGame', function () {
    describe('#Roll()', function () {
        it('should allow eleventh frame if tenth frame is special (one roll allowed for spare, two for strike)', function () {
            BowlingGame.Initialize();
            for (i = 0; i < 9; i++) {
                BowlingGame.Roll(0, 0);
            }
            BowlingGame.Roll(10, 0);
            BowlingGame.Roll(5, 5);
            assert.equal(20, BowlingGame.GetScore());
        });
    });
});

describe('BowlingGame', function () {
    describe('#Roll()', function () {
        it('should count the right score for a random game', function () {
            BowlingGame.Initialize();
            BowlingGame.Roll(4, 3);
            BowlingGame.Roll(10, 0);
            BowlingGame.Roll(5, 5);
            BowlingGame.Roll(4, 2);
            BowlingGame.Roll(7, 3);
            BowlingGame.Roll(7, 0);
            BowlingGame.Roll(10, 0);
            BowlingGame.Roll(3, 3);
            BowlingGame.Roll(5, 4);
            BowlingGame.Roll(3, 5);
            assert.equal(110, BowlingGame.GetScore());
        });
    });
});

describe('BowlingGame', function () {
    describe('#Roll()', function () {
        it('should return the score at any time if last frame was standard', function () {
            BowlingGame.Initialize();
            BowlingGame.Roll(4, 3);
            BowlingGame.Roll(10, 0);
            BowlingGame.Roll(5, 4);
            assert.equal(35, BowlingGame.GetScore());
        });
    });
});
describe('BowlingGame', function () {
    describe('#Roll()', function () {
        it('should return X if current frame is spare', function () {
            BowlingGame.Initialize();
            BowlingGame.Roll(5, 5);
            assert.equal("X", BowlingGame.GetScore());
        });
    });
});
describe('BowlingGame', function () {
    describe('#Roll()', function () {
        it('should return X if current frame is strike', function () {
            BowlingGame.Initialize();
            BowlingGame.Roll(10, 0);
            assert.equal("X", BowlingGame.GetScore());
        });
    });
});