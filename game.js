var Deck = require('./Deck.js');

// The Duck Tales guys are going to the casino and they want to simulate 20 games of black jack.
// Each player starts with 200 dollars.  Each game is $15.
// If they lose all their money they can no longer play.
// Simulate the outcome.
// At the end output the player and how much they each won / lost.

// RULES
// Number of Decks between 1-8
// Dealer Hits on 16 and Below

// Simulation Data 

/*

var config = {
    playerCount : 5,
    deckCount : 1,      // 1 thru 8
    startCash : 200,
    gameCost : 15,
    gameCount : 20
};

*/

Game = function() {
    this.deck = new Deck();
};

var game = new Game();


//console.log(game.deck.cards);
//console.log(game.deck.card(0));
console.log(game.deck.cardValue(0));

