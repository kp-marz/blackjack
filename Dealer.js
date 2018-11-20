// Dealer.js

var Hand = require('./Hand.js');

var Dealer = function(name, deck) {
    this.name = name;
    this.deck = deck;
    this.hand = new Hand();

    this.rounds = 0;
    this.wins   = 0;
    this.losses = 0;

    this.init = function() {
        this.rounds = 0;
        this.wins   = 0;
        this.losses = 0;
    };

    this.dealCardTo = function(player) {
        var card = this.deck.dealCard();
        player.hand.addCard(card);
    };

};


module.exports = Dealer;
