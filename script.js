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

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
          el: '.swiper-pagination', // Пагинация (точки)
          clickable: true, // Возможность кликать по точкам
      },
      autoplay: {
          delay: 3000, // Автоматическая смена слайда каждые 3 секунды
      },
      slidesPerView: 3, // Количество видимых слайдов
      spaceBetween: 5, // Расстояние между слайдами
  });
});
