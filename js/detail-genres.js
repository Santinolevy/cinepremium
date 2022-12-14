 
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
 
  let queryStringGenres = location.search;
  let queryStringObject = new URLSearchParams(queryStringGenres);
  let id = queryStringObject.get("id");
 
  let urlGenresMovie = `https://api.themoviedb.org/3/discover/movie?api_key=b3c5fcee75fac3fd848851441479d3b4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;
 
  let queryStringNombre = location.search;
  let queryStringObjectNombre = new URLSearchParams(queryStringNombre);
  let nombre = queryStringObjectNombre.get("nombre");
  let subtitulo = (document.querySelector(".subtitulo").innerText = `${nombre}`);
 
 
  fetch(urlGenresMovie)  
  .then(function (response) {
     return response.json();
  })
 
  .then(function (data) {
     console.log(data);
 
     let contenedorPelis = document.querySelector(".contenedorPelisDetalle");
     let generosPeliculasLista = "";
     let info = data.results;
     console.log(info);
    
     for (let i = 0; i < info.length; i++) {
        generosPeliculasLista += ` <article class="articulosIndex">
  <div class="contenedorImagen">
  <a href="detail-movie.html?id=${info[i].id}"><img src="https://image.tmdb.org/t/p/w342/${info[i].poster_path}" alt="."> </a>     
  </div>
  <h3>${info[i].title}
  </h3>
  <p>${info[i].release_date}
  </p>
  </article>`;
     }      contenedorPelis.innerHTML = generosPeliculasLista;
  })
 
  .catch(function (error) {
     console.log(error);
  });
 
  //Series
 
  let urlGenresSeries = `https://api.themoviedb.org/3/discover/tv?api_key=b3c5fcee75fac3fd848851441479d3b4&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`;
 
  fetch(urlGenresSeries)
  .then(function (response) {
     return response.json();
  })
 
  .then(function (data) {
     console.log(data);
 
     //let seccionPeliculasGeneros = document.querySelector(".")
     let contenedorSeries = document.querySelector(".contenedorSeriesDetalle");
     let generosSeriesLista = "";
     let info = data.results;
 
     for (let i = 0; i < info.length; i++) {
        generosSeriesLista += ` <article class="articulosIndex">
  <div class="contenedorImagen">
  <a href="detail-series.html?id=${info[i].id}"><img src="https://image.tmdb.org/t/p/w342/${info[i].poster_path}" alt="."> </a>     
  </div>
  <h3>${info[i].original_name}
  </h3>
  <p>${info[i].first_air_date}
  </p>
  </article>`;
     }
     contenedorSeries.innerHTML = generosSeriesLista;
 
  })
 
  .catch(function (error) {
     console.log(error);
  });
 
