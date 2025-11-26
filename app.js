/* SPA ROUTER */

const spaContainer = document.getElementById("spa-container");

// Map routes to page files
const routes = {
  "/home": "pages/home.html",
  "/videos": "pages/videos.html",
  "/the-scoop": "pages/the-scoop.html",
  "/listen-live": "pages/listen-live.html",
  "/contact": "pages/contact.html",
  "/post": "pages/scoop-post.html"
};

// Load a page into the <main> container
async function loadPage(route) {
  const file = routes[route] || routes["/home"];

  try {
    const res = await fetch(file);
    const html = await res.text();
    spaContainer.innerHTML = html;
    highlightNav(route);
  } catch (e) {
    spaContainer.innerHTML = "<p>Page failed to load.</p>";
  }
}

// Highlight nav link
function highlightNav(route) {
  document.querySelectorAll("[data-route]").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${route}`) {
      link.classList.add("active");
    }
  });
}

// Handle hash changes
window.addEventListener("hashchange", () => {
  loadPage(location.hash.replace("#", "") || "/home");
});

// Initial load
loadPage(location.hash.replace("#", "") || "/home");
