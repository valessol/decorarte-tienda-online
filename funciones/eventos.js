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
        console.log("primer producto del carrito", carrito)
    } else {
        carrito.push(new ProductsInCart (productsJSON[prodPosition].id, productsJSON[prodPosition].nombre, productsJSON[prodPosition].precio, 1));
        console.log("nuevo producto al carrito", carrito)
    }

    
    //if (carrito.every (carrito.condicion)) {

    //}
    
    //cartPosition.pop();
    //console.log ("posicion unica del producto duplicado", cartPosition);
    //
    //console.log("carrito con producto repetido", carrito)

    
    setSessionStorage(cartStorage, aString(carrito));
    //Actualizar la cantidad de productos
    productsJSON[prodPosition].stock -= 1;

    unique = carrito
     .map(e => e.id)
     .map((e, i, final) => final.indexOf(e) === i && i)
     .filter(obj=> carrito[obj])
     .map(e => carrito[e]);
    
     console.log("id", e, carrito[e])

    //carrito = aObj(getSessionStorage(cartStorage));
    //let condicion = (id) => id = productsJSON[prodPosition].id;
    //console.log("condicion", condicion);
    //if (carrito.includes((element) => element.id == condicion)) {
     //   carrito.pop();
     //   cartPosition = carrito.findIndex((element) => element.id == condicion);
     //   console.log ("posicion unica del producto duplicado", cartPosition);
     //   carrito[cartPosition].cantidad += 1;
    console.log("carrito actualizado", unique);
    //carrito[final.indexOf(e) === i && i].cantidad += 1;
    //}
    

    setSessionStorage(cartStorage, aString(carrito));
        
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

//const vaciarCarrito = () => {
    //localStorage.clear ();
    //sessionStorage.clear ();
    //startLoad ();
//}