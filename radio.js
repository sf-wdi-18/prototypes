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

Radio.prototype.toggleSignal = function () {
    if (this.signalType === 'AM') {
        this.AMstation = this.station;
        this.signalType = 'FM';
        this.station = this.FMstation;
    }
    else if (this.signalType === 'FM') {
        this.FMstation = this.station;
        this.signalType = 'AM';
        this.station = this.AMstation;
    }
    else {
        console.log('Error: signalType is mis-defined');
    }
};