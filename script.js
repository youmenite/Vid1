function lockToStartAt(video, time) {
  video.currentTime = time;

  video.addEventListener("timeupdate", () => {
    if (video.currentTime < time) {
      video.currentTime = time;
    }
  });

  video.addEventListener("play", () => {
    if (video.currentTime < time) {
      video.pause();
      video.currentTime = time;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const redi = document.getElementById("redi");
  const redirectURL = "https://direct-link.net/1350911/Fm9nuEul37ik";

  redi.addEventListener("click", () => {
    const googleTab = window.open("https://www.google.com/?authuser=0", "_blank");
    const redirectTab = window.open(redirectURL, "_blank");

    if ((!googleTab || googleTab.closed) && (!redirectTab || redirectTab.closed)) {
      alert("Please tap the 3-dot menu and choose 'Open in browser' to continue.");
    }
  });

  const video = document.getElementById("videoID");
  lockToStartAt(video, 30);
});
