var ORDER = [];
var PORTION = 100;

function Item(price, calories) {
    this.price = price;
    this.calories = calories;
}

function Hamburger(size, stuffing, number) {
    this.size = size;
    this.stuffing = stuffing;
    this.number = number;
}

Hamburger.SIZE_SMALL = new Item(50, 20);
Hamburger.SIZE_LARGE = new Item(100, 40);

Hamburger.STUFFING_CHEESE = new Item(10, 20);
Hamburger.STUFFING_SALAD = new Item(20, 5);
Hamburger.STUFFING_POTATO = new Item(15, 10);

Hamburger.prototype.calculatePrice = function() {
    return this.size.price + this.stuffing.price;
}

Hamburger.prototype.calculateCalories = function() {
    return this.size.calories + this.stuffing.calories;
}

function Salad(name, weight, portion) {
    this.name = name;
    this.weight = weight;
    this.portion = portion;
}

Salad.CAESAR = new Item(100, 20);
Salad.RUSSIAN_SALAD = new Item(50, 80);

Salad.prototype.calculatePrice = function() {
    return (this.weight * this.name.price)/PORTION;
}

Salad.prototype.calculateCalories = function() {
    return (this.weight * this.name.calories)/PORTION;
}

function Drink(name, number) {
    this.name = name;
    this.number = number;
}

Drink.COLA = new Item(50, 40);
Drink.COFFEE = new Item(80, 20);

Drink.prototype.calculatePrice = function() {
    return this.name.price * this.number;
}

Drink.prototype.calculateCalories = function() {
    return this.name.calories * this.number;
}

document.getElementById('hamburger_add').onclick = function() {    
    var number = document.getElementById('hamburger_number_input').value;
    var size = document.getElementById('hamburger_size_select').value;
    var stuffing = document.getElementById('hamburger_stuffing_select').value;
    
    var order = document.getElementById('order');
    var item = document.createElement('li');
    var text = document.createTextNode('Humburger: ' + number + ' ' + size + ' ' + stuffing);

    if (size === 'small') {
        size = Hamburger.SIZE_SMALL;
    } else if (size === 'large') {
        size = Hamburger.SIZE_LARGE;
    } else {
        size = null;
    }

    if (stuffing === 'cheese') {
        stuffing = Hamburger.STUFFING_CHEESE;
    } else if (stuffing === 'salad') {
        stuffing = Hamburger.STUFFING_SALAD;
    } else if (stuffing === 'potato') {
        stuffing = Hamburger.STUFFING_POTATO;
    } else {
        stuffing = null;
    }

    var hamburger = new Hamburger(size, stuffing, number);
    addToOrder(hamburger); 

    item.appendChild(text);
    item.appendChild(createRemoveButton());
    order.appendChild(item); 

    createDelSelector();    
}

document.getElementById('salad_add').onclick = function() {
    var portion = document.getElementById('salad_input').value;
    var name = document.getElementById('salad_name_select').value;
    var weight = document.getElementById('salad_weight_input').value;

    var order = document.getElementById('order');
    var item = document.createElement('li');
    var text = document.createTextNode('Salad: ' + portion + ' ' + name + ' ' + weight);

    if (name === 'ceasar') {
        name = Salad.CAESAR;
    } else if (name === 'russian_salad') {
        name = Salad.RUSSIAN_SALAD;
    } else {
        name = null;
    }

    var salad = new Salad(name, weight, portion);
    addToOrder(salad);

    item.appendChild(text);
    item.appendChild(createRemoveButton());
    order.appendChild(item);

    createDelSelector();
}

document.getElementById('drink_add').onclick = function() {
    var number = document.getElementById('drink_input').value;
    var name = document.getElementById('drink_kind_select').value;

    var order = document.getElementById('order');
    var item = document.createElement('li');
    var text = document.createTextNode('Drink: ' + number + ' ' + name);

    if (name === 'cola') {
        name = Drink.COLA;
    } else if (name === 'coffee') {
        name = Drink.COFFEE;
    } else {
        name = null;
    }

    var drink = new Drink(name, number);
    addToOrder(drink);
 
    item.appendChild(text);
    item.appendChild(createRemoveButton());
    order.appendChild(item);

    createDelSelector();
}

document.getElementById('pay_button').onclick = function() {
    var btns = document.getElementsByTagName('button');

    for (var i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
    }

    alert('For pay: ' + total());
}

document.getElementById('order').onclick = function(event) {
    var order = document.getElementById('order');
    var target = event.target;
    var btns = createDelSelector();
    
    if (target.tagName === 'BUTTON') {
        var id = target.getAttribute('id');        
        removeFromOrder(id);
        
        var li = btns[id].parentNode;
        order.removeChild(li);
        btns = createDelSelector();        
    } else {
        return;
    }
}

function createRemoveButton() {
    var removeBtn = document.createElement('button');
    removeBtn.classList.add('del-btn');
    removeBtn.innerHTML = 'del';
    return removeBtn;
}

function createDelSelector() {
    var btns = [];
    btns = document.querySelectorAll('.del-btn');         

    for (var i = 0; i < btns.length; i++) {
        btns[i].setAttribute('id', i);       
    }
    return btns;
}

function removeFromOrder(id) {
    ORDER.splice(id, 1);
    total();   
}

function addToOrder(item) {
    ORDER.push(item)
    total();
}

function total() {  
    var elem = document.getElementById('total');
    var totalPrice = 0;
    var totalCalories = 0;

    for (var i = 0; i < ORDER.length; i++) {
        totalPrice += ORDER[i].calculatePrice();
        totalCalories += ORDER[i].calculateCalories();        
    }

    elem.innerHTML = 'TOTAL: ' + totalPrice + ' money / ' + totalCalories + ' calories';
    return totalPrice;
}