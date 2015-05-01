var Player = function() {
this.rolls = [];
};

Player.prototype.roll = function(pins) {
    this.rolls.push(pins);
};

Player.prototype.score = function() {
  var total = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      total += getStrikeScore();
      rollIndex ++;
    } else if (isSpare()) {
      total += getSpareScore();
      rollIndex += 2;
    } else {
      total += getNormalScore();
      rollIndex += 2;
    }
  }

  return total;

  function isStrike() {
    return game.rolls[rollIndex] == 10;
  }

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
  }

  function getStrikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function getSpareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }


  function getNormalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
};
