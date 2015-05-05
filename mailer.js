function Mailer (from) {
    this.from = from;
    this.currentMessage = {};
    this.sentMessages = [];
}

Mailer.prototype.setSendTo = function (address) {
    this.currentMessage.sendTo = address;
    return this.currentMessage.sendTo;
};

Mailer.prototype.setSubject = function (subject) {
    this.currentMessage.subject = subject;
    return this.currentMessage.subject;
};

Mailer.prototype.send = function () {
    this.currentMessage.from = this.from;
    if (this.currentMessage.sendTo && this.currentMessage.subject)
        this.sentMessages.push(currentMessage);
    this.currentMessage = {};
};