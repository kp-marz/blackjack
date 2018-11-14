var Card = require('./Card.js');

const suits  = ['diamonds','hearts','clubs','spades'];
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

var Cards = function(deck) {
    this.deck = deck;
    this.cards = [];
    var self = this;
    suits.forEach(function(suit) {
        values.forEach(function(value) {
            var color;
            if (suit === 'spades' || suit === 'clubs') {
                color = 'black';
            } else {
                color = 'red';
            }
            self.cards.push(new Card(value, suit, color, self.deck));
        });
    });

    this.size = function() {
        return this.cards.length;
    };
    this.card = function(idx) {
        return this.cards[idx];
    };
};


var Deck = function() {
    this.cards = new Cards(this);       // Deck has Cards

    this.size = function() {
        return this.cards.size();
    };

    this.shuffle = function() {
        //
    };

    this.card = function(idx) {
        return this.cards.card(idx);
    };
    this.cardValue = function(idx) {
        return this.cards.card(idx).value;
    };
};

//module.exports = Deck, Cards;       // test only - remove!
module.exports = {
    Deck : Deck,       // test only - remove!
    Cards : Cards
}

