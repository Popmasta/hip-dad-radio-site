window.addEventListener("hashchange", loadPage);
window.addEventListener("load", loadPage);

function loadPage() {
  document.querySelectorAll("section").forEach(s => s.style.display="none");
  const h = location.hash.replace("#","");
  const id = h || "home";
  const el = document.getElementById(id);
  if (el) el.style.display="block";
}

// Subscribe fake
function subscribeMail() {
  const mail = document.getElementById("mail-input");
  const st = document.getElementById("mail-status");
  if(!mail.value.includes("@")) { st.textContent="nahhh that email sus"; return; }
  st.textContent="✅ Joined the list (in spirit)";
  mail.value="";
}

// second subscription
function subscribeMail2() {
  const mail = document.getElementById("mail-input-2");
  const st = document.getElementById("mail-status-2");
  if(!mail.value.includes("@")) { st.textContent="email still sus"; return; }
  st.textContent="✅ You’re in the inner circle now";
  mail.value="";
}

// dummy blog posts
const posts = [
{title:"Building a 24/7 Dad-Radio Station",img:"assets/blog1.jpg",text:"Raspberry Pi sweat, Live365 redemption arc, headphone grease stains."},
{title:"Late-Night DJ Chronicles",img:"assets/blog2.jpg",text:"Testing scroll boxes at 3AM, realizing CSS hates me, fixing it anyway."}
];

const blog = document.getElementById("blog-container");
posts.forEach(p=>{
  const d=document.createElement("div");
  d.className="blog-card";
  d.innerHTML=`<h3>${p.title}</h3><img src="${p.img}"><p>${p.text}</p>`;
  blog.appendChild(d);
});

// YouTube grid
const ytLinks = [
{embed:"Ls9O9Mpt"},
{embed:"9bZkp7q"},
{embed:"Rainbow Road dad trance"},
{embed:"Slow scrolling dad advice"}
];

const yt = document.getElementById("youtube-container");
ytLinks.forEach(v=>{
  const d=document.createElement("div");
  d.className="widget";
  d.innerHTML=`<iframe src="${v.embed}" allowfullscreen></iframe>`;
  yt.appendChild(d);
});

// init embeds
document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("live365-player").src="https://live365.com/embed/player/a27079?autoplay=1";
  document.getElementById("chat-frame").src="https://tlk.io/hipdadradio";
});
