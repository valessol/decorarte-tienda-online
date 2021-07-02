//Cargar el JSON en la base de datos que será el local storage
const baseDeDatosProductos = () => {
    //localStorage.clear ();
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
            if (product.stock == 0) 
            $(`#btn-${product.id}`).addClass("disabled");
        });
        //console.log("despues", productCards);
        //console.log("despues", productos);

    //Los muestro en el html
    $('.galeriaProductos').html(productCards);
    $.each( productsJSON, function( key, product ) {
        if (product.stock == 0) 
        $(`#btn-${product.id}`).addClass("disabled");
    });
}



const startLoad = () => {
    baseDeDatosProductos();
    HTMLProducts();
}

const hayProductos = () => {
    HTMLProducts ();
    let carritoString = getSessionStorage (cartStorage);
    let carrito = aObj (carritoString);
    $('#empty').css("display", "none");
    $('#verCarrito').show();
    $('#carrito').html(`<p>Productos añadidos: ${carrito.length}</p>
        `); 
}

const sumarCarrito = () => {
    let carritoString = getSessionStorage (cartStorage);
    let carrito = aObj (carritoString);
    let subtotal = 0;
    let IVA = 0;
    let total = 0;
        carrito.forEach(element => {
            subtotal += element.precio;
        })
    IVA = subtotal * 0.21;
    total = subtotal + IVA;
        
    $('.subtotalCarrito').html(`<p class="col-md-6 subtotalCarrito">$ ${subtotal}</p>`); 
    $('.ivaCarrito').html(`<p class="col-md-6 ivaCarrito">$ ${IVA}</p>`); 
    $('.totalCarrito').html(`<p class="col-md-6 totalCarrito">$ ${total}</p>`); 
}

const visualizarCarrito = () => {
    let carritoString = getSessionStorage (cartStorage);
    let carrito = aObj (carritoString);
    let carritoCards = [];
        carrito.forEach(element => {
            carritoCards.push (verCarrito (element)); //--> HTMLfunctions.js
        })
        //console.log("carritoCards.length", carritoCards.length, "cards", carritoCards);
        $('#carritoActual').html(carritoCards);  
    sumarCarrito();
}