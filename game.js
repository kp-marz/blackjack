// Game.js

var Deck = require('./Deck.js');

var config = {
    numDecks : 4,
    anteAmount : 15,
    startCash : 200
};


var Game = function() {

    this.deck = null;
    this.dealer = null;
    this.players = null;

};

