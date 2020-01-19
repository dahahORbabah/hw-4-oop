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

    elem.innerHTML = 'total: ' + totalPrice + ' money / ' + totalCalories + ' calories';
    return totalPrice;
}