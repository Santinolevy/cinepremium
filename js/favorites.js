//Validacion del formulario//

let formulario = document.querySelector(".buscadorHeader");
let inputField = document.querySelector("#buscadorHeaderInput");

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
//FAVORITOS DE PELICULAS//
console.log("favoritos")

//Recupero Storage//
let recuperoStorage = localStorage.getItem("favoritos");
//Transformamos el JSON en un array
let favoritos = JSON.parse(recuperoStorage)
console.log(favoritos);

//Capturamos el contenedor del elemento a mostrar

let section = document.querySelector(".contenedorArticulosFavoritosPelicula");
let peliculasFavoritas = ""

//Si el storage está vacío indicamos al usuario que no hay favoritos seleccionados

if(favoritos == null || favoritos.length == 0 ) {
    favoritosTitular.innerText = "¡No hay favoritos seleccionados!"

}
else{
    //for para recorrer el array que tiene los favoritos
    for (let i=0; i<favoritos.length; i++){
        buscarYMostrarFavoritosPeliculas(favoritos[i])
    }
}

function buscarYMostrarFavoritosPeliculas(id)