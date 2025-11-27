// Hip Dad Radio Player Logic
const audio = document.getElementById("hdrAudio");
const playerPill = document.getElementById("playerPill");
const playerIcon = document.getElementById("playerIcon");

// toggle play/pause
playerPill.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playerPill.classList.add("playing");
    playerIcon.textContent = "⏸";
  } else {
    audio.pause();
    playerPill.classList.remove("playing");
    playerIcon.textContent = "▶";
  }
});
