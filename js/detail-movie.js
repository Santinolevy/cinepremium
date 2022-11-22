//Validacion formulariosx;//
 
let formulario = document.querySelector(".buscadorHeader");
let inputField = document.querySelector("#buscadorHeaderInput");
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault()
    if (inputField.value == "") {
        alert("Ingrese texto")
    } else if (inputField.value.length <= 3) {
        alert("El termino a buscar debe tener al menos tres caracteres")
    } else {
        this.submit();
    }
});
//Utilizamos la QueryString para poder hacer el detalle de cada película a partir del id que te brnda la URL
let queryStringPeliculas = location.search;
let queryStringObject = new URLSearchParams(queryStringPeliculas);
let id = queryStringObject.get("id");
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=b3c5fcee75fac3fd848851441479d3b4`;
 
fetch(url)
 .then(function (response) {
   return response.json();
 })
 .then(function (data) {
   console.log(data);
   //Guardamos en una variable a los elementos que queremos capturar del DOM
 
   let titulo = document.querySelector(".tituloPelicula");
   let imagen = document.querySelector(".imagenPeli");
   let subtitulo = document.querySelector(".subtitulosDetalles");
   let rating = document.querySelector(".ratingPelicula");
   let fechaEstreno = document.querySelector(".fechaEstrenoPelicula");
   let descripcionPelicula = document.querySelector(".descripcionPelicula");
 
 
   titulo.innerText = data.title;
   imagen.src = `https://image.tmdb.org/t/p/w342/${data.poster_path}`;
   subtitulo.innerText = data.title;
   rating.innerText = `Rating:${data.vote_average}`;
   fechaEstreno.innerText = `Fecha de estreno: ${data.release_date}`;
   descripcionPelicula.innerText = data.overview;
 
   //Generos del detalle//
   let generos = data.genres;
   let generoDetalle = document.querySelector(".genero");
   let generosLista = "";
 
   for (let i = 0; i < generos.length; i++) {
     generosLista += `<a class="anclajeGeneros" href="detail-genres.html?id=${generos[i].id}&nombre=${generos[i].name}">${generos[i].name}</a>. `;
   }
 
   generoDetalle.innerHTML = generosLista;
 })
 .catch(function (error) {
   console.log("El error fue: " + error);
 });
