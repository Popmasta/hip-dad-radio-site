// PLAYLIST IMAGE-ONLY GRID
const playlists = [
  { img:"assets/playlist1.png", name:"New Tunes for Hip Dads"},
  { img:"assets/playlist2.png", name:"Kodachrome Kookout"},
  { img:"assets/playlist3.png", name:"Driftwood Dads"},
  { img:"assets/playlist4.png", name:"Seaside Shakedown"}
];

const pGrid = document.getElementById("playlist-container");
playlists.forEach(p => {
  const div = document.createElement("div");
  div.className="playlist-card";
  div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <button class="explore-btn" onclick="window.location.href='https://open.spotify.com/playlist/7yourPLurl'">
        Explore More Playlists
      </button>
  `;
  pGrid.appendChild(div);
});


// RADIO SHOWS
const shows = [
  { title:"Classic 80s Blowout", when:"Wednesdays 8 PM", desc:"straight dad-rock heat"},
  { title:"1978 Time Capsule", when:"Weekly theme", desc:"old school vinyl breakdowns"},
  { title:"Deep Crate DJ Night", when:"Tuesdays 7 PM", desc:"deep record nerd cuts"}
];

const sGrid = document.getElementById("shows-container");
shows.forEach(s => {
  const div = document.createElement("div");
  div.className="show-card";
  div.innerHTML = `
      <h3>${s.title}</h3>
      <p><strong>${s.when}</strong></p>
      <p>${s.desc}</p>
  `;
  sGrid.appendChild(div);
});
