
document.addEventListener("keyup", e => {
  const buscador = document.getElementById("buscador");
  const theCarousel = document.getElementById("theCarousel");
  const titlesRecommended = document.querySelectorAll(".titleRecommended");
  const resultsMessage = document.getElementById("resultsMessage");

  if (e.target === buscador) {
    if (e.key === "Escape") {
      buscador.value = "";
      theCarousel.style.display = "block";

      document.querySelectorAll(".boxMovie").forEach(movie => {
        movie.style.display = "block";
      });

      titlesRecommended.forEach(titleRecommended => {
        titleRecommended.style.display = "block";
      });

      // Oculta el mensaje de resultados cuando se presiona Escape
      resultsMessage.style.display = "none";
    } else {
      const normalizeString = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      };

      const searchTerm = normalizeString(e.target.value.toLowerCase());
      let hasResults = false; // Variable para verificar si hay resultados

      document.querySelectorAll(".boxMovie").forEach(movie => {
        const title = movie.querySelector("h3");
        const titleText = normalizeString(title.textContent.toLowerCase());
        const isMatch = titleText.includes(searchTerm);

        if (isMatch) {
          hasResults = true; // Se encontró al menos un resultado
        }

        movie.style.display = isMatch ? "block" : "none";
      });

      // Muestra el carousel solo cuando el buscador está vacío
      theCarousel.style.display = searchTerm === "" ? "block" : "none";

      titlesRecommended.forEach(titleRecommended => {
        titleRecommended.style.display = "none";
      });

      // Muestra u oculta el mensaje de resultados según si hay resultados o no
      resultsMessage.style.display = hasResults ? "none" : "block";
    }
  }
});

// --------------------------------------------------------------------------
                // Menu Hamburguesa


document.addEventListener("keyup", e => {
  const buscadorMenu = document.getElementById("buscadorMenu");
  const theCarousel = document.getElementById("theCarousel");
  const titlesRecommended = document.querySelectorAll(".titleRecommended");
  const resultsMessage = document.getElementById("resultsMessage");

  if (e.target === buscadorMenu) {
    if (e.key === "Escape") {
      buscadorMenu.value = "";
      theCarousel.style.display = "block";

      document.querySelectorAll(".boxMovie").forEach(movie => {
        movie.style.display = "block";
      });

      titlesRecommended.forEach(titleRecommended => {
        titleRecommended.style.display = "block";
      });

      // Oculta el mensaje de resultados cuando se presiona Escape
      resultsMessage.style.display = "none";
    } else {
      const normalizeString = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      };

      const searchTerm = normalizeString(e.target.value.toLowerCase());
      let hasResults = false; // Variable para verificar si hay resultados

      document.querySelectorAll(".boxMovie").forEach(movie => {
        const title = movie.querySelector("h3");
        const titleText = normalizeString(title.textContent.toLowerCase());
        const isMatch = titleText.includes(searchTerm);

        if (isMatch) {
          hasResults = true; // Se encontró al menos un resultado
        }

        movie.style.display = isMatch ? "block" : "none";
      });

      // Muestra el carousel solo cuando el buscador está vacío
      theCarousel.style.display = searchTerm === "" ? "block" : "none";

      titlesRecommended.forEach(titleRecommended => {
        titleRecommended.style.display = "none";
      });

      // Muestra u oculta el mensaje de resultados según si hay resultados o no
      resultsMessage.style.display = hasResults ? "none" : "block";
    }
  }
});