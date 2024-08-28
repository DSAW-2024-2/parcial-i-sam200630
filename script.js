function toggleShare() {
    const shareOptions = document.getElementById('share-options');
    shareOptions.style.display = shareOptions.style.display === 'flex' ? 'none' : 'flex';
    if (shareOptions.style.display === 'flex') {
      navigator.clipboard.writeText('https://dsaw-2024-2.github.io/parcial-i-sam200630/')
        .then(() => console.log('Enlace copiado al portapapeles'))
        .catch(err => console.error('Error al copiar el enlace: ', err));
    }
  }  