 //Validacion del formulario//

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



 let query = location.search
 let queryObjeto = new URLSearchParams(query)
 let palabra = queryStringObjectSearch.get("formularioDeBusqueda")






let urlBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&query=${palabra}&page=1&include_adult=false`;

fetch(urlBusqueda)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let info = data.results;

    let pelisPopulares = document.querySelector(
      ".contenedorBusquedaPeliculas"
    );
    
    let pelisPopularesLista = "";

    for (i = 0; i < info.length ; i++) {
      pelisPopularesLista += `
                <article class="articulosIndex">
                    <div class="contenedorImagen">
                        <a href="detail-movie.html?id=${info[i].id}">
                            <img src= "https://image.tmdb.org/t/p/w342/${info[i].poster_path}" alt="">
                        </a>
                    </div>
                    <h3>${info[i].title}</h3>
                    <p>${info[i].release_date}</p>
                </article>`;
    }
    pelisPopulares.innerHTML = pelisPopularesLista;
  })
  .catch(function (error) {
    console.log("El error fue: " + error);
  });

  //Series //
  let urlSeriesEncontradas = `https://api.themoviedb.org/3/search/tv?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&page=1&query=${palabra}&include_adult=false`;
