let buttonMenu = document.querySelector('.button-menu');
let buttonClose = document.querySelector('.button-close');
let menu = document.querySelector('.menu');

buttonMenu.addEventListener('click', function() {
    menu.classList.remove('menu-toleft');
    menu.classList.add('menu-toright');
});

buttonClose.addEventListener('click', function() {
    menu.classList.remove('menu-toright');
    menu.classList.add('menu-toleft');
});