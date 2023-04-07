$(document).ready(function(){
    $('.ham').on('click', function () {
          $(this).toggleClass('open');
          $('.top-nav').toggleClass('open');
    });

    $('.top-nav .link_nav').on('click', function () {
          $('.ham').removeClass('open');
          $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
          $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
          }, 2000);
    });

    $('#btn_up').on('click', function () {
          $('html, body').animate({
            scrollTop: 0
      }, 2000);
    });

      AOS.init({
        easing: 'ease', duration: 1700, once: true
      });
});
