function setActiveNav(page) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === page);
  });
}

async function loadPage(page) {
  const app = document.getElementById("app");
  const res = await fetch(`pages/${page}.html`);
  app.innerHTML = await res.text();
}

function handleRoute() {
  const hash = window.location.hash.replace("#", "") || "home";
  setActiveNav(hash);
  loadPage(hash);
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);
