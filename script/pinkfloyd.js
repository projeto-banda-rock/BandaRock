document.addEventListener('DOMContentLoaded', () => {

  const rainContainer = document.getElementById('vinyl-rain-container');
  const totalVinyls = 35;
  const spectrumColors = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6', '#ff007f'];

  function generateVinyl() {
    const vinyl = document.createElement('div');
    vinyl.classList.add('vinyl-item');

    const size = Math.floor(Math.random() * 40) + 35;
    vinyl.style.width = `${size}px`;
    vinyl.style.height = `${size}px`;
    vinyl.style.left = `${Math.random() * 100}vw`;

    const fallDuration = Math.random() * 5 + 3;
    const spinDuration = Math.random() * 2.5 + 1.5;
    const delay = Math.random() * 4;

    vinyl.style.animationDuration = `${fallDuration}s, ${spinDuration}s`;
    vinyl.style.animationDelay = `${delay}s, 0s`;

    const selectedColor = spectrumColors[Math.floor(Math.random() * spectrumColors.length)];
    vinyl.style.setProperty('--label-color', selectedColor);

    rainContainer.appendChild(vinyl);

    setTimeout(() => {
      vinyl.remove();
      generateVinyl();
    }, (fallDuration + delay) * 1000);
  }

  for (let i = 0; i < totalVinyls; i++) {
    generateVinyl();
  }


  const albumModal = document.getElementById('album-modal');
  const historyModal = document.getElementById('history-modal');

  const openAlbumBtn = document.getElementById('open-album-btn');
  const openHistoryBtn = document.getElementById('open-history-btn');

  const closeAlbumBtn = document.getElementById('close-album-btn');
  const closeHistoryBtn = document.getElementById('close-history-btn');


  openAlbumBtn.addEventListener('click', () => {
    albumModal.style.display = 'flex';
  });

  openHistoryBtn.addEventListener('click', () => {
    historyModal.style.display = 'flex';
  });


  closeAlbumBtn.addEventListener('click', () => {
    albumModal.style.display = 'none';
  });

  closeHistoryBtn.addEventListener('click', () => {
    historyModal.style.display = 'none';
  });

  // Fechar ao clicar fora do conteúdo
  window.addEventListener('click', (event) => {
    if (event.target === albumModal) {
      albumModal.style.display = 'none';
    }
    if (event.target === historyModal) {
      historyModal.style.display = 'none';
    }
  });
});