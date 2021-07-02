//Añadir al carrito
const agregarAlCarrito = (e) => {

    //Acceder a la base de datos del local y session storage
    let productsString = getLocalStorage(productStorage);
    let carritoString = getSessionStorage (cartStorage);

    //Convertirlos a JSON
    let productsJSON = aObj(productsString);
    let carrito = aObj (carritoString);
    console.log("antes", carrito);
    //Modifico la cantidad del producto y añado al carrito
    let prodPosition = productsJSON.findIndex((p) => p.id == e);
    let cartPosition;

    if (carrito === null) {
        carrito = [];
        carrito.push(new ProductsInCart (productsJSON[prodPosition].id, productsJSON[prodPosition].nombre, productsJSON[prodPosition].precio, 1));
        console.log("carrito con producto nuevo", carrito)
    } else {
        carrito.push(new ProductsInCart (productsJSON[prodPosition].id, productsJSON[prodPosition].nombre, productsJSON[prodPosition].precio, 1));
    }
    
    carrito.forEach (element => {
        element.id == productsJSON[prodPosition].id ? element.cantidad += 1 : element.cantidad = 1;
    });
    console.log("carrito con producto repetido", carrito)

    
    setSessionStorage(cartStorage, aString(carrito));
    //Actualizar la cantidad de productos
    productsJSON[prodPosition].stock -= 1;
        
    //Mostrar carrito
    if(carrito.length >= 1) {
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

