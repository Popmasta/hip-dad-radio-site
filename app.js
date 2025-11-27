const navLinks = document.querySelectorAll(".main-nav a");

function setActiveNav(page){
  navLinks.forEach(link=>{
    link.classList.toggle("active", link.dataset.page === page);
  });
}

async function loadPage(page){
  const app = document.getElementById("app");
  try {
    const res = await fetch(`pages/${page}.html?cb=${Date.now()}`);
    if(!res.ok) throw new Error("404");
    app.innerHTML = await res.text();
    window.scrollTo(0,0);
  } catch {
    app.innerHTML = `<section class="card"><h1>Page not found</h1></section>`;
  }
}

function handleRoute(){
  const hash = location.hash.replace("#","") || "home";
  setActiveNav(hash);
  loadPage(hash);
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);
