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
