// 🔊 Banner player (TOP PLAYER) toggle
const bannerBtn = document.getElementById("banner-play-btn");
let isBannerPlaying = false;

bannerBtn?.addEventListener("click", () => {
  isBannerPlaying = !isBannerPlaying;
  bannerBtn.classList.toggle("playing", isBannerPlaying);
  document.dispatchEvent(new CustomEvent("bannerToggle", { detail: isBannerPlaying }));
});
