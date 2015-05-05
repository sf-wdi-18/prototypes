function Radio (ownerName, signalType) {
    this.ownerName = ownerName;
    this.signalType = signalType;
    this.station;
    this.FMstation;
    this.AMstation;
}

Radio.prototype.setStation = function (station) {
    if (this.signalType === 'AM') {
        if (station >= 535 && station <= 1705) {
            this.station = station;
            return this.station;
        } else {
            console.log("That station is out of band for AM");
            return this.station;
        }
    } else if (this.signalType === 'FM') {
        if (station >= 88 && station <= 108) {
            this.station = station;
            return this.station;
        }
        else {
            console.log("That station is out of band for FM");
        }
    } else {
        console.log("Error: signalType is mis-defined");
    }
};

Radio.prototype.listen = function () {
    if (this.signalType === 'AM') {
        return "distorted music";
    }
    else if (this.signalType === 'FM') {
        return "clear music";
    }
    else {
        console.log("Error: signalType is mis-defined");
        return "No music for you!";
    }
};

Radio.prototype.toggleSignal = function(newSignalType){
  if (this.signalType === "AM" && newSignalType === "FM") {
    // record the AM station we start on as the AM station
    this.AMStation = this.station;
    // set the current station to the old FM station if there is one,
    // or a default FM station of 88.1 (because NPR is awesome)
    this.station = (this.FMStation ? this.FMStation : 88.1);
    // record the station we're on now as our new FM station
    this.FMStation = this.station;
    // switch signal type
    this.signalType = newSignalType;
  } else if (this.signalType === "FM" && newSignalType === "AM") {
    this.FMStation = this.station;
    this.station = (this.AMStation ? this.AMStation : 535);
    this.AMStation = this.station;
    this.signalType = newSignalType;
  } 
}
