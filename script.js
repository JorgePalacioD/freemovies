// function removeAccentsAndLowerCase(string) {
//   return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
// }

// document.addEventListener("input", e => {
//   if (e.target.matches("#buscador")) {
//     const searchTerm = removeAccentsAndLowerCase(e.target.value);

//     document.querySelectorAll(".boxProject").forEach(movie => {
//       const titleElement = movie.querySelector("h3");
//       const movieTitle = removeAccentsAndLowerCase(titleElement.textContent);

//       if (movieTitle.includes(searchTerm)) {
//         movie.classList.remove("filtro");
//       } else {
//         movie.classList.add("filtro");
//       }
//     });

//     if (searchTerm === "") {
//       document.querySelectorAll(".open-modal").forEach(modalButton => {
//         modalButton.style.display = "";
//       });

//       document.getElementById("theCarousel").style.display = "";
//       document.querySelector(".title").style.display = "";
//       document.querySelector(".titleRecommended").style.display = "";
//       document.getElementById("titleRecommended").style.display = "";
//     } else {
//       document.querySelectorAll(".open-modal").forEach(modalButton => {
//         modalButton.style.display = "none";
//       });

//       document.getElementById("theCarousel").style.display = "none";
//       document.querySelector(".title").style.display = "none";
//       document.querySelector(".titleRecommended").style.display = "none";
//       document.getElementById("titleRecommended").style.display = "none";
//     }
//   }
// });


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