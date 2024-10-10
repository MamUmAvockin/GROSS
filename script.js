var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true, // Для бесконечной прокрутки
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto', // Автоматический расчет количества видимых слайдов
        spaceBetween: 30, // Расстояние между слайдами
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Делает пагинацию кликабельной
        },
        }
);
});
