document.addEventListener("DOMContentLoaded",()=>{
  const a=document.getElementById("hdr-audio")
  const b=document.getElementById("playerToggle")
  const i=b.querySelector(".player-icon")
  let p=0
  b.addEventListener("click",async()=>{
    p?a.pause():await a.play()
    p=!p
    b.classList.toggle("playing",p)
    i.textContent=p?"❚❚":"▶"
  })
  a.onended=()=>{p=0;b.classList.remove("playing");i.textContent="▶"}
})
