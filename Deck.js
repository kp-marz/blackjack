var Card = require('./Card.js');
let deck = [];
const suits =  ['diamond','heart','club','spade'];
const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

function createDeck() {
  let deck = []; // local variable
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) { // 4 suits will go through 0-3
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        let card ={
            suit: suits[suitIdx],
            value: values[valueIdx]
        };
      deck.push(card); // logs/pushes this into the empty deck array
    }
  }
  return deck;
}

//Shuffling Cards
function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
  return deck;
}




function getCardString(card) {
    return card.value + ' of ' + card.suit;
}


var ranDeck = [];
for (let i = 0; i < 4; i++) {
    ranDeck[i] = shuffleDeck(createDeck());
}

console.log(ranDeck);