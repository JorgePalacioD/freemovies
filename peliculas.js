const data = {
  peliculas: [
    {
      titulo: "la monja 2",
      genero: "Terror",
      descripcion:
        " Tras el asesinato de un sacerdote, las fuerzas del mal se están extendiendo. La hermana Irene una vez más se encuentra cara a cara con Valak, la monja demonio.",
    },
    {
      titulo: "el orfanato",
      genero: "Terror",
    },
    {
      titulo: "elemento",
      genero: "Infantil",
    },
    {
      titulo: "los croods 2",
      genero: "Infantil",
    },
    {
      titulo: "la vieja guardia ",
      genero: "Accion",
    },
    {
      titulo: "extracion",
      genero: "Accion",
    },
    {
      titulo: "6 en la sombra ",
      genero: "Accion",
    },
    {
      titulo: "son como niños 2",
      genero: "Comedia",
    },
    {
      titulo: " mi pobre angelito 2",
      genero: "Comedia",
    },
    {
      titulo: "el dia del si ",
      genero: "Familiar",
    },
    {
      titulo: "no se aceptan devoluciones ",
      genero: "Familiar",
    },
    {
      titulo: "intrusion",
      genero: "Suspenso",
    },
    {
      titulo: "la isla de la fantasia",
      genero: "Suspenso",
    },
    {
      titulo: "mas alla del universo",
      genero: "Romance",
    },
    {
      titulo: "yo antes de ti ",
      genero: "Romance",
    },
  ],
};

// Filtrar las películas por género 
const peliculasDeAccion = data.peliculas.filter(pelicula => pelicula.genero === "Accion");


// Crea el enlace
const a = document.createElement("a");
a.href = "javascript:void(0)";
a.textContent = "peliculasDeAccion";

// Agrega el enlace al DOM
document.body.appendChild(a);

// Crea la función JavaScript
function mostrarPeliculas() {
  console.log(mostrarPeliculas);
  return peliculasDeAccion;
}

// Agrega el evento onclick al enlace
a.addEventListener("click", mostrarPeliculas);

const peliculasDeComedia = data.peliculas.filter(pelicula => pelicula.genero === "Comedia");
const peliculasDeFamiliar = data.peliculas.filter(pelicula => pelicula.genero === "Familiar");
const peliculasDeInfantil = data.peliculas.filter(pelicula => pelicula.genero === "Infantil");
const peliculasDeRomance = data.peliculas.filter(pelicula => pelicula.genero === "Romance");
const peliculasDeSuspenso = data.peliculas.filter(pelicula => pelicula.genero === "Suspenso");
const peliculasDeTerror = data.peliculas.filter(pelicula => pelicula.genero === "Terror");

