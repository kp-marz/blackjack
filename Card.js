// Card.js


var Card = function(value, suit) {

    this.value = value;
    this.suit  = suit;

    this.color = function() {
        if (this.suit === "S" || this.suit === "C") return "black";
        if (this.suit === "D" || this.suit === "H") return "red";
    };

    this.faceValue = function() {
        return this.value + "-" + this.suit;
    };

    this.pointValue = function() {
        switch (value) {
            case  "2" : return 2;
            case  "3" : return 3;
            case  "4" : return 4;
            case  "5" : return 5;
            case  "6" : return 6;
            case  "7" : return 7;
            case  "8" : return 8;
            case  "9" : return 9;
            case "10" : return 10;
            case  "J" : return 10;
            case  "Q" : return 10;
            case  "K" : return 10;
            case  "A" : return 11;  // this can change to 1
        }
    };

};


module.exports = Card;
