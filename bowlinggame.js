function Roll(firstStrike, secondStrike){
    if (this.Frames == undefined)
        this.Frames = [];
    this.Frames.push({firstRoll: firstStrike, secondRoll: secondStrike});
}
function GetScore(){
    var score = 0;
    this.Frames.forEach(function(element) {
        score = parseInt(score) + parseInt(element.firstRoll) + parseInt(element.secondRoll);
    }, this);
    return score;
}
function Initialize(){
    this.Frames = undefined;
}

module.exports = {
    Roll: Roll,
    GetScore: GetScore,
    Initialize: Initialize
}