function setActiveNav(page) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("data-page") === page);
  });
}

async function loadPage(page) {
  const app = document.getElementById("app");

  try {
    const res = await fetch(`pages/${page}.html?cb=${Date.now()}`);
    if (!res.ok) throw new Error("404");
    app.innerHTML = await res.text();
    window.scrollTo(0,0);
  } catch {
    app.innerHTML = `<section class="card"><h1>Page not found</h1></section>`;
  }
}

function router() {
  let hash = location.hash.replace("#","");
  if (!hash) hash = "home";

  if (hash === "the-scoop") hash = "the-scoop";
  if (hash === "listen-live") hash = "listen-live";
  
  setActiveNav(hash);
  loadPage(hash);
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  router();
});
