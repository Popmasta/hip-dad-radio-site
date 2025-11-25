// Simple audio player for Hip Dad Radio using the Live365 MP3 stream
// MP3 URL you gave: https://streaming.live365.com/a27079

const STREAM_URL = "https://streaming.live365.com/a27079";

let audio;
let isPlaying = false;

function getEl(id) {
  return document.getElementById(id);
}

function initPlayer() {
  const button = getEl("playPauseButton");
  const icon = getEl("playerIcon");
  const statusSpan = getEl("playerStatus");

  if (!button || !icon || !statusSpan) return;

  // Create audio element once
  audio = new Audio(STREAM_URL);
  audio.preload = "none";

  button.addEventListener("click", () => {
    if (!audio) return;

    if (!isPlaying) {
      audio
        .play()
        .then(() => {
          isPlaying = true;
          button.classList.add("playing");
          icon.textContent = "⏸";
          statusSpan.textContent = "ON AIR";
        })
        .catch((err) => {
          console.error("Error playing stream:", err);
        });
    } else {
      audio.pause();
      isPlaying = false;
      button.classList.remove("playing");
      icon.textContent = "▶";
      statusSpan.textContent = "LIVE";
    }
  });

  // If the stream stops for any reason, reset state
  audio.addEventListener("ended", () => {
    isPlaying = false;
    button.classList.remove("playing");
    icon.textContent = "▶";
    statusSpan.textContent = "LIVE";
  });
}

document.addEventListener("DOMContentLoaded", initPlayer);
