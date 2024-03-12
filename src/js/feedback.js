let buttonOpen1 = document.querySelector('.header-nav__chat');
let buttonOpen2 = document.querySelector('.actions__chat');
let buttonClose = document.querySelector('.feedback__close');
let feedback = document.querySelector('.feedback');
let blur = document.querySelector('.blur');
let call = document.querySelector('.call');
let body = document.querySelector('body');
let menu = document.querySelector('.menu');

function feedbackOut() {

    feedback.classList.remove('feedback-toleft');
    feedback.classList.add('feedback-toright');

    if (menu.classList.contains('menu-toright') === false) body.classList.remove('overflow-hidden');

    blur.classList.remove('getblur');
    blur.classList.add('unblur');
    blur.removeEventListener('click', feedbackOut);
}

function feedbackClick() {
    feedback.classList.remove('feedback-toright');
    feedback.classList.add('feedback-toleft');

    body.classList.add('overflow-hidden');

    blur.style.height = document.body.scrollHeight + 'px';
    blur.classList.remove('unblur');
    blur.classList.add('getblur');
    blur.addEventListener('click', feedbackOut);

    if (call.classList.contains('call-toleft')) {
        call.classList.remove('call-toleft');
        call.classList.add('call-toright');
    }
}

buttonOpen1.addEventListener('click', feedbackClick)
buttonOpen2.addEventListener('click', feedbackClick)
buttonClose.addEventListener('click', feedbackOut)