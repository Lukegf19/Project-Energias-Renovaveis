$(document).ready(function () {
    $('.slick-slider').slick({
      autoplay: true,
      autoplaySpeed: 3000, 
      dots: true, 
      arrows: false 
    });

    $('.benefit-item').click(function () {
      $(this).toggleClass('active');
    });
  });