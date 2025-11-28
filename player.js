const audio = new Audio("/assets/player-stream-url.mp3");
let isPlaying = false;

function togglePlayer() {
  if (!isPlaying) {
    audio.play();
    document.getElementById("player-btn").innerText = "Pause";
  } else {
    audio.pause();
    document.getElementById("player-btn").innerText = "Play";
  }
  isPlaying = !isPlaying;
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("player-btn");
  if (btn) {
    btn.addEventListener("click", togglePlayer);
    audio.loop = true;
  }
});
