const heroSlider = new Swiper('.hero-swiper', {
    // If we need pagination
    direction: 'vertical',
    loop: true,
    effect: 'fade',
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
