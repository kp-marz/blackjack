// Deck.js

var Card = require('./Card.js');

// Spades, Clubs, Diamonds, Hearts
const suits  = ['S', 'C', 'D', 'H'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


var Deck = function() {

    this.cards = [];

    this.createCards = function() {
        for (var s = 0; s < suits.length; s++) {
            for (var v = 0; v < values.length; v++) {
                var card = new Card(values[v], suits[s]);
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

    
    // run when Deck is created
    this.createCards();
};


module.exports = Deck;
