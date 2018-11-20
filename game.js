// Game.js

var MultiDeck = require('./MultiDeck.js');
var Dealer    = require('./Dealer.js');
var Players   = require('./Players.js');
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

        this.players = new Players();
        log("created Game Players - empty");
        log("");

        // create one Player (for now) and add to Players
        var player = new Player("Huey");
        player.init(config.startCash);
        this.players.addPlayer(player);
        log("created player and added to Players");
        log("number of Players: " + this.players.playerCount());
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
        var player = this.players.player(0);
        var dealer = this.dealer;
        this.dealer.dealCardTo(player);
        this.dealer.dealCardTo(dealer);
        this.dealer.dealCardTo(player);
        this.dealer.dealCardTo(dealer);
    };

    // this should really be in a View method - outputting to screen
    this.showFirstCards = function() {
        log("showing first cards");
        log("");
        var player = this.players.player(0);
        var dealer = this.dealer;
        var s = "";

        s = player.name;
        s = s.padEnd(12) + player.hand.showCards() + "    ";
        s = s.padEnd(12) + "Points: " + player.hand.totalPoints();
        log(s);

        s = dealer.name;
        s = s.padEnd(12) + dealer.hand.showCards() + "    ";
        s = s.padEnd(12) + "Points: " + dealer.hand.totalPoints();
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
