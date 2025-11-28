// Optional if you expand later, but ensures play/pause functionality exists
document.addEventListener('DOMContentLoaded', () => {
  const player = document.querySelector('.top-player');
  player.addEventListener('load', () => {
    console.log('Top Player Loaded & Ready');
  });
});
