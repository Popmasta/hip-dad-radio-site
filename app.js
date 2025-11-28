document.addEventListener("DOMContentLoaded", ()=>{

  /* Load 3 inside playlists only, remove bottom one */
  const pls = ["p1","p2","p3","gy1","gy2","gy3"];
  pls.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.innerText="Playlist Preview";
  });

});
