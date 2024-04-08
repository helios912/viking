$(function () {
  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/arrowprev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/arrownext.svg" alt=""></button>',
    asNavFor: '.heroes__slider-text',
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
