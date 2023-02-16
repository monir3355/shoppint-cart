document.getElementById('iphone-plus-btn').addEventListener('click', function(){
    plusMinus('iphone-field', true);

    totalPriceCal('iphone-field', 'iphone-price', 1219);
    subTotalFunPrice();
});

document.getElementById('iphone-minus-btn').addEventListener('click', function(){
    plusMinus('iphone-field', false);

    totalPriceCal('iphone-field', 'iphone-price', 1219);
    subTotalFunPrice();
});

document.getElementById('cover-plus-btn').addEventListener('click', function(){
    plusMinus('cover-field', true);

    totalPriceCal('cover-field', 'cover-price', 59);
    subTotalFunPrice();

})

document.getElementById('cover-minus-btn').addEventListener('click', function(){
    plusMinus('cover-field', false);

    totalPriceCal('cover-field', 'cover-price', 59);
    subTotalFunPrice();

})

