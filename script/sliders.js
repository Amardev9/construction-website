const heroSlider = new Swiper('.hero-swiper', {
    // If we need pagination
    direction: 'vertical',
    effect: 'fade',
    allowTouchMove: false,

    autoplay: {
      delay: 2500,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

});
