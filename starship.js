function Starship (model, ownerName) {
    this.model = model;
    this.ownerName = ownerName;
    this.topSpeed;
    this.currentSpeed;
}

Starship.prototype.setTopSpeed = function (newTopSpeed) {
    this.topSpeed = newTopSpeed;
};

Starship.prototype.getTopSpeed = function () {
    return this.topSpeed;
};

Starship.prototype.accelerateTo = function (newSpeed) {
    if (newSpeed >= 0 && newSpeed <= topSpeed) {
        this.currentSpeed = newSpeed;
        return this.currentSpeed;
    }
    else if (newSpeed > topSpeed) {
        console.log("The starship doesn't go that fast!  Setting speed to top speed.");
        return this.topSpeed;
    } else {
        console.log("Negative speed invalid!  No change to speed.");
        return this.currentSpeed;
    }
};

