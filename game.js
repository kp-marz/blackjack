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
const _ante = 15, _maxRounds = 20, startingMoneyAmount = 200;
var _numberOfDecks = 1, _deck, _round = 1;
var _players = [new Player('Lock', 200),
                new Player('Shock', 200),
                new Player('Barrel', 200),
                new Player('Oggie', 200)];
var _dealer = new Dealer('Dealer');

loop for 20 rounds {

    create deck of Decks

    players put in their startingMoneyAmount

    dealer shuffles deck

    dealer deals the cards to players and dealer

    dealer is showing one card up (the second card in his/her hand)

    players cards are up

    player 1 will evalute and perform hit, stay, split, double down

    eventually must stay or bust

    dealer will evaluate then stay or hit

    reconcile - payout or collect _ante

}

Print results