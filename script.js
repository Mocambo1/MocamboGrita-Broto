$(document).ready(function() {
  // Função para a animação de digitação do subtítulo
  let i = 0;
  const subtitleText = "Onde a música encontra o sabor";
  const speed = 50;

  function typeWriter() {
    if (i < subtitleText.length) {
      $('#subtitle').append(subtitleText.charAt(i));
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();

  // Após 30 segundos, mostrar o pop-up de boas-vindas
  setTimeout(function() {
    $('#initial-screen').fadeOut();
    $('#welcome-popup').fadeIn();
  }, 30000);

  // Fechar o pop-up e mostrar a seção da pesquisa
  $('#close-popup').click(function() {
    $('#welcome-popup').fadeOut();
    $('#survey-section').fadeIn();
  });

  // Lazy loading para a galeria de fotos
  $(window).on('scroll', function() {
    $('.lazy').each(function() {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
        $(this).attr('src', $(this).data('src')).css('opacity', 1);
      }
    });
  });

  // Exibir a galeria de fotos após o formulário de pesquisa
  $('#thanks-message').on('click', function() {
    $('#survey-section').fadeOut();
    $('#photo-gallery').fadeIn();
  });
});
