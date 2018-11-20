// Player.js

var Hand = require('./Hand.js');

var Player = function(name) {
    this.name = name;
    this.startCash = 0;
    this.hand = new Hand();

    this.rounds = 0;
    this.wins   = 0;
    this.losses = 0;

    this.init = function(cash) {
        this.startCash = cash;
        this.rounds = 0;
        this.wins   = 0;
        this.losses = 0;
    };

    this.hit = function() {
    };

    this.stay = function() {
    };

};


module.exports = Player;
