$(function () {
  $('.slider').slick({
    arrows: false,
    // vertical: true,
    dots: true,
    dotsClass: 'slider__dots',
    autoplay: 300,
    fade: true,
    cssEase: 'ease-in-out',
  });

});

$(window).scroll(function () {
  var docscroll = $(document).scrollTop();
  if (docscroll > $(window).height()) {
    $('.header__top').addClass('header__top--scroll');
    $('.header__top nav ul li').css({
      'color': '#000'
    });
  } else {
    $('.header__top').removeClass('header__top--scroll');
    $('.header__top nav ul li').css({
      'color': '#fffefd'
    });
  }
});

$(document).ready(function () {
  var button = $('#button-up');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function () {
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});


$(document).ready(function () {
  $(".fancybox").fancybox({
    loop: true,
    transitionEffect: "slide",

  });
  $('.header__mobile-menu-btn').on('click', function () {
    $('.header__mobile-nav').slideToggle();
  });

  $('.header__mobile-nav').on('focusout', function () {
    $('.header__mobile-nav').slideToggle();
  });


});