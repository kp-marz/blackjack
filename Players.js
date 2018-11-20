// Players.js


var Players = function() {

    this.players = [];

    // should put range check here!
    this.player = function(idx) {
        return this.players[idx];
    };

    this.playerCount = function() {
        return this.players.length;
    };
    
    this.addPlayer = function(player) {
        return this.players.push(player);
    };
    
    this.showCards = function() {
        var s = "";
        for (var p = 0; p < this.playerCount(); p++) {
            var player = this.player(p);
            var hand = player.hand;
            for (var c = 0; c < hand.cardCount(); c++) {
                var card = hand.card(c);
                s += card.faceValue().padEnd(6);
            }
        }
        return s;
    };
    
    this.clear = function() {
        this.players = [];        // garbage collection
    };
    
};


module.exports = Players;
