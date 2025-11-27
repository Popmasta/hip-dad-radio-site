function setActiveNav(page){
  document.querySelectorAll(".nav-link").forEach(link=>{
    link.classList.toggle("active", link.getAttribute("data-page")===page)
  })
}

async function loadPage(page){
  const app=document.getElementById("app")
  try{
    const r=await fetch(`pages/${page}.html?bust=${Date.now()}`)
    if(!r.ok)throw 1
    app.innerHTML=await r.text()
  }catch{
    app.innerHTML=`<section class="card"><h1>404</h1><p>No scoop here (yet).</p></section>`
  }
}

function handleRoute(){
  const h=location.hash.replace(/^#\/?/,"")||"home"
  setActiveNav(h)
  loadPage(h)
}

window.addEventListener("hashchange",handleRoute)

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("year").textContent=new Date().getFullYear()
  handleRoute()
})
