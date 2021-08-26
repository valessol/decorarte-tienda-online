//Cargar el JSON 
const baseDeDatosProductos = () => {
    $.getJSON( "../Datos/productos.json", function(products) { 
        let baseDeDatosString = aString(products); //-->jsonManager.js
        setLocalStorage (productStorage, baseDeDatosString); //--> storage.js
    });
}


//cargar los productos al HTML desde el local Storage
const HTMLProducts = () => {
    $('.galeriaProductos').html("");
    let productsString = getLocalStorage(productStorage); //--> storage.js
    let productsJSON = aObj(productsString); //--> jsonManager.js
    let productCards = [];
    $.each( productsJSON, function( key, product ) {
        productCards.push(productosHTML(product)); //--> HTMLfunctions.js
    });

    //Renderizo
    $('.galeriaProductos').html(productCards);
    $.each( productsJSON, function( key, product ) {
        if (product.stock == 0) 
        $(`#btn-${product.id}`).addClass("disabled");
    });
}
//Ejecuto cada vez que el sessionStorage esté vacío
const startLoad = () => {
    baseDeDatosProductos();
    HTMLProducts();
}






// const visualizarCarrito = () => {
//     let carritoString = getSessionStorage (cartStorage);
//     let carrito = aObj (carritoString);
//     let carritoCards = [];

//     carrito.forEach(element => {
//         carritoCards.push (verCarrito (element)); //--> HTMLfunctions.js
//     })

//     $('#carritoActual').html(carritoCards);  
//     sumarCarrito();
// }