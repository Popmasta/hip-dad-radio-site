/* ---------- SIMPLE SPA ROUTER ---------- */

async function loadPage(page) {
  const app = document.getElementById("app");

  try {
    const res = await fetch(`pages/${page}.html`);
    const html = await res.text();
    app.innerHTML = html;
  } catch (err) {
    app.innerHTML = "<h1 style='padding:40px'>Page failed to load.</h1>";
    console.error(err);
  }
}

/* Hash-based routing */
function handleRoute() {
  const hash = window.location.hash;

  if (!hash || hash === "#/") {
    loadPage("home");
    setActive("Home");
  } else if (hash.startsWith("#/videos")) {
    loadPage("videos");
    setActive("Videos");
  } else if (hash.startsWith("#/the-scoop")) {
    loadPage("the-scoop");
    setActive("The Scoop");
  } else if (hash.startsWith("#/listen-live")) {
    loadPage("listen-live");
    setActive("Listen Live");
  } else if (hash.startsWith("#/contact")) {
    loadPage("contact");
    setActive("Contact");
  } else {
    loadPage("home");
  }
}

/* Highlight active nav */
function setActive(name) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.textContent.trim() === name);
  });
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);
