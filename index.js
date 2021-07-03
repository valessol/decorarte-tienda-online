//Cargar los productos al HTML
if (sessionStorage.length == 1) {
    window.onload= startLoad(); //--> load.js
} else {
    window.onload = hayProductos (); //--> load.js
}