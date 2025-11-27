window.addEventListener("hashchange", router);
window.addEventListener("load", router);

function router() {
  document.querySelectorAll("section").forEach(s => (s.style.display = "none"));

  const hash = window.location.hash || "#home";
  const cleanHash = hash.replace("#", "");

  const section = document.getElementById(cleanHash);
  if (section) section.style.display = "block";
}

function subscribeMail() {
  const input = document.getElementById("mail-input");
  const status = document.getElementById("mail-status");

  if (!input.value.includes("@")) {
    status.textContent = "Bro that's not an email 😐";
    return;
  }
  status.textContent = "✔ Subscribed!";
  input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("live365-player").src = "https://live365.com/embed/player/a27079?autoplay=1";
  document.getElementById("chat-frame").src = "https://tlk.io/hipdadradio";
});

const youtubeVideos = [
  "dQw4w9WgXcQ", "9bZkp7q19f0", "L_jWHffIx5E", "04854XqcfCY", "tVj0ZTS4WF4", "YQHsXMglC9A"
];

const ytContainer = document.getElementById("youtube-container");
youtubeVideos.forEach(id => {
  const card = document.createElement("div");
  card.className = "widget-box perfect-fit";
  card.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}" allowfullscreen scrolling="no"></iframe>`;
  ytContainer.appendChild(card);
});
