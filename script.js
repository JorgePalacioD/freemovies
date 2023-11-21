function removeAccentsAndLowerCase(string) {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

document.addEventListener("input", e => {
  if (e.target.matches("#buscador")) {
    const searchTerm = removeAccentsAndLowerCase(e.target.value);

    document.querySelectorAll(".boxProject").forEach(movie => {
      const titleElement = movie.querySelector("h3");
      const movieTitle = removeAccentsAndLowerCase(titleElement.textContent);

      if (movieTitle.includes(searchTerm)) {
        movie.classList.remove("filtro");
      } else {
        movie.classList.add("filtro");
      }
    });

    if (searchTerm === "") {
      document.querySelectorAll(".open-modal").forEach(modalButton => {
        modalButton.style.display = "";
      });

      document.getElementById("theCarousel").style.display = "";
      document.querySelector(".title").style.display = "";
      document.querySelector(".titleRecommended").style.display = "";
      document.getElementById("titleRecommended").style.display = "";
    } else {
      document.querySelectorAll(".open-modal").forEach(modalButton => {
        modalButton.style.display = "none";
      });

      document.getElementById("theCarousel").style.display = "none";
      document.querySelector(".title").style.display = "none";
      document.querySelector(".titleRecommended").style.display = "none";
      document.getElementById("titleRecommended").style.display = "none";
    }
  }
});