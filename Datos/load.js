//Cargar el JSON en la base de datos que será el local storage
const baseDeDatosProductos = () => {
    $.getJSON( "../Datos/productos.json", function(products) { 

        //Convierto a string el JSON
        let baseDeDatosString = aString(products); //-->jsonManager.js

        //almaceno el string en el local storage (key, value)
        setLocalStorage (productStorage, baseDeDatosString); //--> storage.js
    });
}


//cargar los productos al HTML desde el local Storage
const HTMLProducts = () => {

    $('.galeriaProductos').html("");

    //Cargo los productos desde el local Storage
    let productsString = getLocalStorage(productStorage); //--> storage.js

    //Parseo los productos para tenerlos como objetos literales
    let productsJSON = aObj(productsString); //--> jsonManager.js

    //Recorro el productJSON y agrego los productos al array
        let productCards = [];
        $.each( productsJSON, function( key, product ) {
            productCards.push(productosHTML(product)); //--> HTMLfunctions.js
            //productos.push(product);
        });
        //console.log("despues", productCards);
        //console.log("despues", productos);

    //Los muestro en el html
    $('.galeriaProductos').html(productCards);
}



const startLoad = () => {
    baseDeDatosProductos();
    HTMLProducts();
}
