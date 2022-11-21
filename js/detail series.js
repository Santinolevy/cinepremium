let formulario = document.querySelector(".buscador");
    let inputField = document.querySelector("#navigation");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault()
     if (inputField.value == "") {
         alert("La busqueda no puede estar vacia!!")
     } else if (inputField.value.length <= 3) {
         alert("El termino a buscar debe tener al menos tres caracteres")
     } else {
         this.submit();
     }
 });
 //capturamos el id de la pelicula que queremos mostrar
let query = location.search
let queryObjeto = new URLSearchParams(query)
let id = queryObjeto.get("id")
let apiKey = "b3c5fcee75fac3fd848851441479d3b4"

let urlMovieDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`

fetch(urlMovieDetail)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);


    let titulo = document.querySelector(".tituloDetalleSeries")
    titulo.innerText = data.title

    let imagen = document.querySelector(".img")
    imagen.src = `https://image.tmdb.org/t/p/w342/${data.poster_path}`

    let rating = document.querySelector(".rating")
    rating.innerText = data.vote_average

    let fechaDeEstreno = document.querySelector(".fechaDeEstreno")
    fechaDeEstreno.innerText = data.release_date

    let sinopsis = document.querySelector(".sinopsis")
    sinopsis.innerText = data.overview

    
//Generos de la pelicula

let generos = data.genres
let generosDetalle = document.querySelector(".generos")
let generosLista = ""

for (let i = 0; i < generos.length; i++) {
        generosLista += `<a href="detail-genres.html?id${generos[i].id}&nombre${generos[i].name}">${generos[i].name}</a>`
}
generosDetalle.innerHTML = generosLista;

})