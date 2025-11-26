/* ------------ SIMPLE SPA ROUTER ------------ */

async function loadPage(page) {
  const app = document.getElementById("app");

  try {
    const res = await fetch(`pages/${page}.html`);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${page}.html`);
    }
    const html = await res.text();
    app.innerHTML = html;
    window.scrollTo(0, 0);
  } catch (err) {
    console.error(err);
    app.innerHTML = `<div class="card"><h1>Oops.</h1><p>Page failed to load.</p></div>`;
  }
}

/* Set active nav item */
function setActiveNav(page) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkPage = link.getAttribute("data-page");
    if (linkPage === page) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* Handle hash changes: #home, #videos, etc. */
function handleRoute() {
  let hash = window.location.hash || "#home";
  if (!hash.startsWith("#")) hash = "#" + hash;

  // remove # and leading /
  const clean = hash.replace(/^#\/?/, "");
  const page = clean || "home";

  loadPage(page);
  setActiveNav(page);
}

/* Setup */

window.addEventListener("hashchange", handleRoute);

window.addEventListener("DOMContentLoaded", () => {
  // if no hash, go home
  if (!window.location.hash) {
    window.location.hash = "#home";
  } else {
    handleRoute();
  }

  // Make sure nav links just change hash (no full reload)
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      window.location.hash = "#" + page;
    });
  });
});
