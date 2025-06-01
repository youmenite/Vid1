document.addEventListener("DOMContentLoaded", () => {
  const redi = document.getElementById("redi");
  const redirectURL = "https://direct-link.net/1350911/Fm9nuEul37ik";

  const google = 'https://www.google.com/?authuser=0';
  redi.addEventListener("click", () => {
    const win = window.open(google, "_blank");

    // If popup blocked or in-app browser (like Instagram/Facebook)
    if (!win || win.closed || typeof win.closed === "undefined") {
      alert(
        "Please tap the 3-dot menu and choose 'Open in browser' to continue."
      );
    }

    setTimeout(()=>{
      window.open(redirectURL, "_blank");
    } , 3000);
  });

  const video = document.getElementById("videoID");

  video.addEventListener("loadedmetadata", () => {
    video.currentTime = 30;
  });

  // Block play attempts before 30 seconds
  video.addEventListener("timeupdate", () => {
    if (video.currentTime < 30) {
      video.pause();
      video.currentTime = 30;
    }
  });

  video.addEventListener("play", () => {
    if (video.currentTime < 30) {
      video.pause();
      video.currentTime = 30;
    }
  });
});
