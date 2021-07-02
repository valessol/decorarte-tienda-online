//Ocultar/Mostrar Carrito

const mostrarCarrito = () => {
    if(carrito.length==0) {
        //$('#carritoDeCompras').css();
        $('#galeria').removeClass("col-md-8");
        $('#galeria').addClass("col-md-12");   
    }else {
        $('#carritoDeCompras').show();
    }
}

//Añadir al carrito
const agregarAlCarrito = (e) => {

    //Acceder a la base de datos del local storage
    let productsString = getLocalStorage(productStorage);

    //Convertirlo a JSON
    let productsJSON = aObj(productsString);

    //Modifico la cantidad del producto y añado al carrito
    let prodPosition = productsJSON.findIndex((p) => p.id == e);
    if (productsJSON[prodPosition].stock > 0) {
        //Actualizar productos al array carrito
        let cart = [];
        cart.push(new ProductsInCart (productsJSON[prodPosition].id, productsJSON[prodPosition].nombre, productsJSON[prodPosition].precio, 1));
        setSessionStorage(cartStorage, aString(cart));
        //Actualizar la cantidad de productos
        productsJSON[prodPosition].stock -= 1;
        console.log("position", prodPosition)
    }
    

    //Actualizar la cantidad de productos en el local storage (sobreescribir variable) 
    productsString = aString(productsJSON);
    setLocalStorage(productStorage, productsString);

    //Actualizar la cantidad de productos en pantalla
    HTMLProducts();
    console.log("stock actual", productsJSON[prodPosition].stock );
    if(productsJSON[prodPosition].stock == 0){
        $(`#btn-${productsJSON[prodPosition].id}`).addClass("disabled");
    }
    


    //Almaceno el carrito en el Session Storage
     //let carritoActual = [];
    //carrito.push(productAdded);
    //console.log("carrito actual", carrito);
    //let carritoActualString = aString (carrito);
    // console.log("carrito actual", carritoActualString);
    //setSessionStorage(cartStorage, carritoActualString);

    //console.log("session storage", sessionStorage);
    

    //Actualizar el carrito en el HTML

    mostrarCarrito (); //--> carrito.js
    
    //$('#carrito').html("hola");
}

/*if (carrito.length!=0){
    for (const producto of carrito) {
        console.log(carrito.id);
}
}*/

//carritoHTML(carrito);

