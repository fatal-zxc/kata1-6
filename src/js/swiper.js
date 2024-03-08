import Swiper from 'swiper/bundle';

if (window.screen.width < 500) {
  var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
    },
  });
}