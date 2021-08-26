//Añadir al carrito
const agregarAlCarrito = (e) => {

    //Acceder a la base de datos del local y session storage
    let productsString = getLocalStorage(productStorage); //--> storage.js
    let carritoString = getSessionStorage (cartStorage); //--> storage.js

    //Convertirlos a JSON
    let productsJSON = aObj(productsString); //--> jsonManager.js
    let carrito = aObj (carritoString);
   
    //Modifico la cantidad del producto y añado al carrito
    let prodPosition = productsJSON.findIndex((p) => p.id === e);
    let cartPosition;

    if (carrito === null) {
        carrito = [];
        carrito.push(new ProductsInCart (productsJSON[prodPosition].id, productsJSON[prodPosition].nombre, productsJSON[prodPosition].precio, 1)); //--> constructor.js
    } else {
        // Buscar si ya existe el producto
        let itemId = productsJSON[prodPosition].id;    
        let existe = carrito.findIndex(item => item.id == itemId);
        existe >= 0 ? carrito[existe].cantidad ++ : carrito.push(new ProductsInCart (productsJSON[prodPosition].id, productsJSON[prodPosition].nombre, productsJSON[prodPosition].precio, 1)); 
    }
    
    setSessionStorage(cartStorage, aString(carrito));
    productsJSON[prodPosition].stock -= 1;
    productsString = aString(productsJSON);
    setLocalStorage(productStorage, productsString);

    //Renderizar pantalla
    HTMLProducts (); //--> load.js
    productsCart();
}

const vaciarCarrito = () => {
    localStorage.clear ();
    sessionStorage.clear ();
    startLoad ();
}


//Eventos de acordeon

const filtrarToppers = () => {
    //Acceder a la base de datos del local storage
    let productsString = getLocalStorage(productStorage); //--> storage.js
    let productsJSON = aObj(productsString); //--> jsonManager.js

    let productsToFilter = productsJSON.filter ((p) => p.categoria == "CAKE TOPPER");
    let productCards = [];
    $.each( productsToFilter, function( key, product ) {
        productCards.push(productosHTML(product)); //--> HTMLfunctions.js
    });

    //Renderizo
    $('.galeriaProductos').html(productCards);
    $.each( productsToFilter, function( key, product ) {
        if (product.stock == 0) 
        $(`#btn-${product.id}`).addClass("disabled");
    });
}

const filtrarCortantes = () => {
    //Acceder a la base de datos del local storage
    let productsString = getLocalStorage(productStorage); //--> storage.js
    let productsJSON = aObj(productsString); //--> jsonManager.js

    let productsToFilter = productsJSON.filter ((p) => p.categoria == "CORTANTE");
    let productCards = [];
    $.each( productsToFilter, function( key, product ) {
        productCards.push(productosHTML(product)); //--> HTMLfunctions.js
    });

    //Renderizo
    $('.galeriaProductos').html(productCards);
    $.each( productsToFilter, function( key, product ) {
        if (product.stock == 0) 
        $(`#btn-${product.id}`).addClass("disabled");
    });
}

const filtrarText = () => {
    //Acceder a la base de datos del local storage
    let productsString = getLocalStorage(productStorage); //--> storage.js
    let productsJSON = aObj(productsString); //--> jsonManager.js

    let productsToFilter = productsJSON.filter ((p) => p.categoria == "TEXTURIZADOR");
    let productCards = [];
    $.each( productsToFilter, function( key, product ) {
        productCards.push(productosHTML(product)); //--> HTMLfunctions.js
    });

    //Renderizo
    $('.galeriaProductos').html(productCards);
    $.each( productsToFilter, function( key, product ) {
        if (product.stock == 0) 
        $(`#btn-${product.id}`).addClass("disabled");
    });
}

const filtrarSellos = () => {
    //Acceder a la base de datos del local storage
    let productsString = getLocalStorage(productStorage); //--> storage.js
    let productsJSON = aObj(productsString); //--> jsonManager.js

    let productsToFilter = productsJSON.filter ((p) => p.categoria == "SELLO");
    let productCards = [];
    $.each( productsToFilter, function( key, product ) {
        productCards.push(productosHTML(product)); //--> HTMLfunctions.js
    });

    //Renderizo
    $('.galeriaProductos').html(productCards);
    $.each( productsToFilter, function( key, product ) {
        if (product.stock == 0) 
        $(`#btn-${product.id}`).addClass("disabled");
    });
}