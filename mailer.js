// Exercise 5

// Make a `Mailer` constructor that takes a `from` email address, 
// and has `currentMessage` set to an empty object, as well as a 
// `sentMessages` array.

var Mailer = function (from) {
	this.currentMessage = {};
	this.sentMessages = [];
}

// Add a `setSendTo` method that sets `currentMessage.sendTo` 
// to be a specified email.

Mailer.prototype.setSendTo = function(whoTo){
	this.currentMessage.sendTo = whoTo;
}

// Add a `setSubject` method that sets `currentMessage.subject` 
// to be a specified subject.

Mailer.prototype.setSubject = function(specifiedSubject){
	this.currentMessage.subject = specifiedSubject;
}

// Add a `send` method that:
// sets `currentMessage.from` to be `this.from`, 
// pushes `currentMessage` into `sentMessages`, 
// and sets `currentMessage` to be a new object.

Mailer.prototype.send = function(){
	this.currentMessage.from = this.from;
	this.sentMessages.push(this.currentMessage);
	this.currentMessage = {};
}

// Modify `send` so that it checks if `currentMessage` has both 
// a `sendTo` and `subject` before pushing to `sentMessages`.

Mailer.prototype.sendCareful = function(){
	this.currentMessage.from = this.from;
	if (this.currentMessage.sendTo) {
	  if (this.currentMessage.subject) {
	    this.sentMessages.push(this.currentMessage);
	    this.currentMessage = {};
	  } else {
	    console.log("The current message is missing a subject. Not sent.");
	  }
	} else {
	  console.log("The current message has no one to send to. Not sent");
	}
}
