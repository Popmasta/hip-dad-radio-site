document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("hdr-audio");
  const button = document.getElementById("playerToggle");

  button.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().then(() => button.classList.add("playing"));
    } else {
      audio.pause();
      button.classList.remove("playing");
    }
  });
});
