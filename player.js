const stream = document.getElementById("hdr-audio");
const toggle = document.getElementById("playerToggle");
toggle.addEventListener("click", () => {
  if (stream.paused) {
    stream.play();
    toggle.classList.add("playing");
  } else {
    stream.pause();
    toggle.classList.remove("playing");
  }
});
