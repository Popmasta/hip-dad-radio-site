document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("hdr-audio");
  const button = document.getElementById("playerToggle");

  if (!audio || !button) return;

  const icon = button.querySelector(".player-icon");
  let isPlaying = false;

  function updateUI() {
    if (isPlaying) {
      button.classList.add("playing");
      icon.textContent = "❚❚"; // pause
    } else {
      button.classList.remove("playing");
      icon.textContent = "▶";
    }
  }

  button.addEventListener("click", async () => {
    try {
      if (!isPlaying) {
        await audio.play();
        isPlaying = true;
      } else {
        audio.pause();
        isPlaying = false;
      }
      updateUI();
    } catch (err) {
      console.error("Error toggling audio:", err);
    }
  });

  audio.addEventListener("ended", () => {
    isPlaying = false;
    updateUI();
  });

  // footer year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
