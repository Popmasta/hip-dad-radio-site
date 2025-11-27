/* ------------ SIMPLE SPA ROUTER ------------- */

async function loadPage(page) {
    const app = document.getElementById("app");

    try {
        const res = await fetch(`pages/${page}.html`);
        const html = await res.text();
        app.innerHTML = html;
    } catch (err) {
        app.innerHTML = "<h2 style='padding:40px'>Page failed to load.</h2>";
        console.error(err);
    }
}

/* SET ACTIVE NAV */
function setActive(navId) {
    document.querySelectorAll(".hdr-nav a").forEach(a => a.classList.remove("active"));
    const el = document.getElementById(navId);
    if (el) el.classList.add("active");
}

/* HASH ROUTER */
function handleRoute() {
    const hash = window.location.hash;

    if (!hash || hash === "#/home") {
        loadPage("home");
        setActive("nav-home");
    } 
    else if (hash.startsWith("#/videos")) {
        loadPage("videos");
        setActive("nav-videos");
    } 
    else if (hash.startsWith("#/the-scoop")) {
        loadPage("the-scoop");
        setActive("nav-scoop");
    }
    else if (hash.startsWith("#/listen-live")) {
        loadPage("listen-live");
        setActive("nav-listen");
    }
    else if (hash.startsWith("#/contact")) {
        loadPage("contact");
        setActive("nav-contact");
    }
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);
