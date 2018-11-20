// Game.js

var MultiDeck = require('./MultiDeck.js');
var Dealer    = require('./Dealer.js');
var Player    = require('./Player.js');


var config = {
    numDecks   : 4,
    numRounds  : 2,
    anteAmount : 15,
    startCash  : 200
};

var log = function(txt) {
    console.log(txt);
};


var Game = function(id) {
    this.id = id;

    // the main Game objects
    this.deck    = null;
    this.dealer  = null;
    this.players = null;

    // Game properties
    this.currRound = 0;

    // Game methods
    this.createGameObjects = function() {
        log("createGameObjects");

        // create the Deck
        this.deck = new MultiDeck();
        this.deck.createDecks(config.numDecks);
        log("created Game deck");

        // create Dealer passing in Deck
        this.dealer = new Dealer("Scrooge", this.deck);
        log("created Game dealer");

        // create one Player (for now)
        this.player1 = new Player("Huey");
        this.player1.init(config.startCash);
        log("created Game player1");
        log("");
    };

    this.playSingleRound = function() {
        log("playSingleRound");
        this.currRound++;

        this.placeAntes();
        this.shuffleDeck();
        this.dealFirstCards();
        this.showFirstCards();
        this.evaluateHands();
        this.reconcileResults();

        log("");
    };

    this.placeAntes = function() {
        log("players placing antes");
    };

    this.shuffleDeck = function() {
        log("dealer shuffling deck");
        this.dealer.deck.shuffle();
    };

    this.dealFirstCards = function() {
        log("dealing first cards");
        this.dealer.dealCardTo(this.player1);
        this.dealer.dealCardTo(this.dealer);
        this.dealer.dealCardTo(this.player1);
        this.dealer.dealCardTo(this.dealer);
    };

    // this should really be in a View method - outputting to screen
    this.showFirstCards = function() {
        var s = "";
        log("showing first cards");
        log("");

        s = this.player1.name;
        s = s.padEnd(12) + this.player1.hand.showCards() + "    ";
        s = s.padEnd(12) + "Points: " + this.player1.hand.totalPoints();
        log(s);

        s = this.dealer.name;
        s = s.padEnd(12) + this.dealer.hand.showCards() + "    ";
        s = s.padEnd(12) + "Points: " + this.dealer.hand.totalPoints();
        log(s);
        log("");
    };

    this.evaluateHands = function() {
        log("evaluating hands");
    };

    this.reconcileResults = function() {
        log("reconciling wins and losses");
    };

    // this should really be in a View method - outputting to screen
    this.showFinalStats = function() {
        //log("showFinalStats");
        log("");
        log("========================================");
        log("Final Stats:                            ");
        log("                                        ");
        log("Rounds played: " + this.currRound        );
        log("                                        ");
        log("Huey:                                   ");
        log("Louie:                                  ");
        log("Dewey:                                  ");
        log("                                        ");
        log("House results:                          ");
        log("========================================");
        log("");
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
