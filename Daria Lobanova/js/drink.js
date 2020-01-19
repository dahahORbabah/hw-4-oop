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