function toggleInfo(sectionId) {
  const section = document.getElementById(sectionId);
  const paragraph = section.querySelector('p');
  const images = section.querySelectorAll('.energy-image');
  const button = section.querySelector('button');

  // Verifica se o parágrafo está visível para decidir o que fazer
  if (paragraph.style.display === 'none' || paragraph.style.display === '') {
    paragraph.style.display = 'block'; // Exibe o parágrafo
    images.forEach(image => image.style.display = 'inline-block'); // Exibe todas as imagens
    button.textContent = 'Mostrar Menos';
  } else {
    paragraph.style.display = 'none'; // Oculta o parágrafo
    images.forEach(image => image.style.display = 'none'); // Oculta todas as imagens
    button.textContent = 'Mostrar Mais';
  }
}