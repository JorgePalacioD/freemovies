function openModal(videoId) {
  var modal = document.getElementById("myModal");
  var video = document.getElementById("video");
  video.src = "https://www.youtube.com/embed/" + videoId;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  var video = document.getElementById("video");
  video.src = "";
  modal.style.display = "none";
}