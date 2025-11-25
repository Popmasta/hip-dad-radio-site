// app.js
// Simple audio player controller for Hip Dad Radio

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("hipdad-audio");
  const toggleBtn = document.getElementById("player-toggle");
  const iconSpan = document.getElementById("player-icon");

  if (!audio || !toggleBtn || !iconSpan) {
    // If we're on a page that doesn't have the player markup, just bail.
    return;
  }

  let isPlaying = false;

  const setPlayingState = (playing) => {
    isPlaying = playing;

    if (playing) {
      iconSpan.textContent = "⏸";
      toggleBtn.classList.add("is-playing");
      toggleBtn.setAttribute("aria-label", "Pause Hip Dad Radio");
    } else {
      iconSpan.textContent = "▶";
      toggleBtn.classList.remove("is-playing");
      toggleBtn.setAttribute("aria-label", "Play Hip Dad Radio");
    }
  };

  toggleBtn.addEventListener("click", async () => {
    try {
      if (!isPlaying) {
        // Start the stream
        await audio.play();
        setPlayingState(true);
      } else {
        // Pause the stream
        audio.pause();
        setPlayingState(false);
      }
    } catch (err) {
      console.error("Error playing Hip Dad Radio stream:", err);
      alert("Sorry, the stream is having trouble loading right now.");
      setPlayingState(false);
    }
  });

  // If the stream ends or errors, reset the button
  audio.addEventListener("ended", () => setPlayingState(false));
  audio.addEventListener("error", () => setPlayingState(false));

  // Optional: pause if the user leaves the page
  window.addEventListener("beforeunload", () => {
    if (!audio.paused) {
      audio.pause();
    }
  });
});
