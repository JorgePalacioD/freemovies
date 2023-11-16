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

    document.querySelectorAll(".open-modal").forEach(modalButton => {
      modalButton.style.display = "none";
    });

    if (e.data === null) {
      document.querySelectorAll(".open-modal").forEach(modalButton => {
        modalButton.style.display = "none";
      });
    }
  }
});