document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("hdrAudio");
  const toggle = document.getElementById("playerToggle");
  const icon = toggle.querySelector(".player-icon");

  let isPlaying = false;

  function updateUI() {
    if (isPlaying) {
      toggle.classList.add("playing");
      icon.textContent = "❚❚"; // pause icon
    } else {
      toggle.classList.remove("playing");
      icon.textContent = "▶";
    }
  }

  toggle.addEventListener("click", async () => {
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
      console.error("Audio play error:", err);
    }
  });

  // If audio ends (unlikely for live, but just in case)
  audio.addEventListener("ended", () => {
    isPlaying = false;
    updateUI();
  });
});
