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

  setTimeout(() => {
    window.open(redirectURL, "_blank"); // Open in new tab
  }, 5000); // 5 second delay before redirect

  const video = document.getElementById("videoID");
  lockToStartAt(video, 30);
});
