var Card = require('./Card.js');

const suits  = ['diamonds','hearts','clubs','spades'];
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

var Cards = function() {
    var self = this;
    this.cards = [];
    suits.forEach(function(suit) {
        values.forEach(function(value) {
            var color;
            if (suit === 'spades' || suit === 'clubs') {
                color = 'black';
            } else {
                color = 'red';
            }
            self.cards.push(new Card(value, color, suit));
        });
    });
    this.size = function() {
        return this.cards.length;
    };
    this.card = function(idx) {
        return this.cards[idx];
    };
};


function Deck() {
    this.cards = new Cards();       // Deck has Cards

    this.size = function() {
        return this.cards.size();
    };

    this.shuffle = function() {
        //
    };

    this.card = function(idx) {
        return this.cards.card(idx);
    };
};

module.exports = Deck;
