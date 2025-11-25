/* ======================
   GLOBAL AUDIO PLAYER
   ====================== */

let audio = new Audio("https://streaming.live365.com/a01665");
let isPlaying = false;

function togglePlay() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        isPlaying = false;
    }
}

/* Attach to mini player */
document.addEventListener("DOMContentLoaded", () => {
    const mini = document.querySelector(".mini-player");
    if (mini) {
        mini.addEventListener("click", togglePlay);
    }
});

/* ======================
   YOUTUBE FEED (OPTION A)
   ====================== */

async function loadYouTube() {
    const container = document.getElementById("video-feed");
    if (!container) return;

    const CHANNEL_HANDLE = "@hipdadradioclips5791";

    try {
        const url = `https://yt.lemnoslife.com/channels?handle=${CHANNEL_HANDLE}`;
        const channelData = await fetch(url).then(r => r.json());

        const channelId = channelData.items?.[0]?.id;

        if (!channelId) {
            container.innerHTML = "<p>Cannot load videos.</p>";
            return;
        }

        const videoURL = `https://yt.lemnoslife.com/videos?part=snippet&channelId=${channelId}`;
        const vidData = await fetch(videoURL).then(r => r.json());

        let html = "";

        vidData.items.slice(0, 12).forEach(v => {
            const vid = v.id;
            const title = v.snippet.title;
            const thumb = v.snippet.thumbnails.medium.url;

            html += `
                <div class="video-card">
                    <img src="${thumb}" width="100%" style="border-radius:10px;">
                    <h3>${title}</h3>
                    <a href="https://youtube.com/watch?v=${vid}" target="_blank">Watch →</a>
                </div>
            `;
        });

        container.innerHTML = html;
    } catch (err) {
        container.innerHTML = "<p>Error loading videos.</p>";
        console.error(err);
    }
}

loadYouTube();
