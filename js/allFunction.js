function plusMinus(elementId, isTrue) {
    const iphoneField = document.getElementById(elementId);
    const iphoneFieldValue = parseInt(iphoneField.value);
    let newNumber = 0;
    if(isTrue === true) {
        newNumber = iphoneFieldValue + 1;
    }
    else {
        newNumber = iphoneFieldValue - 1;
    }
    iphoneField.value = newNumber;
};

function totalPriceCal(inputElement, priceElement, price) {
    const inputElementField = document.getElementById(inputElement);
    const priceElements = document.getElementById(priceElement);
    const inputElementFieldValue = parseInt(inputElementField.value);

    const iphoneTotalPrice = inputElementFieldValue * price;
    priceElements.innerText = iphoneTotalPrice;
};


function subTotalFun(priceId) {
    const iphonePrice = document.getElementById(priceId);
    const iphonePriceValue = parseInt(iphonePrice.innerText);
    return iphonePriceValue;
}

function taxAndTotal(elementId, amount) {
    const tax = document.getElementById(elementId);
    tax.innerText = amount;
}

function subTotalFunPrice() {
    const iphonePrices = subTotalFun('iphone-price');
    const coverPrices = subTotalFun('cover-price');
    const subTotalPrice = iphonePrices + coverPrices;
    const subTotalField = document.getElementById('subtotal-field');
    subTotalField.innerText = subTotalPrice;

    const taxPrice = parseFloat((subTotalPrice * 0.1).toFixed(2));

    taxAndTotal('tax', taxPrice);
    const totalsPrices = subTotalPrice + taxPrice;
    taxAndTotal('allTotal', totalsPrices);
}










document.getElementById('cross-x').addEventListener('click', function(){
    const iphoneCart = document.getElementById('iphone-cart');
    iphoneCart.style.display = "none";
});
document.getElementById('cross-x-2').addEventListener('click', function(){
    const iphoneCart = document.getElementById('iphone-cart-2');
    iphoneCart.style.display = "none";
});