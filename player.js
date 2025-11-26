// Hip Dad Radio MP3 stream
const STREAM_URL = "https://streaming.live365.com/a27079";

const audio = new Audio(STREAM_URL);
audio.preload = "none";
audio.crossOrigin = "anonymous";

let isPlaying = false;

const pill = document.getElementById("playerPill");
const icon = document.getElementById("playerIcon");

pill.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    icon.textContent = "⏸";
    pill.classList.add("playing");
  } else {
    audio.pause();
    isPlaying = false;
    icon.textContent = "▶";
    pill.classList.remove("playing");
  }
});
