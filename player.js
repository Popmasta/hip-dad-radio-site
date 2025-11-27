document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("hdr-audio");
  const pill = document.getElementById("playerToggle");
  const icon = pill.querySelector(".player-icon");
  let playing = false;

  pill.addEventListener("click", () => {
    if (!playing) audio.play();
    else audio.pause();
    playing = !playing;
    pill.classList.toggle("playing", playing);
    icon.textContent = playing ? "❚❚" : "▶";
  });

  pill.style.visibility = "visible"; /* ensure it's not hidden */
});
