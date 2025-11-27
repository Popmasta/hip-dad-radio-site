const audio = document.getElementById("hdr-audio");
const toggle = document.getElementById("playerToggle");

toggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggle.classList.add("playing");
  } else {
    audio.pause();
    toggle.classList.remove("playing");
  }
});
