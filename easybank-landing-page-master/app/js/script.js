const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

// hace click en el boton
btnHamburger.addEventListener('click', function() { 
    console.log('click hamburger');
    //añade una clase
    if(header.classList.contains('open')) { // Cierra el hamburguern toggle
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        }); 
    }
    else { // Abre el toggle
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in'); 
        });
    }
});