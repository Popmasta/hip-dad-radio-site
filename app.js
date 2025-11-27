// SPA routing logic
window.addEventListener("hashchange", router);
window.addEventListener("load", router);

function router() {
  const routes = {
    "": showHome,
    "#videos": showVideos,
    "#scoop": showScoop,
    "#listen": showListen,
    "#shows": showShows
  };

  const hash = window.location.hash;
  (routes[hash] || showHome)();
}

function showHome() {
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  document.getElementById("videos").style.display = "grid";
}

function showVideos() {
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  document.getElementById("videos").style.display = "block";
}

function showScoop() {
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  document.getElementById("scoop").style.display = "block";
}

function showListen() {
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  document.getElementById("listen").style.display = "block";
}

function showShows() {
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  document.getElementById("shows").style.display = "block";
}

// Initialize live stream player + chat
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("live365-player").src = "https://live365.com/embed/player/a27079?autoplay=1";
  document.getElementById("chat-frame").src = "https://tlk.io/hipdadradio";
});

// Load blog posts from Google Drive public folder feed
const blogPostsDriveFolder = "https://drive.google.com/drive/folders/1exampleYOURBLOGFOLDER";

fetch(`https://www.googleapis.com/drive/v3/files?q='1exampleYOURBLOGFOLDER'+in+parents&key=AIzaDUMMY&fields=files(id,name,thumbnailLink)`)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("blog-container");
    container.innerHTML = "";

    data.files.forEach(file => {
      const post = document.createElement("div");
      post.className = "blog-card";
      post.innerHTML = `
        <h3>${file.name}</h3>
        <img src="${file.thumbnailLink}" alt="blog image"/>
        <p>Dj blog upload coming from Drive</p>
      `;
      container.appendChild(post);
    });
  })
  .catch(err => console.error("Drive fetch error:", err));
