let buttonOpen1 = document.querySelector('.header-nav__call');
let buttonOpen2 = document.querySelector('.actions__call');
let buttonClose = document.querySelector('.call__close');
let call = document.querySelector('.call');
let blur = document.querySelector('.blur');
let feedback = document.querySelector('.feedback');
let body = document.querySelector('body');
let menu = document.querySelector('.menu');

function callOut() {

    call.classList.remove('call-toleft');
    call.classList.add('call-toright');

    if (menu.classList.contains('menu-toright') === false) body.classList.remove('overflow-hidden');

    blur.classList.remove('getblur');
    blur.classList.add('unblur');
    blur.removeEventListener('click', callOut);
}

function callClick() {
    call.classList.remove('call-toright');
    call.classList.add('call-toleft');

    body.classList.add('overflow-hidden');

    blur.style.height = document.body.scrollHeight + 'px';
    blur.classList.remove('unblur');
    blur.classList.add('getblur');
    blur.addEventListener('click', callOut);

    if (feedback.classList.contains('feedback-toleft')) {
        feedback.classList.remove('feedback-toleft');
        feedback.classList.add('feedback-toright');
    }
}

buttonOpen1.addEventListener('click', callClick)
buttonOpen2.addEventListener('click', callClick)
buttonClose.addEventListener('click', callOut)