# Intro Prototypes - Solutions

## Where are the solutions?!
Your homework asked you to make a series of .js files for each exercise. This solutions branch has a .js file for each assigned exercise : `dice.js`, `radio.js`, and `starship.js`.

As an extra solution format, this file (`solutions.md`) has solutions inline with the original information from the assignment README.  It's basically the same information, just structured differently.

###  Directions

* Fork this repo
* Clone it from your github account onto your computer, and switch into the directory
	* Make a JS file for each exercise you attempt.
	* Play with your code in your snippets or console to verify it works correctly.
* Once finished do the following:
	* `git add . -A` from the prototypes folder.
	* `git commit -m 'solutions'`
	* `git push origin master`
* Submit the link to your fork in the homework form.

----

| Goal |
| :--- |
| Try to complete the **dice**, **starship**, and **radio** problems.|

**NOTE**: it's very hard to express an exhaustive description of each custom type outlined below. We encourage you to discuss the ambiguity of requirements for **methods** and **properties**. Also, for some exercises, you might need to add a property (or properties) to the prototype in order to make your method work. 

## Exercises

1. Make a `Dice` constructor that takes a `numberOfSides`. Add a method called `roll` that randomly returns a number from `1` up to the `numberOfSides`.

  ```
  function Dice(numberOfSides) {
    this.numSides = numberOfSides;
  }
  Dice.prototype.roll = function(numberOfSides){
    return Math.floor(Math.random()*this.numSides)+1;
  }
  ```
  * Modify your `roll` method to record the returned side in a `lastRoll` property.
  ```
  Dice.prototype.lastRoll = null;
  Dice.prototype.roll = function(){
    var thisRoll = Math.floor(Math.random()*this.numSides)+1;
    this.lastRoll = thisRoll;
    return thisRoll;
  }
  ```

2. Make a `Starship` constructor that takes a `model` and `ownerName`. 
  ```
  function Starship(model, ownerName){
    this.model = model;
    this.ownerName = ownerName;
  } 
  ```
  * Give your `StarShip` a `setTopSpeed` method and a `getTopSpeed` method that let you change and read the `topSpeed`. *Assume `topSpeed` is just a number.*
  ```
  Starship.prototype.topSpeed = 9001;
  Starship.prototype.getTopSpeed = function(){ 
    return this.topSpeed; 
  }
  Starship.prototype.setTopSpeed = function(newTopSpeed) { 
    this.topSpeed = newTopSpeed; 
  }
  ```
  * Give your `Starship` an `accelerateTo` method that sets `currentSpeed` to some number, unless that number is greater than its `topSpeed`.
  ```
  Starship.prototype.currentSpeed = null;
  Starship.prototype.accelerateTo = function(newSpeed) { 
    if (newSpeed <= this.topSpeed) {
      this.currentSpeed = newSpeed;
    } else {
      console.log("She can't take that kind of speed, Captain!");
    }
  }
  ```

3. Make a `Radio` constructor that takes in an `ownerName` and a `signalType` ("AM" or "FM"). 
  ```
  var Radio = function(ownerName, signalType) {
    this.ownerName = ownerName;
    this.signalType = signalType;
  }
  ```
  * Add a `setStation` method to your radio that allows the following ranges for a `station` property:
    * `535` to `1705` for "AM".
    * `88` to `108` for "FM".
  ```
  Radio.prototype.station = null;
  Radio.prototype.setStation = function(stationNum) {
    if (this.signalType === "AM" && stationNum >= 535 && stationNum <= 1705) ||
    (this.signalType === "FM"  && stationNum >= 88 && stationNum <= 108) {
      this.station = stationNum;
    } else {
      console.log("Can't find station " + stationNum + this.signalType + ". Out of range.");
    }
  }
  ```
  * Add a `listen` method that returns the following:
    * `"distorted music"` for "AM".
    * `"clear music"` for "FM".
  ```
  Radio.prototype.listen = function() {
    if (this.signalType === "AM") {
      return "distorted music";
    } else if (this.signalType === "FM") {
      return "clear music";
    }
  }
  ```
  * SUPER BONUS: Add a `toggleSignal` method that lets you set `signalType` to `AM` or `FM`. Make sure the `station` is valid when you toggle. Your radio should remember the `station` from the other signal type when you toggle.
  ```
  Radio.prototype.lastAMStation = null;
  Radio.prototype.lastFMStation = null;
  Radio.prototype.toggleSignal = function(newSignalType){
    if (this.signalType === "AM" && newSignalType === "FM") {
      this.lastAMStation = this.station;
      this.station = (this.lastFMStation ? this.lastFMStation : 88.1);
      this.lastFMStation = this.station;
      this.signalType = newSignalType;
    } else if (this.signalType === "FM" && newSignalType === "AM") {
      this.lastFMStation = this.station;
      this.station = (this.lastAMStation ? this.lastAMStation : 535);
      this.lastAMStation = this.station;
      this.signalType = newSignalType;
    }
  }
  ```
 
