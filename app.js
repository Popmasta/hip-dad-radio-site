// --- Dummy playlist rendering so page isn't empty ---
function renderPlaylists() {
  document.getElementById("playlist-main").innerHTML = `
    <div class="playlist-item">New Tunes for Hip Dads</div>
    <div class="playlist-item">Kodachrome Cookout</div>
    <div class="playlist-item">Driftwood Dads</div>
  `;
  document.getElementById("playlist-golden").innerHTML = `
    <div class="playlist-item">HDR 1973</div>
    <div class="playlist-item">Slinky Saturdays</div>
    <div class="playlist-item">Ghouly Garage</div>
  `;
}

// --- Inside Player box sizing fix (prevents scrollbars) ---
function fixInsidePlayerBox() {
  const frame = document.querySelector(".live365-box iframe");
  if (!frame) return;

  frame.addEventListener("load", () => {
    const w = Math.max(frame.contentWindow.document.body.scrollWidth, 360);
    const h = Math.max(frame.contentWindow.document.body.scrollHeight, 200);

    frame.style.width = w + "px";
    frame.style.height = h + "px";
    frame.parentElement.style.width = w + "px";
    frame.parentElement.style.height = h + "px";
  });
}

// --- Banner PLAY / PAUSE button toggle (Top Player only) ---
const bannerBtn = document.getElementById("banner-play-btn");
let isPlaying = false;

bannerBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  bannerBtn.classList.toggle("playing", isPlaying);
});

// Init
renderPlaylists();
fixInsidePlayerBox();
fixInsidePlayerBox();
fixInsidePlayerBox();
fixInsidePlayerBox();
fixInsidePlayerBox();

// Call spacing adjustments only for inside page
fixInsidePlayerBox();
fixInsidePlayerBox();
fixInsidePlayerBox();

fixInsidePlayerBox();
