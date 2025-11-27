document.addEventListener("DOMContentLoaded",()=>{
  const audio = document.getElementById("hdr-audio");
  const toggle = document.getElementById("playerToggle");
  let playing = false;

  toggle.addEventListener("click",()=>{
    if(!playing) audio.play().then(()=>{playing=true; toggle.classList.add("playing");});
    else { audio.pause(); playing=false; toggle.classList.remove("playing"); }
  });
});
