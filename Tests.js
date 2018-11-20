// Tests.js


var MultiDeck = require('./MultiDeck.js');
var Hand = require('./Hand.js');



var deck = null;
var card = null;
var hand = null;
var numDecks = 4;

var log = function(txt) {
    console.log(txt);
};

runTest1 = function() {
    log("");
    log("RUNNING TEST 1");
    log("");

    log("creating MultiDeck object");
    deck = new MultiDeck();
    log("created " + deck);
    log("cardCount: " + deck.cardCount());
    
    log("");
    log("adding " + numDecks + " decks to MultiDeck");
    deck.createDecks(numDecks);
    log("cardCount: " + deck.cardCount());
    
    log("");
    log("showing first 8 cards");
    log(deck.card(0).faceValue());
    log(deck.card(1).faceValue());
    log(deck.card(2).faceValue());
    log(deck.card(3).faceValue());
    log(deck.card(4).faceValue());
    log(deck.card(5).faceValue());
    log(deck.card(6).faceValue());
    log(deck.card(7).faceValue());
    
    log("");
    log("shuffling deck");
    deck.shuffle();
    
    log("");
    log("showing first 8 cards after shuffling");
    log(deck.card(0).faceValue());
    log(deck.card(1).faceValue());
    log(deck.card(2).faceValue());
    log(deck.card(3).faceValue());
    log(deck.card(4).faceValue());
    log(deck.card(5).faceValue());
    log(deck.card(6).faceValue());
    log(deck.card(7).faceValue());    

    log("");
    log("TEST 1 COMPLETED.");
    log("");
};


runTest2 = function() {
    log("");
    log("RUNNING TEST 2");
    log("");

    deck = new MultiDeck();
    deck.createDecks(1);
    log("created single deck: " + deck);
    log("cardCount: " + deck.cardCount());

    log("");
    log("showing top 5 cards");
    log(deck.card(51).faceValue());
    log(deck.card(50).faceValue());
    log(deck.card(49).faceValue());
    log(deck.card(48).faceValue());
    log(deck.card(47).faceValue());
    
    log("");
    log("dealing top 5 cards");
    log("");
    card = deck.dealCard();
    log("card: " + card.faceValue());
    card = deck.dealCard();
    log("card: " + card.faceValue());
    card = deck.dealCard();
    log("card: " + card.faceValue());
    card = deck.dealCard();
    log("card: " + card.faceValue());
    card = deck.dealCard();
    log("card: " + card.faceValue());
    
    log("");
    log("cardCount is now: " + deck.cardCount());

    log("");
    log("TEST 2 COMPLETED.");
    log("");
};


runTest3 = function() {
    log("");
    log("RUNNING TEST 3");
    log("");

    deck = new MultiDeck();
    deck.createDecks(1);
    log("created single deck: " + deck);
    log("cardCount: " + deck.cardCount());

    log("");
    log("showing top 5 cards");
    log(deck.card(51).faceValue());
    log(deck.card(50).faceValue());
    log(deck.card(49).faceValue());
    log(deck.card(48).faceValue());
    log(deck.card(47).faceValue());
    
    hand = new Hand();
    log("");
    log("created hand: " + hand);
    log("cardCount: " + hand.cardCount());

    log("");
    log("dealing top 5 cards from deck into hand");
    card = deck.dealCard();
    hand.addCard(card);
    card = deck.dealCard();
    hand.addCard(card);
    card = deck.dealCard();
    hand.addCard(card);
    card = deck.dealCard();
    hand.addCard(card);
    card = deck.dealCard();
    hand.addCard(card);

    log("");
    log("showing cards in hand");
    log(hand.card(0).faceValue());
    log(hand.card(1).faceValue());
    log(hand.card(2).faceValue());
    log(hand.card(3).faceValue());
    log(hand.card(4).faceValue());

    log("");
    log("TEST 3 COMPLETED.");
    log("");
};


// run the tests

//runTest1();
//runTest2();
runTest3();
