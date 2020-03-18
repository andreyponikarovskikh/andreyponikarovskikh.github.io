$(function(){
    $('.slider').slick({
        arrows: false,
        // vertical: true,
        // dots: true,
        dotsClass: 'products-slider-dots',
        autoplay: 300,
        fade: true,
        cssEase: 'ease-in-out',
    });
    // $('.menu__btn').on('click',function(){
    //     $('.menu__list').slideToggle();
    // });

});

$(window).scroll(function(){
    var docscroll=$(document).scrollTop();
    if(docscroll>$(window).height()){
      $('.header__top').addClass('header__top--scroll');
      $('.header__top nav ul li').css({'color':'#000'});
    }else{
      $('.header__top').removeClass('header__top--scroll');
      $('.header__top nav ul li').css({'color':'#fffefd'});
    }
  });

  $(document).ready(function() { 
    var button = $('#button-up');	
    $(window).scroll (function () {
      if ($(this).scrollTop () > 300) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
  });	 
  button.on('click', function(){
  $('body, html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });		 
  });


  $(document).ready(function() {
		$(".fancybox").fancybox({
      loop: true,
      transitionEffect: "slide",
    
    });
  });
  