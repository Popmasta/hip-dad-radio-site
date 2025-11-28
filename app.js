async function loadPage(page) {
  const app = document.getElementById("app");
  try {
    const res = await fetch(`pages/${page}.html?cacheBust=${Date.now()}`);
    if (!res.ok) throw new Error();
    app.innerHTML = await res.text();
  } catch {
    app.innerHTML = `<div class="card"><h1>Page not found</h1></div>`;
  }
}

function setActiveNav(page) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("data-page") === page);
  });
}

function handleRoute() {
  const hash = window.location.hash.replace("#", "");
  const route = hash || "home";
  setActiveNav(route);
  loadPage(route);
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  handleRoute();
});
