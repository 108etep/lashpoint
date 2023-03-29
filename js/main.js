$(document).ready(function() {
  $('.slider').slick({
    centerMode: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1061,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '230px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 881,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '180px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '90px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 642,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 361,
        settings: "unslick"
      }
    ]
  });

  $(".menu__btn").click(function() {
    $(".body").toggleClass('bg-bar');
    $(".header__menu").toggleClass('active');
    $(".menu__btn").toggleClass('active');
    $(".mobile__menu").toggleClass('active');
  });

  
});







