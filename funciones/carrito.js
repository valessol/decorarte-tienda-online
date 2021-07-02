//Ocultar/Mostrar Carrito

/*const mostrarCarrito = () => {
    if(carrito.length==0) {
        //$('#carritoDeCompras').css();
        $('#galeria').removeClass("col-md-8");
        $('#galeria').addClass("col-md-12");   
    }else {
        $('#carritoDeCompras').show();
    }
}*/

//Añadir al carrito
const agregarAlCarrito = (e) => {

    //Acceder a la base de datos del local storage
    let productsString = getLocalStorage(productStorage);

    //Convertirlo a JSON
    let productsJSON = aObj(productsString);

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
    console.log("position", prodPosition, "carrito.lenght", carrito.length, carrito);
        
    //Mostrar carrito
    if(carrito.length != 0) {
        $('#empty').css("display", "none");
        let carritoCards = [];
        carrito.forEach(element => {
            carritoCards.push (carritoHTML (element));
        })
        console.log("carritoCards.length", carritoCards.length, "cards", carritoCards);
        $('#carrito').html(carritoCards);        
    };


    //Actualizar la cantidad de productos en el local storage (sobreescribir variable) 
    productsString = aString(productsJSON);
    setLocalStorage(productStorage, productsString);

    //Actualizar la cantidad de productos en pantalla
    HTMLProducts();
    console.log("stock actual", productsJSON[prodPosition].stock );
    productsJSON.forEach(element => {
        if (element.stock == 0) 
        $(`#btn-${element.id}`).addClass("disabled");
        });
    
    //mostrarCarrito (); //--> carrito.js
    
    //$('#carrito').html("hola");
}

/*if (carrito.length!=0){
    for (const producto of carrito) {
        console.log(carrito.id);
}
}*/

//carritoHTML(carrito);

