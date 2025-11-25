/* PAGE SWITCHING (SPA) */
const links = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

function showPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  document.querySelector(id).classList.add("active");
}

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.getAttribute("href");
    showPage(page);
  });
});

/* Default page */
showPage("#home");

/* AUDIO PLAYER */
const audio = new Audio("https://streaming.live365.com/a76391");
audio.volume = 1.0;

const playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶";
  }
});