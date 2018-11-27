function Player(name, money){
    this.name = name,
    this.money = money,
    this.bettingBox = 0,
    this.hasInsurance = false,
    this.isDoubleDown = false,
    this.hands = [[]],
    this.hit =  function(hand,card){
        this.hands[hand].push(card);
    },
    this.stay = function(){
         
    },
    this.anteUp = function(ante){
        this.bettingBox = this.bettingBox + ante;
        this.money = this.money - ante;
    },
    this.evaluate = function(){
        console.log('Not Implemented');
    },
    this.split = function(hand, ante){
        this.anteUp(ante);
        this.hands.push([]);
        var secondCard = this.hands[hand].pop();
        this.hands[hand+1].push(secondCard);
    },
    this.doubleDown = function(hand, card, ante){
        this.anteUp(ante);
        this.hands[hand].push(card);
        this.isDoubleDown = true;
    },
    this.insurance = function(ante){
        this.anteUp(ante);
        this.hasInsurance = true;
    }
}

module.exports = Player;