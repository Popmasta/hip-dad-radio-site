const app = document.getElementById("app");

function setActiveNav(page) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.page === page);
  });
}

async function loadPage(page) {
  try {
    const res = await fetch(`pages/${page}.html`);
    const html = await res.text();
    app.innerHTML = html;
    window.scrollTo(0,0);
  } catch(err) {
    app.innerHTML = `<section class="card"><h1>Error</h1><p>Page failed</p></section>`;
  }
}

function router() {
  const hash = window.location.hash.replace("#","");
  const page = hash || "home";
  setActiveNav(page);
  loadPage(page);
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  router();
});
