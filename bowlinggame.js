function Roll(firstStrike, secondStrike) {
    if (this.Frames == undefined)
        this.Frames = [];
    var frame = BuildFrame(firstStrike, secondStrike);
    if (this.Frames.length == 10 && (!this.Frames[9].isSpare && !this.Frames[9].isStrike))
        throw "No more than 10 frames in a game";
    this.Frames.push(frame);
}
function BuildFrame(firstStrike, secondStrike) {
    firstStrike = parseInt(firstStrike);
    secondStrike = parseInt(secondStrike);
    var isSpare = IsSpare(firstStrike, secondStrike);
    var isStrike = IsStrike(firstStrike);
    return { firstRoll: firstStrike, secondRoll: secondStrike, isSpare: isSpare, isStrike: isStrike };
}
function IsSpare(firstStrike, secondStrike) {
    if (firstStrike != 10 && firstStrike + secondStrike == 10)
        return true;
    return false;
}
function IsStrike(firstStrike) {
    if (firstStrike == 10)
        return true;
    return false;
}
function GetScore() {
    var score = 0;
    var framesToConsider = 0;
    if (this.Frames.length >= 10)
        framesToConsider = 10;
    else{
        framesToConsider = this.Frames.length;
        if (this.Frames[this.Frames.length-1].isSpare || this.Frames[this.Frames.length-1].isStrike)
            return "X";
    }
    for (i = 0; i < framesToConsider; i++) {
        var currentFrame = this.Frames[i];
        var bonusPoints = GetBonusPoints(this.Frames[i], this.Frames[i + 1], this.Frames[i + 2])
        score = score + currentFrame.firstRoll + currentFrame.secondRoll + bonusPoints;
    }
    return score;
}
function GetBonusPoints(currentFrame, nextFrame, secondNextFrame) {
    var bonusPoints = 0;
    if (currentFrame.isSpare) {
        bonusPoints = nextFrame.firstRoll;
    }
    if (nextFrame != undefined) {
        if (currentFrame.isStrike && !nextFrame.isStrike) {
            bonusPoints = nextFrame.firstRoll + nextFrame.secondRoll;
        }
    }
    if (nextFrame != undefined && secondNextFrame != undefined) {
        if (currentFrame.isStrike && nextFrame.isStrike) {
            bonusPoints = nextFrame.firstRoll + secondNextFrame.firstRoll;
        }
    }
    return bonusPoints;

}
function Initialize() {
    this.Frames = undefined;
}

module.exports = {
    Roll: Roll,
    GetScore: GetScore,
    Initialize: Initialize
}