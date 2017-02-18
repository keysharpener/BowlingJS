function Roll(firstStrike, secondStrike) {
    if (this.Frames == undefined)
        this.Frames = [];
    var isSpare = IsSpare(firstStrike, secondStrike);
    var isStrike = IsStrike(firstStrike);
    this.Frames.push({ firstRoll: firstStrike, secondRoll: secondStrike, isSpare: isSpare, isStrike: isStrike });
}
function IsSpare(firstStrike, secondStrike) {
    firstStrike = parseInt(firstStrike);
    secondStrike = parseInt(secondStrike);
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
    for (i = 0; i < this.Frames.length; i++) {
        var currentFrame = this.Frames[i];
        var bonusPoints = GetBonusPoints(this.Frames[i], this.Frames[i + 1], this.Frames[i + 2])
        score = parseInt(score) + parseInt(currentFrame.firstRoll) + parseInt(currentFrame.secondRoll) + bonusPoints;
    }
    this.Frames.forEach(function (element) {
    }, this);
    return score;
}
function GetBonusPoints(currentFrame, nextFrame, secondNextFrame) {
    var bonusPoints = 0;
    if (currentFrame.isSpare) {
        bonusPoints = nextFrame.firstRoll;
    }
    if (currentFrame.isStrike && !nextFrame.isStrike){
        bonusPoints = nextFrame.firstRoll + nextFrame.secondRoll;
    }
    if (currentFrame.isStrike && nextFrame.isStrike){
        bonusPoints = nextFrame.firstRoll + secondNextFrame.firstRoll;
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