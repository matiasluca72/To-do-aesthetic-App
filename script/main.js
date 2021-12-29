modalProducto = new bootstrap.Modal(document.getElementById("modalProducto"));
let pantallaVacio = document.getElementById("pantallaVacio");
let pantallaListado = document.getElementById("pantallaListado");
let pantallaListado__lista = document.getElementById("pantallaListado__lista");
let pantallaDetalle = document.getElementById("pantallaDetalle");
/* let listadoStorage = []; */
let guardar = document
  .getElementById("modalProducto__guardar")
  .addEventListener("click", function () {
    let producto = document.getElementById("modalProducto__input").value;
    let categorias = document.getElementById("modalProducto__Categorias").value;
    let info = document.getElementById("modalProducto__info").value;
    let modelo = `<li class="list-group-item" data-producto='${producto}' data-categorias='${categorias}' data-info='${info}'><img src="${categorias}" alt="${producto}" class="pantallaListado__icono"> ${producto} <img src='images/rightArrow.svg' class="pantallaListado__flechaDerecha"></li>`;
    document.getElementById("modalProducto__input").value = "";
    document.getElementById("modalProducto__Categorias").value = "";
    document.getElementById("modalProducto__info").value = "";
    console.log(producto, categorias, info, pantallaListado__lista);
    pantallaListado__lista.innerHTML += modelo;
    modalProducto.hide();
    pantallaVacio.style.display = "none";
    pantallaListado.style.display = "block";
    /* listadoStorage.push(modelo);
    localStorage.setItem("listaCompras", listadoStorage); */
  });

let clicDescripcion = document
  .getElementById("pantallaListado__lista")
  .addEventListener("click", function (e) {
    console.log(e.target.getAttribute("data-producto"));
    document.getElementById(
      "pantallaDetalle__producto"
    ).innerHTML = e.target.getAttribute("data-producto");
    document.getElementById(
      "pantallaDetalle__icono"
    ).src = e.target.getAttribute("data-categorias");
    document.getElementById(
      "pantallaDetalle__info"
    ).innerHTML = e.target.getAttribute("data-info");
    pantallaListado.style.display = "none";
    pantallaDetalle.style.display = "block";
  });

let pantallaDetalle__cerrar = document
  .getElementById("pantallaDetalle__cerrar")
  .addEventListener("click", function () {
    pantallaListado.style.display = "block";
    pantallaDetalle.style.display = "none";
  });

/* let desdeStorage = localStorage.getItem("listaCompras");
if (desdeStorage) {
  pantallaVacio.style.display = "none";
  pantallaListado.style.display = "block";
  pantallaListado__lista.innerHTML += desdeStorage;
}
 */
