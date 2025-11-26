/* --------- SIMPLE SPA ROUTER --------- */

async function loadPage(page) {
  const container = document.getElementById("page-content");
  try {
    const res = await fetch(`pages/${page}.html`);
    const html = await res.text();
    container.innerHTML = html;
  } catch (err) {
    console.error(err);
    container.innerHTML = "<h1 style='padding:40px'>Page failed to load.</h1>";
  }
}

function setActiveLink(page) {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    const lp = link.getAttribute("data-page");
    link.classList.toggle("active", lp === page);
  });
}

function getPageFromHash() {
  const hash = window.location.hash || "#/home";
  const parts = hash.split("/");
  return parts[1] || "home";
}

function handleRouteChange() {
  const page = getPageFromHash();
  setActiveLink(page);
  loadPage(page);
}

/* HEADER PLAYER BUTTON:
   Right now it just jumps you to Listen Live.
   (We already have a hidden background player iframe.) */

function initHeaderPlayerButton() {
  const btn = document.getElementById("headerPlayerButton");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.location.hash = "#/listen-live";
  });
}

/* INIT */

window.addEventListener("hashchange", handleRouteChange);
window.addEventListener("DOMContentLoaded", () => {
  initHeaderPlayerButton();
  handleRouteChange();
});
