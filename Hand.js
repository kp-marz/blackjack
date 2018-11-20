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
    
    this.showCards = function() {
        var s = "";
        for (var i = 0; i < this.cardCount(); i++) {
            var card = this.card(i);
            s += card.faceValue().padEnd(6);
        }
        return s;
    };
    
    this.totalPoints = function() {
        var total = 0;
        for (var i = 0; i < this.cardCount(); i++) {
            var card = this.card(i);
            total += card.pointValue();
        }
        return total;
    };
    
    this.clear = function() {
        this.cards = [];        // garbage collection
    };
    
};


module.exports = Hand;
