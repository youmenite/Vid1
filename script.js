document.addEventListener("DOMContentLoaded", () => {
  const hasRedirected = sessionStorage.getItem("redirected");

  if (!hasRedirected) {
    sessionStorage.setItem("redirected", "true");

    setTimeout(() => {
      // Open the redirect in a new tab
      window.open("https://direct-link.net/1350911/Fm9nuEul37ik");
    }, 3000);
  }

  const video = document.getElementById("videoID");

  video.addEventListener("loadedmetadata", () => {
    video.currentTime = 8;
  });

  // Block play attempts before 8 seconds
  video.addEventListener("timeupdate", () => {
    if (video.currentTime < 8) {
      video.pause();
      video.currentTime = 8;
    }
  });

  // Prevent play button from starting video before 8 seconds
  video.addEventListener("play", () => {
    if (video.currentTime < 8) {
      video.pause();
      video.currentTime = 8;
    }
  });
});





