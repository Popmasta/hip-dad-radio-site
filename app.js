// VIDEO GRID
const videoGrid = document.getElementById("video-grid");
const videos = [
  { title:"Hip Dad Radio Intro", url:"https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title:"Vinyl Deep Cut", url:"https://www.youtube.com/embed/L_jWHffIx5E" },
  { title:"Live Show Moment", url:"https://www.youtube.com/embed/oHg5SJYRHA0" },
  { title:"Obscure 70s Gem", url:"https://www.youtube.com/embed/34Ig3X59_qA" }
];

videoGrid.innerHTML = "";
videos.forEach(v => {
  const div = document.createElement("div");
  div.className = "show-card";
  div.innerHTML = `
    <h3>${v.title}</h3>
    <iframe frameborder="0" class="video-frame" allow="autoplay" src="${v.url}"></iframe>
  `;
  videoGrid.appendChild(div);
});


// RADIO SHOWS TAB
const showsGrid = document.getElementById("shows-grid");
const shows = [
  { name:"Classic 80s Blowout", schedule:"Wednesdays 8 PM", description:"Pure 80s bangers + dad wisdom" },
  { name:"1978 Time Capsule", schedule:"Thursdays 7 PM", description:"All hits from 1978, one year at a time" },
  { name:"Cooper's Deep Cuts", schedule:"Tuesdays 9 PM", description:"Record-nerd gold, no repeated clips" },
  { name:"Phoenix Hood Chronicles", schedule:"Fridays 6 PM", description:"Compliance banter + exhaust hood life" }
];

showsGrid.innerHTML = "";
shows.forEach(s => {
  const div = document.createElement("div");
  div.className = "show-card";
  div.innerHTML = `
    <h3>${s.name}</h3>
    <p><strong>${s.schedule}</strong></p>
    <p>${s.description}</p>
  `;
  showsGrid.appendChild(div);
});
