function setActiveNav(page) {
  document.querySelectorAll(".nav-link").forEach(l => {
    l.classList.toggle("active", l.dataset.page === page);
  });
}

async function loadPage(page) {
  const app = document.getElementById("app");
  const res = await fetch(`pages/${page}.html?cb=${Date.now()}`);
  app.innerHTML = await res.text();
  window.scrollTo(0,0);
}

function handleRoute() {
  const hash = window.location.hash.replace("#","") || "home";
  setActiveNav(hash);
  loadPage(hash);
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);
