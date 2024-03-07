let button = document.querySelector('.introduction__reveal');
let text = document.querySelector('.introduction__text.hide');
let buttonTitle = document.querySelector('.introduction__next');

button.addEventListener('click', function () {
  if (buttonTitle.textContent === 'Читать далее') {
    text.classList.remove('hide');
    text.classList.remove('text-hide');
    text.classList.add('text-reveal');
    buttonTitle.textContent = 'Скрыть';
  }
  else {
    text.classList.remove('text-reveal');
    text.classList.add('text-hide');
    buttonTitle.textContent = 'Читать далее';
  }
});

let button2 = document.querySelector('.brands .switch');
let brands = document.querySelector('.brands-swiper');
let button2Text = button2.querySelector('.switch__text');

button2.addEventListener('click', function () {
  if (button2Text.textContent === 'Показать все') {
    brands.classList.remove('brands-hide');
    brands.classList.add('brands-active');
    button2Text.textContent = 'Скрыть';
  }
  else {
    brands.classList.remove('brands-active');
    brands.classList.add('brands-hide')
    button2Text.textContent = 'Показать все';
  }
});

let button3 = document.querySelector('.hardware .switch');
let hardware = document.querySelector('.hardware-swiper');
let button3Text = button3.querySelector('.switch__text');

button3.addEventListener('click', function () {
  if (button3Text.textContent === 'Показать все') {
    hardware.classList.remove('hardware-hide');
    hardware.classList.add('hardware-active');
    button3Text.textContent = 'Скрыть';
  }
  else {
    hardware.classList.remove('hardware-active');
    hardware.classList.add('hardware-hide');
    button3Text.textContent = 'Показать все';
  }
});