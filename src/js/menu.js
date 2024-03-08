let buttonMenu = document.querySelector('.button-menu');
let buttonClose = document.querySelector('.button-close');
let menu = document.querySelector('.menu');
let blur = document.querySelector('.blur');

function mouseOut() {

    menu.classList.remove('menu-toright');
    menu.classList.add('menu-toleft');

    blur.classList.remove('getblur');
    blur.classList.add('unblur');
    blur.removeEventListener('click', mouseOut);
}

buttonMenu.addEventListener('click', function() {
    menu.classList.remove('menu-toleft');
    menu.classList.add('menu-toright');

    blur.style.height = document.body.scrollHeight + 'px';
    blur.classList.remove('unblur');
    blur.classList.add('getblur');
    blur.addEventListener('click', mouseOut);
});

buttonClose.addEventListener('click', mouseOut);