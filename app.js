// --- Hip Dad Radio Mini Player --- //
const audio = new Audio("https://streaming.live365.com/a91526");
const btn = document.getElementById("playPauseBtn");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    btn.textContent = "⏸";
  } else {
    audio.pause();
    isPlaying = false;
    btn.textContent = "▶";
  }
});

// Keep audio alive across pages
window.addEventListener("beforeunload", () => {
  audio.pause();
});
