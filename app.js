function setActiveNav(page) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("data-page") === page);
  });
}

async function loadPage(page) {
  const app = document.getElementById("app");
  try {
    const res = await fetch(`../pages/${page}.html?cacheBust=${Date.now()}`);
    if (!res.ok) throw new Error("Page not found");
    const html = await res.text();
    app.innerHTML = html;
    window.scrollTo(0, 0);
  } catch {
    app.innerHTML = `<section class="card"><h1>404</h1><p>Page failed to load</p></section>`;
  }
}

function handleRoute() {
  const hash = window.location.hash.replace("#", "") || "home";
  const page = hash === "the-scoop" ? "the-scoop" : hash;
  setActiveNav(page);
  loadPage(page);
}

window.addEventListener("hashchange", () => handleRoute());
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  handleRoute();
});
