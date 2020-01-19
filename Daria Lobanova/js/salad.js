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