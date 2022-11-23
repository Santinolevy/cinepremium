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


let queryStringBusqueda = location.search;

let queryStringObjectSearch = new URLSearchParams(queryStringBusqueda);

let query = queryStringObjectSearch.get("formularioDeBusqueda");


//USAMOS QUERY STRING PARA EL ENDPOINT//
let urlSearchMovies = `https://api.themoviedb.org/3/search/movie?api_key=b3c5fcee75fac3fd848851441479d3b4&language=en-US&query=${query}&page=1&include_adult=false`;


//UTILIZAMOS FETCH//
//Fetch recibe como parametro nuestro endpoint//
fetch(urlSearchMovies)

.then(function (response) {
  return response.json();
})

.then(function (data) {
  console.log(data);
  let info = data.results;
  let contenedorSearchMovies = document.querySelector(".searchMovies");
  let searchString = "";

  for (let i = 0; i < info.length; i++) {
    if (info[i].poster_path != null) {
      rutaImg = `https://image.tmdb.org/t/p/w342/${info[i].poster_path}`;
    }
    searchString += `
                  <article class="articulosIndex">
                      <div class="contenedorImagen">
                          <a href="detail-movie.html?id=${info[i].id}">
                              <img src= "${rutaImg}" alt="">
                          </a>
                      </div>
                      <h3>${info[i].title}</h3>
                      <p>${info[i].release_date}</p>
                  </article>`;
  }

  contenedorSearchMovies.innerHTML = searchString;
})

.catch(function (error) {
  console.log(error);
});



// lo mismo que en peliculas solo que cambiamos el nombre de las variables y cambiamos la ruta del ENDPOINT, pero mantenemos ese valor dinamico para la clave de query que es lo que el usuario va a estar ingresando.
  let urlSearchTVS = `https://api.themoviedb.org/3/search/tv?api_key=b3c5fcee75fac3fd848851441479d3b4&language=en-US&page=1&query=${query}&include_adult=false`;

  fetch(urlSearchTVS)
  .then(function (response) {
      return response.json();
  })

  .then(function (data) {
      console.log("series");
      console.log(data);

      let info = data.results;
      let contenedorSearchTVS = document.querySelector(".searchTVS");
      let searchStringTVS = "";

      for (i = 0; i < info.length; i++) {
      if (info[i].poster_path != null) {
          rutaImg = `https://image.tmdb.org/t/p/w342/${info[i].poster_path}`;
      }

      searchStringTVS += `
                      <article class="articulosIndex">
                          <div class="contenedorImagen"
                              <a href="detail-series.html?id=${info[i].id}">
                                  <img src= "https://image.tmdb.org/t/p/w342/${rutaImg}" alt="">
                              </a>
                          </div>
                          <h3>${info[i].original_name}</h3>
                          <p>${info[i].first_air_date}</p>
                      </article>`;
      }
      contenedorSearchTVS.innerHTML = searchStringTVS;
  })

  .catch(function (error) {
      console.log(error);
  });
