// ----- Hip Dad Radio MP3 Stream -----
const STREAM_URL = "https://streaming.live365.com/a27079";

// ----- Create Audio Element -----
const audio = new Audio(STREAM_URL);
audio.preload = "none";
audio.crossOrigin = "anonymous";

// ----- Elements -----
const playBtn = document.getElementById("hdr-play-btn");
const playIcon = document.getElementById("hdr-play-icon");
const playText = document.getElementById("hdr-play-text");

// ----- Toggle Play/Pause -----
playBtn.addEventListener("click", async () => {
    try {
        if (audio.paused) {
            await audio.play();
            playIcon.textContent = "⏸";        // pause icon
            playText.textContent = "Pause";
        } else {
            audio.pause();
            playIcon.textContent = "▶️";        // play icon
            playText.textContent = "Play";
        }
    } catch (err) {
        console.error("Playback error:", err);
    }
});