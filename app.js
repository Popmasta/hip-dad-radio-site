/* SIMPLE SPA ROUTER USING HASH: #home, #videos, etc. */

function setActiveNav(page) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    const p = link.getAttribute("data-page");
    link.classList.toggle("active", p === page);
  });
}

async function loadPage(page) {
  const app = document.getElementById("app");
  try {
    const res = await fetch(`pages/${page}.html?cacheBust=${Date.now()}`);
    if (!res.ok) throw new Error(`Failed to fetch pages/${page}.html`);
    const html = await res.text();
    app.innerHTML = html;
    window.scrollTo(0, 0);
  } catch (err) {
    console.error(err);
    app.innerHTML = `
      <div class="card">
        <h1>Oops.</h1>
        <p>That page failed to load. Try refreshing.</p>
      </div>
    `;
  }
}

function handleRoute() {
  let hash = window.location.hash || "#home";
  if (!hash.startsWith("#")) hash = "#" + hash;
  const page = hash.replace(/^#\/?/, "") || "home";
  setActiveNav(page);
  loadPage(page);
}

window.addEventListener("hashchange", handleRoute);

window.addEventListener("DOMContentLoaded", () => {
  // set year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav click behavior
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      window.location.hash = "#" + page;
    });
  });

  if (!window.location.hash) {
    window.location.hash = "#home";
  } else {
    handleRoute();
  }
});
