// Simple SPA Router

async function loadPage(page) {
  const app = document.getElementById("app");

  try {
    const res = await fetch(`pages/${page}.html`);
    const html = await res.text();
    app.innerHTML = html;
  } catch (err) {
    app.innerHTML = `<div class="card"><h1>Page Not Found</h1></div>`;
  }

  highlightActiveNav();
}

// Highlight active nav link
function highlightActiveNav() {
  const links = document.querySelectorAll(".nav-link");
  const current = location.hash.replace("#/", "") || "";

  links.forEach((link) => {
    const href = link.getAttribute("href").replace("#/", "");
    link.classList.toggle("active", href === current || (href === "" && current === ""));
  });
}

// Routing logic
function router() {
  const hash = location.hash.replace("#/", "");

  switch (hash) {
    case "":
      loadPage("home");
      break;
    case "videos":
      loadPage("videos");
      break;
    case "the-scoop":
      loadPage("the-scoop");
      break;
    case "live":
      loadPage("live");
      break;
    case "contact":
      loadPage("contact");
      break;
    default:
      loadPage("home");
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
