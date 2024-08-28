document.addEventListener('DOMContentLoaded', () => {
  const shareButton = document.querySelector('.share-button');
  const shareOptions = document.getElementById('share-options');

  function toggleShare(event) {
    event.stopPropagation(); // Prevenir que el evento se propague al documento

    // Cambia entre agregar y quitar la clase 'hidden'
    shareOptions.classList.toggle('hidden');
  }

  // Agregar event listener al botón de compartir
  shareButton.addEventListener('click', toggleShare);

  // Cierra el cuadro de compartir si se hace clic fuera de él
  document.addEventListener('click', (event) => {
    const isClickInside = shareOptions.contains(event.target) || shareButton.contains(event.target);

    if (!isClickInside) {
      shareOptions.classList.add('hidden');
    }
  });
});
