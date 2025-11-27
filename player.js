/* SIMPLE ALWAYS-ON AUDIO PLAYER */

let audio = new Audio("https://streaming.live365.com/a27079");

document.getElementById("playerButton").addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
