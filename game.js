// Game.js

var MultiDeck = require('./MultiDeck.js');

var config = {
    numDecks : 4,
    anteAmount : 15,
    startCash : 200
};

var log = function(txt) {
    console.log(txt);
};


var Game = function(id) {
    this.id = id;

    // the main Game objects
    this.deck = null;
    this.dealer = null;
    this.players = null;

    // Game methods
    this.createGameObjects = function() {
        this.deck = new MultiDeck();
        this.deck.createDecks(config.numDecks);
        log("createGameObjects OK");
    };

    this.playSingleRound = function() {
        log("playSingleRound OK");
    };

    this.showFinalStats = function() {
        log("showFinalStats OK");
    };

    this.run = function() {
        log("Running " + this.id);
        log("");

        this.createGameObjects();
        this.playSingleRound();
        this.showFinalStats();

        log("");
        log(this.id + " completed.");
    };

};

var game = new Game("Blackjack Simulator Game");
game.run();


/*
log("");
log("created: " + game);
log("id: "   + game.id);
log("deck: " + game.deck);
log("cardCount: " + game.deck.cardCount());
log("");
*/
