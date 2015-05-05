function CardDeck () {
    this.cards = [];
    this.init();
}

CardDeck.prototype.init = function () {
    for (var i = 1; i <= 52; i++) {
        this.cards.push(i);
    }
};

CardDeck.prototype.deal = function () {
    var card = Math.floor(Math.random() * (52)) + 1;  // 1..52
    this.cards.splice(card - 1, 1);
    return card;
};

CardDeck.prototype.isFull = function () {
    return this.cards.length === 52;
};

CardDeck.prototype.cut = function () {
    var cutDeck = [];
    var cut = Math.floor(Math.random() * (52));  // 0..51
    var deck1 = this.cards.splice(0, cut - 1);
    var deck2 = this.cards.splice(cut, 51 - cut);
    cutDeck.push(deck1);
    cutDeck.push(deck2);
    return cutDeck;
};

CardDeck.prototype.shuffle = function () {
    var shuffledCards = [];
    var randCard;
    while (shuffledCards.length < 52) {
        randCard = Math.floor(Math.random() * (52)) + 1;
        if (shuffledCards.indexOf(randCard) === -1)
          shuffledCards.push(randCard);
    }
    for (var i = 0; i < 52; i++) {
        this.cards[i] = shuffledCards[i];
    }
};
