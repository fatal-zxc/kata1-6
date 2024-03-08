let buttonOpen1 = document.querySelector('.header-nav__call');
let buttonOpen2 = document.querySelector('.actions__call');
let buttonClose = document.querySelector('.call__close');
let call = document.querySelector('.call');
let blur = document.querySelector('.blur');
let feedback = document.querySelector('.feedback');

function callOut() {

    call.classList.remove('call-toleft');
    call.classList.add('call-toright');

    blur.classList.remove('getblur');
    blur.classList.add('unblur');
    blur.removeEventListener('click', callOut);
}

function callClick() {
    call.classList.remove('call-toright');
    call.classList.add('call-toleft');

    blur.style.height = document.body.scrollHeight + 'px';
    blur.classList.remove('unblur');
    blur.classList.add('getblur');
    blur.addEventListener('click', callOut);

    if (feedback.classList.contains('feedback-toleft')) {
        console.log('true')
        feedback.classList.remove('feedback-toleft');
        feedback.classList.add('feedback-toright');
    }
}

buttonOpen1.addEventListener('click', callClick)
buttonOpen2.addEventListener('click', callClick)
buttonClose.addEventListener('click', callOut)