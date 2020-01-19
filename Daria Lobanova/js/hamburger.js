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

