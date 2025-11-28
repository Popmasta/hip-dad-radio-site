// Shared state listener for banner button ONLY
document.addEventListener("bannerToggle", (e) => {
  console.log("BANNER PLAYER is now", e.detail ? "PLAYING" : "PAUSED");
});

// Render playlists (3 per row only)
function renderPlaylists() {
  document.getElementById("playlist-main").innerHTML = `
    <div class="playlist">New Tunes for Hip Dads</div>
    <div class="playlist">Kodachrome Cookout</div>
    <div class="playlist">Driftwood Dads</div>
  `;
  document.getElementById("playlist-golden").innerHTML = `
    <div class="playlist">HDR 1973</div>
    <div class="playlist">Slinky Saturdays</div>
    <div class="playlist">Ghouly Garage</div>
  `;
}

// Fix inside Live365 iframe box so it fits with no scrollbars
function fixInsidePlayer() {
  const frame = document.getElementById("inside-player-frame");
  if (!frame) return;

  frame.addEventListener("load", () => {
    const w = Math.max(frame.contentDocument.body.scrollWidth, 380);
    const h = Math.max(frame.contentDocument.body.scrollHeight, 230);
    frame.style.width = w + "px";
    frame.style.height = h + "px";
    frame.parentElement.style.width = w + 20 + "px";
    frame.parentElement.style.height = h + 20 + "px";
  });
}

// Render radio shows boxes (3 per row)
function renderShows() {
  document.getElementById("shows-grid").innerHTML = `
    <div class="show-card"><strong>1978 Yacht-Rock Cookout</strong><br/>Next: Wed 8pm</div>
    <div class="show-card"><strong>Ghost-Dad Garage Hour</strong><br/>Next: Fri 9pm</div>
    <div class="show-card"><strong>Karaoke-Dad Power Ballads</strong><br/>Next: Sun 8am</div>
  `;
}

// Startup
renderPlaylists();
fixInsidePlayer();
renderShows();
