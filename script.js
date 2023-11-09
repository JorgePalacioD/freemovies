function removeAccentsAndLowerCase(string) {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador")) {
    if (e.key === "Escape") e.target.value = "";
    

    const searchTerm = removeAccentsAndLowerCase(e.target.value);

    document.querySelectorAll(".boxProject").forEach((movie) => {
      const titleElement = movie.querySelector("h3");
      if (titleElement) {
        const movieTitle = removeAccentsAndLowerCase(titleElement.textContent);

        if (movieTitle.includes(searchTerm)) {
          movie.classList.remove("filtro");
          document.querySelectorAll(".open-modal").forEach((modalButton) => {
            modalButton.style.display = "none";
          });
        }        
        else {
          movie.classList.add("filtro");
          modalButton.style.display = "";

        }
      }
    });
  }
});



if (!searchTerm) {
  // Oculta los botones con la clase "open-modal"
  document.querySelectorAll(".open-modal").forEach((modalButton) => {
    modalButton.style.display = "none";
  });
}
