function Dice (numberOfSides) {
  this.numberOfSides = numberOfSides;
  this.lastRoll;
}

Dice.prototype.roll = function () {
  this.lastRoll = Math.floor(Math.random() * numberOfSides) + 1;
  return this.lastRoll;
};