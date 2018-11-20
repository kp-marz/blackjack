// Hand.js


var Hand = function() {

    this.cards = [];

    // should put range check here!
    this.card = function(idx) {
        return this.cards[idx];
    };

    this.cardCount = function() {
        return this.cards.length;
    };
    
    this.addCard = function(card) {
        return this.cards.push(card);
    };
    
    this.clear = function() {
        this.cards = [];        // garbage collection
    };
    
    
};


module.exports = Hand;
