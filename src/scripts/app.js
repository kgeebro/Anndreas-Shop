console.log('APP IS RUNNING!!');

var cart = document.querySelector('.cart-content');
var scarves = document.getElementById('scarves');
var shirts = document.getElementById('shirts');
var dresses = document.getElementById('dresses');
var jeans = document.getElementById('jeans');
var categories = document.getElementById('categories');
var scarvesContainer = document.querySelector('.scarves-container'); 
var shirtsContainer = document.querySelector('.shirts-container'); 
var dressesContainer = document.querySelector('.dresses-container'); 
var jeansContainer = document.querySelector('.jeans-container'); 
var allContent = document.getElementById('all-content');
var shop = document.querySelector('.shop');
var empty = document.getElementById('empty');



scarves.addEventListener('click', function(){
    categories.style.display = 'none';
    scarvesContainer.style.display = 'block';
    scarvesContainer.classList.add('fadeIn');
    shop.style.display = 'none';
    cart.style.display = 'block';
    cart.classList.add('fadeIn');
}); 
shirts.addEventListener('click', function(){
    categories.style.display = 'none';
    shirtsContainer.style.display = 'block';
    shirtsContainer.classList.add('fadeIn');
    shop.style.display = 'none';
    cart.style.display = 'block';
    cart.classList.add('fadeIn');
}); 
dresses.addEventListener('click', function(){
    categories.style.display = 'none';
    dressesContainer.style.display = 'block';
    dressesContainer.classList.add('fadeIn');
    shop.style.display = 'none';
    cart.style.display = 'block';
    cart.classList.add('fadeIn');
}); 
jeans.addEventListener('click', function(){
    categories.style.display = 'none';
    jeansContainer.style.display = 'block';
    jeansContainer.classList.add('fadeIn');
    shop.style.display = 'none';
    cart.style.display = 'block';
    cart.classList.add('fadeIn');
}); 

shop.addEventListener('click', function(){
    allContent.classList.add('shiftUp');
    categories.style.display = 'block';
    categories.classList.add('shiftUp');
    shop.classList.add('fadeOut');
}); 

empty.addEventListener('click', function(){
    cart.classList.add('emptyCart');
})

