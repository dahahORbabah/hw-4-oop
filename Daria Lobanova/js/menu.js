var ORDER = [];
var PORTION = 100;

function Item(price, calories) {
    this.price = price;
    this.calories = calories;
}
//HAMBURGER

function Hamburger(size, stuffing, number) {
    this.size = size;
    this.stuffing = stuffing;
    this.number = number;
}

//H_SIZE
Hamburger.SIZE_SMALL = new Item(50, 20);
Hamburger.SIZE_LARGE = new Item(100, 40);
//H_STUFFING
Hamburger.STUFFING_CHEESE = new Item(10, 20);
Hamburger.STUFFING_SALAD = new Item(20, 5);
Hamburger.STUFFING_POTATO = new Item(15, 10);

Hamburger.prototype.getSize = function() {
    return this.size;
}

Hamburger.prototype.getStuffing = function() {
    return this.stuffing;
}

Hamburger.prototype.getNumber = function() {
    return this.number;
}

Hamburger.prototype.calculatePrice = function() {
    return this.size.price + this.stuffing.price;
}

Hamburger.prototype.calculateCalories = function() {
    return this.size.calories + this.stuffing.calories;
}

//SALAD

function Salad(name, weight, portion) {
    this.name = name;
    this.weight = weight;
    this.portion = portion;
}

Salad.CAESAR = new Item(100, 20);
Salad.RUSSIAN_SALAD = new Item(50, 80);

Salad.prototype.getName = function() {
    return this.name;
}

Salad.prototype.getWeight = function() {
    return this.weight;
}

Salad.prototype.getPortion = function() {
    return this.portion;
}

Salad.prototype.calculatePrice = function() {
    return (this.weight * this.name.price)/PORTION;
}

Salad.prototype.calculateCalories = function() {
    return (this.weight * this.name.calories)/PORTION;
}

//DRINK

function Drink(name, number) {
    this.name = name;
    this.number = number;
}

Drink.COLA = new Item(50, 40);
Drink.COFFEE = new Item(80, 20);

Drink.prototype.getName = function() {
    return this.name;
}

Drink.prototype.getNumber = function() {
    return this.number;
}

Drink.prototype.calculatePrice = function() {
    return this.name.price * this.number;
}

Drink.prototype.calculateCalories = function() {
    return this.name.calories * this.number;
}