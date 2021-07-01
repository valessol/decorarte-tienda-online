const agregarAlCarrito = (e) => {
    
    //Obtener la posición del producto y guardar en el session storage
    position = productos.findIndex((p) => p.id == e);
    console.log("posición del producto añadido", position);

    if (productos[position].stock > 0) {
        let cart = [];
        cart.push(new ProductsInCart (productos[pos].id, productos[pos].nombre, productos[pos].precio, 1));
        setSessionStorage(cartStorage, aString(cart));
        //Actualizar la cantidad de productos
        productos[position].stock -= 1;
    }
    
    let productsString = aString(productos);
    setLocalStorage(productStorage, productsString);

    HTMLProducts();
    if(productos[position].stock = 0){
        $(`#btn-${productos[position].id}`).addClass("disabled");
    }
}

//Carrito Actual

mostrarCarrito();