// Card.js

var Card = function(value, suit, color, deck) {

    this.value = value;
    this.suit  = suit;
    this.color = color;
    this.deck  = deck;      // parent

    /*
    this.color = function() {
        if (this.suit === 'spades' || this.suit === 'clubs') return 'black';
        if (this.suit === 'hearts' || this.suit === 'diamonds') return 'red';
    };
    */
};

module.exports = Card;
