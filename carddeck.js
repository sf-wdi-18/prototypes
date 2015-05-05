// Exercise 4

// Make a `CardDeck` constructor that returns an object with a `cards` 
// property that is an array of `52` numbers, `1..52`.
  
function CardDeck(){
  this.cards = [];
  for (var i = 1; i <= 52; i++) {
    this.cards.push(i);
  }
}
  
// Write a method called `deal`  that randomly returns a "card" 
// (a number from 1 .. 52) from `cards` and removes it from the 
// `cards` array.
  
CardDeck.prototype.deal = function() {
  var indexToRemove = Math.floor(Math.random()*this.cards.length);
  var numToRemove = this.cards[indexToRemove];
  this.cards.splice(indexToRemove, 1);
  return numToRemove;
}
  
// Write a method called `isFull` that returns `true` if all `52`
// cards are present or `false` otherwise.

CardDeck.prototype.isFull = function() {
  return this.cards.length === 52;
}

// Write a method called `cut` that randomly picks an index and 
// returns an array of two arrays, where the deck was split 
// at that index.

CardDeck.prototype.cut = function() {
  var cutIndex = Math.floor(Math.random()*this.cards.length);
  var cutArray = [];
  cutArray.push(this.cards.slice(0, cutIndex));
  cutArray.push(this.cards.slice(cutIndex,this.cards.length));
  return cutArray;
}

// BONUS: write a `shuffle` method that mixes up all the cards.
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
 
// How does this change your `deal` method?
// Now, we can deal a random card just by shuffling and then 
// using the `pop` method.

CardDeck.prototype.deal = function() {
  this.cards.shuffle();
  return this.cards.pop();
}
