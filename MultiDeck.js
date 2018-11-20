// MultiDeck.js

var Deck = require('./Deck.js');


var MultiDeck = function() {

    this.cards = [];

    // called after number of decks is determined
    this.createDecks = function(numDecks) {
        this.cards = [];
        // create decks and add its cards to this
        for (var i = 0; i < numDecks; i++) {
            var deck = new Deck();
            for (var c = 0; c < deck.cardCount(); c++) {
                var card = deck.card(c);
                this.cards.push(card);
            }
        }
    };

    // should put range check here!
    this.card = function(idx) {
        return this.cards[idx];
    };

    this.cardCount = function() {
        return this.cards.length;
    };
    
    this.dealCard = function() {
        return this.cards.pop();
    };
    
    // Durstenfeld algorithm - shuffle any array in place
    this.shuffle = function() {
        var i, j, temp;
        for (i = this.cardCount() - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    };   

};


module.exports = MultiDeck;
