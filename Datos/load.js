//Cargar el JSON en la base de datos que será el local storage
const baseDeDatosProductos = () => {
    $.getJSON( "../Datos/productos.json", function(products) { 

        let baseDeDatosString = aString (products); //--> jsonManager.js
        localStorage.clear();
        setLocalStorage (productStorage, baseDeDatosString); //--> storage.js
    });
}


//cargar los productos al HTML desde el local Storage
const HTMLProducts = () => {

    $('.galeriaProductos').html("");

    localStorageArray(); //--> storage.js
    
    let productCards = [];
    $.each( productos, function( key, product ) {
        productCards.push(productosHTML(product)); //--> HTMLfunctions.js
    });

    $('.galeriaProductos').html(productCards);
}

const startLoad = () => {
    baseDeDatosProductos();
    HTMLProducts();
}

