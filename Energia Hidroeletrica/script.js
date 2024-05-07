$(document).ready(function () {
    $('.slick-slider').slick({
      autoplay: true,
      autoplaySpeed: 3000, 
      dots: true, 
      arrows: false 
    });

    $('.benefit-icon').click(function () {
      $(this).toggleClass('active');
    });
  });