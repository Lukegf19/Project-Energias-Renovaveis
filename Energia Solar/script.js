$(document).ready(function () {
    $('.slick-slider').slick({
      autoplay: true,
      autoplaySpeed: 3000, // Intervalo de 3 segundos entre as imagens
      dots: true, // Mostrar os pontos de navegação
      arrows: false // Ocultar as setas de navegação
    });

    // Adicionar interatividade aos elementos
    $('.benefit-item').click(function () {
      $(this).toggleClass('active');
    });
  });
