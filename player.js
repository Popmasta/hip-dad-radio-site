/* Working 365 stream embed */
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("top-player")) {
    document.getElementById("top-player").outerHTML = `<div class="inside-player-container"><div class="inside-player-box"><div id="top-player"></div></div></div>`;
  }
});

/* Placeholder for inside player, you can swap later for Live365 embed */
const make365Player = (container) => {
  container.innerHTML = `
     <div class="live365-embed">
       <div class="player-header">NOW PLAYING</div>
       <div class="track-info" id="track-${container.id}">Loading...</div>
       <div class="controls">
         <button id="play-${container.id}">Play</button>
         <button id="pause-${container.id}">Pause</button>
       </div>
     </div>
  `;
};
