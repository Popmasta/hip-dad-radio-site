document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("hdr-audio");
  const button = document.getElementById("playerToggle");
  const icon = button.querySelector(".player-icon") || null;

  let isPlaying = false;

  function updateUI() {
    if (isPlaying) {
      button.classList.add("playing");
      if (icon) icon.textContent = "❚❚";
      else button.textContent = "❚❚ Hip Dad Radio LIVE";
    } else {
      button.classList.remove("playing");
      if (icon) icon.textContent = "▶";
      else button.textContent = "▶ Hip Dad Radio LIVE";
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
      console.error("Error toggling stream:", err);
    }
  });

  audio.addEventListener("ended", () => {
    isPlaying = false;
    updateUI();
  });

  updateUI();
});
