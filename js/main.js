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
      }
    ]
  });

  $(".menu__btn").click(function() {
    $(".body").toggleClass('bg-bar');
    $(".header__menu").toggleClass('active');
    $(".menu__btn").toggleClass('active');

    var darkBlock = $("#overlay").length;

    if (darkBlock) {
      $("#overlay, .close-burger, .logo__container").remove();
    } else {
      var docHeight = $(document).height();
      $("body").append("<div id='overlay'></div>");
      $("#overlay")
        .height(docHeight)
        .css({
          'opacity': 0.4,
          'position': 'absolute',
          'top': 0,
          'left': 0,
          'background-color': 'black',
          'width': '100%',
          'z-index': 1
        });

      $('<div class="logo__container"><img class="logo" src="images/logo.svg" alt=""></div>').insertBefore('.header__menu').css({
        'position': 'fixed',
        'bottom': '-100px',
        'left': '0',
        'right': '0',
        'z-index': '9999'
      }).animate({
        'bottom': '0'
      }, 500);
  
      
    }
  });

  
});