4. Make a `CardDeck` constructor that returns an object with a `cards` property that is an array of `52` numbers, `1..52`.
  ``` 
  function CardDeck(){
    this.cards = [];
    for (var i = 1; i <= 52; i++) {
      this.cards.push(i);
    }
  }
  ```
	* Write a method called `deal`  that randomly returns a "card" (a number from 1 .. 52) from `cards` and removes it from the `cards` array.
  ``` 
  CardDeck.prototype.deal = function() {
    var indexToRemove = Math.floor(Math.random()*this.cards.length);
    var numToRemove = this.cards[indexToRemove];
    this.cards.splice(indexToRemove, 1);
    return numToRemove;
  }
  ```
	* Write a method called `isFull` that returns `true` or `false` if all `52` cards are present.
  ``` 
  CardDeck.prototype.isFull = function() {
    return this.cards.length === 52;
  }
  ```
	* Write a method called `cut` that randomly picks an index and returns an array of two arrays where the deck was split at that index.
  ```
    CardDeck.prototype.cut = function() {
      var cutIndex = Math.floor(Math.random()*this.cards.length);
      var cutArray = [];
      cutArray.push(this.cards.slice(0, cutIndex));
      cutArray.push(this.cards.slice(cutIndex,this.cards.length));
      return cutArray;
    }
  ```
	* BONUS: write a `shuffle` method that mixes up all the cards. How does this change your `deal` method?
  ```
  CardDeck.prototype.shuffle = function() {
    var cardsCopy = this.cards.slice(0, this.cards.length);
    var cardsOut = [];
    while(cardsCopy.length) {
      indexToTake = Math.floor(Math.random()*cardsCopy.length);
      cardsOut.push(cardsCopy[indexToTake]);
      cardsCopy.splice(indexToTake,1);
    }
    this.cards = cardsOut;
  }
  ```
  Now, we can deal a random card just by using the `.pop` method.
  ```
  CardDeck.prototype.deal = function() {
    this.cards.shuffle();
    return this.cards.pop();
  }
  ```
	
5. Make a `Mailer` constructor that takes a `from` email address, and has `currentMessage` set to an empty object, as well as a `sentMessages` array.
  ```
  var Mailer = function (from) {
    this.currentMessage = {};
    this.sentMessages = [];
  }
  ```
  * Add a `setSendTo` method that sets `currentMessage.sendTo` to be a specified email.
  ```
  Mailer.prototype.setSendTo = function(whoTo){
    this.currentMessage.sendTo = whoTo;
  }
  ```
  * Add a `setSubject` method that sets `currentMessage.subject` to be a specified subject.
  ```
  Mailer.prototype.setSubject = function(specifiedSubject){
    this.currentMessage.subject = specifiedSubject;
  }
  ```
  * Add a `send` method that sets `currentMessage.from` to be `this.from`, pushes `currentMessage` into `sentMessages`, and sets `currentMessage` to be a new object.
  ```
  Mailer.prototype.send = function(){
    this.currentMessage.from = this.from;
    this.sentMessages.push(this.currentMessage);
    this.currentMessage = {};
  }
  ```
    * Modify `send` so that it checks if `currentMessage` has both a `sendTo` and `subject` before pushing to `sentMessages`.
  ```
  Mailer.prototype.send = function(){
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
  ```
