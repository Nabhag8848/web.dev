const pauseButton = document.getElementById("playPause");

pauseButton.addEventListener("click", playPause, false);

function playPause() {
  const media = document.getElementById(this.getAttribute("aria-controls"));

  if (media.paused) {
    media.play();
    this.innerText = this.dataset.pauseText;
  } else {
    media.pause();
    this.innerText = this.dataset.playText;
  }
}

document.querySelector("[id=idOfVideo]").removeAttribute("controls");

const allVideos = document.querySelectorAll("video");

allVideos.forEach((video) => {
  const { duration, ended, currentTime } = video;
  console.log({
    duration,
    ended,
    currentTime,
  });
});
