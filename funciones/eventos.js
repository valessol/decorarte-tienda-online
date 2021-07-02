//Añadir al carrito
const agregarAlCarrito = (e) => {

    //Acceder a la base de datos del local y session storage
    let productsString = getLocalStorage(productStorage);
    let carritoString = getSessionStorage (cartStorage);

    //Convertirlos a JSON
    let productsJSON = aObj(productsString);
    let carrito = aObj (carritoString);

    //Modifico la cantidad del producto y añado al carrito
    let prodPosition = productsJSON.findIndex((p) => p.id == e);
    if (productsJSON[prodPosition].stock > 0) {
        if (carrito === null) carrito = [];
        //Actualizar productos al array carrito
        carrito.push(new ProductsInCart (productsJSON[prodPosition].id, productsJSON[prodPosition].nombre, productsJSON[prodPosition].precio, 1));
    }
    
    setSessionStorage(cartStorage, aString(carrito));
    //Actualizar la cantidad de productos
    productsJSON[prodPosition].stock -= 1;
        
    //Mostrar carrito
    if(carrito.length != 0) {
        $('#empty').css("display", "none");
        $('#verCarrito').show();
        $('#carrito').html(`<p>Productos añadidos: ${carrito.length}</p>
        `);              
    };

    //Actualizar la cantidad de productos en el local storage (sobreescribir variable) 
    productsString = aString(productsJSON);
    setLocalStorage(productStorage, productsString);

    //Actualizar la cantidad de productos en pantalla
    HTMLProducts ();
}

