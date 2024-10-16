

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 40,
        loop: true,
        pagination: {
            el: '#swiperPag',
            clickable: true,
            renderBullet: function (index, className) {
                if (index < 6) { 
                    return '<span class="' + className + '"></span>';
                }
                return '';
            },
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});