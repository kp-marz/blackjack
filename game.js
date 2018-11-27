var Deck = require('./Deck.js');

// The Nightmare Before Christmas casino is finally open and Oggie's
// crew wants to simulate 20 games of black jack.  Each
// players starts with 200 dollars.  Each game is $15.  If
// they lose all their money they can no longer play.  Simulate
// the outcome.  At the end output the player and how much
// they each won / lost.

// RULES
// Number of Decks between 1-8
// Dealer Hits on 16 and Below

//Simulation Data 
const _ante = 15, _maxRounds = 20, _startingMoneyAmount = 200;
var _numberOfDecks = 1, _deck, _round = 1;
var _players = [new Player('Lock', _startingMoneyAmount),
                new Player('Shock', _startingMoneyAmount),
                new Player('Barrel', _startingMoneyAmount),
                new Player('Oggie', _startingMoneyAmount)];
//var _dealer = new Dealer('Dealer');


console.log(_players[1].split(0,_ante));

