// SPA Router
window.addEventListener("hashchange", router);
window.addEventListener("load", router);

function router() {
  document.querySelectorAll("section").forEach(s => s.style.display = "none");

  const hash = window.location.hash;
  if (hash === "" || hash === "#") return showSection("home");
  if (hash === "#videos") return showSection("videos");
  if (hash === "#scoop") return showSection("scoop");
  if (hash === "#listen") return showSection("listen");
  if (hash === "#shows") return showSection("shows");
}

function showSection(id) {
  document.getElementById(id).style.display = "block";
}

// Mailing list
function subscribeMail() {
  const input = document.getElementById("mail-input");
  const status = document.getElementById("mail-status");

  if (!input.value.includes("@")) {
    status.textContent = "Bro that does not look like an email 😐";
    return;
  }

  status.textContent = "✔ Subscribed! (Not really sent anywhere yet, but we pretend it did)";
  input.value = "";
}

function subscribeMail() {
  const input = document.getElementById("mail-input");
  const status = document.getElementById("mail-status");

  if (!input.value.includes("@")) {
    status.textContent = "Bro that does not look like an email 😐";
    return;
  }

  status.textContent = "✔ Subscribed! (Not really sent anywhere yet but we pretend it did)";
  input.value = "";
}

// Live player + chat init
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("live365-player").src = "https://live365.com/embed/player/a27079?autoplay=1";
  document.getElementById("chat-frame").src = "https://tlk.io/hipdadradio";
});

// Playlist explore button redirect
document.querySelectorAll(".explore-more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    window.open("https://open.spotify.com/user/hipdadradio");
  });
});

// Dummy YouTube + IG content
const youtubeLinks = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/9bZkp7q19f0",
  "https://www.youtube.com/embed/L_jWHffIx5E",
  "https://www.youtube.com/embed/04854XqcfCY",
  "https://www.youtube.com/embed/tVj0ZTS4WF4"
];

const ytContainer = document.getElementById("youtube-container");
youtubeLinks.forEach(link => {
  const card = document.createElement("div");
  card.className = "widget-box";
  card.innerHTML = `<iframe src="${link}" allowfullscreen></iframe>`;
  ytContainer.appendChild(card);
});
