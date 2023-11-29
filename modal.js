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

  // Función para detener la reproducción del video al cerrar el modal
    // Función para cargar el video correspondiente al botón clicado
    $('#videoModal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); // Botón que activó el modal
      var videoSrc = button.data('video-src'); // Obtener la URL del video desde el botón
      var videoIframe = document.getElementById('videoIframe');
      videoIframe.src = videoSrc; // Establecer la URL del video en el iframe
  });

  // Función para detener la reproducción del video al cerrar el modal
  $('#videoModal').on('hidden.bs.modal', function () {
      var videoIframe = document.getElementById('videoIframe');
      var videoSrc = videoIframe.src;
      // Detener la reproducción del video
      videoIframe.src = videoSrc;
  });