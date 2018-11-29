var Deck = require('./Deck.js');
var Player = require('./Players.js');

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

console.log("Welcome to Black Jack!")
    
    function getStatus() {
        let playerAmt = [];
        for (let moneyIdx=0; moneyIdx < _players.length; moneyIdx++)  {
                let status = {
                    player: _players[moneyIdx].name,
                    amount: _players[moneyIdx].money
                };

                playerAmt.push(status);
            }
        return playerAmt;
        }

function getStatusString(status){
    return status.player + ' has ' + status.amount;
};

let playerAmt = getStatus();

let playerStatus = 

console.log(getStatusString(playerAmt[0]));
console.log(getStatusString(playerAmt[1]));
console.log(getStatusString(playerAmt[2]));
console.log(getStatusString(playerAmt[3]));


//console.log(_players[1].name + ' has ' + _players[1].money );
