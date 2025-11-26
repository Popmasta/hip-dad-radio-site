// SPA Router for Hip Dad Radio
document.addEventListener("DOMContentLoaded", () => {
  const pageContainer = document.getElementById("spa-page");
  const navLinks = document.querySelectorAll(".nav-link");

  async function loadPage(hash) {
    let page = hash.replace("#", "");
    if (!page) page = "home";

    const url = `/pages/${page}.html`;

    try {
      const response = await fetch(url);
      const html = await response.text();
      pageContainer.innerHTML = html;

      // update active nav styling
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${page}`);
      });

    } catch (err) {
      pageContainer.innerHTML = `<div class="card"><h2>404 — Page Not Found</h2></div>`;
    }
  }

  window.addEventListener("hashchange", () => loadPage(location.hash));
  loadPage(location.hash);
});
