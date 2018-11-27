var players =  [new Player('Lock', 200),
new Player('Shock', 200),
new Player('Barrel', 200),
new Player('Oggie', 200)];
   
var _dealer = new Dealer('Dealer');

function Player(name, money, hand){
    this.name = name;
    this.money = money;
    this.hand = [];
};

let player01 = new Player('Lock', 200);
let player02 = new Player('Shock', 200);
let player03 = new Player('Barrel', 200);
let player04 = new Player('Ogie', 200);

function Dealer(name, hand){
    this.name = name;
    this.hand = [];
};