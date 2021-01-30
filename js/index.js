function eventHandler(element, isIncrement) {
    var inputField = document.querySelector(element);
    var inputValue = parseInt(inputField.value);
    var inputNewValue = isIncrement === true ? inputValue + 1 : inputValue > 0 ? inputValue - 1 : inputValue;
    inputField.value = inputNewValue;
    calculation();
}

function calculation(){
    var firstClassInputField = document.querySelector('#first-class-ticket input');
    var firstClassInputValue = parseInt(firstClassInputField.value);

    var economyTypeInputField = document.querySelector('#economy-type-ticket input');
    var economyTypeInputValue = parseInt(economyTypeInputField.value);

    var subtotal = (firstClassInputValue) * 150 + (economyTypeInputValue * 100);
    document.getElementById('subtotal').innerText = '$' + subtotal;

    var vat = subtotal * 0.1;
    document.getElementById('vat').innerText = '$' + vat;

    var total = subtotal + vat;
    document.getElementById('total').innerText = '$' + total;
}

document.querySelector('button.btn-style').addEventListener('click', function(){
    var firstClassInputValue = parseInt(document.querySelector('#first-class-ticket input').value);
    var economyTypeInputValue = parseInt(document.querySelector('#economy-type-ticket input').value);
    swal({
        title: "Congratulations! You're ready to travel",
        text: 'You bought ' + firstClassInputValue + ' ticket of first class and ' + economyTypeInputValue + ' ticket of economy type.',
        icon: "success"
      });
})