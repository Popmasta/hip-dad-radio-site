// Smooth SPA-style scrolling when hash links exist inside a page
document.addEventListener("DOMContentLoaded", function() {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
});
