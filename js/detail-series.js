//Validacion del formulario//
 
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
 
let queryStringSeries = location.search;
let queryStringObject = new URLSearchParams(queryStringSeries);
let id = queryStringObject.get("id");
 
let url = `https://api.themoviedb.org/3/tv/${id}?api_key=b3c5fcee75fac3fd848851441479d3b4`;
 
fetch(url)
 .then(function (response) {
   return response.json();
 })
 
 .then(function (data) {
   console.log(data);
 
   let titulo = document.querySelector(".tituloSerie");
   let imagen = document.querySelector(".imagenSerie");
   let subtitulo = document.querySelector(".subtitulosDetalles");
   let rating = document.querySelector(".ratingSerie");
   let fechaEstreno = document.querySelector(".fechaEstrenoSerie");
   let descripcionSerie = document.querySelector(".descripcionSerie");
 
   titulo.innerText = data.original_name;
   imagen.src = `https://image.tmdb.org/t/p/w342/${data.poster_path}`;
   subtitulo.innerText = data.original_name;
   rating.innerText = `Rating:${data.vote_average}`;
   fechaEstreno.innerText = `Fecha de estreno: ${data.first_air_date}`;
   descripcionSerie.innerText = data.overview;
 
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