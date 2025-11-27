window.addEventListener("hashchange", router);
window.addEventListener("load", router);

function router() {
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  const hash = window.location.hash || "#home";
  const id = hash.replace("#", "");
  const section = document.getElementById(id);
  if (section) section.style.display = "block";
}

function subscribeMail() {
  const input = document.getElementById("mail-input");
  const status = document.getElementById("mail-status");
  if(!input.value.includes("@")) {
    status.textContent = "Bro that's not an email 😐";
    return;
  }
  status.textContent = "✔ Subscribed!";
  input.value = "";
}

function subscribeMailAlt() {
  const input = document.getElementById("mail-input-2");
  const status = document.getElementById("mail-status-2");
  if(!input.value.includes("@")) {
    status.textContent = "nope.";
    return;
  }
  status.textContent = "✔ Subscribed!";
  input.value = "";
}

// unique youtube embeds
const youtubeVideos = [
  "dQw4w9WgXcQ", "9bZkp7q19f0", "L_jWHffIx5E", "04854XqcfCY", "tVj0ZTS4WF4", "YQHsXMglC9A"
];

const container = document.getElementById("youtube-container");
youtubeVideos.forEach(id => {
  const div = document.createElement("div");
  div.className = "playlist-card";
  div.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe>`;
  container.appendChild(div);
});
