$(function () {
  $('.menu__btn').on('click', function () {
    $('.header__menu').toggleClass('header__menu--active');
    $('.menu__btn').toggleClass('header__btn--active');
  });
  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/arrowprev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/arrownext.svg" alt=""></button>',
    asNavFor: '.heroes__slider-text',
    responsive: [
      {
        breakpoint: 840,
        settings: {
          arrows: false,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    asNavFor: '.heroes__slider-img',
  });
});
Fancybox.bind('[data-fancybox]', {
  // Custom options
});
