//Cargar el JSON 
const baseDeDatosProductos = () => {
    $.getJSON( "../Datos/productos.json", function(products) { 
        let baseDeDatosString = aString(products); //-->jsonManager.js
        setLocalStorage (productStorage, baseDeDatosString); //--> storage.js
    });
}


//cargar los productos al HTML desde el local Storage
const HTMLProducts = () => {
    $('.galeriaProductos').html("");
    let productsString = getLocalStorage(productStorage); //--> storage.js
    let productsJSON = aObj(productsString); //--> jsonManager.js
    let productCards = [];
    $.each( productsJSON, function( key, product ) {
        productCards.push(productosHTML(product)); //--> HTMLfunctions.js
    });

    //Renderizo
    $('.galeriaProductos').html(productCards);
    $.each( productsJSON, function( key, product ) {
        if (product.stock == 0) 
        $(`#btn-${product.id}`).addClass("disabled");
    });
}
//Ejecuto cada vez que el sessionStorage esté vacío
const startLoad = () => {
    baseDeDatosProductos();
    HTMLProducts();
}

//Si ya hay productos en el carrito, entonces renderizo esto al volver al index
const hayProductos = () => {
    HTMLProducts ();
    let carritoString = getSessionStorage (cartStorage);
    let carrito = aObj (carritoString);

    if(carrito === null) carrito =[];
    carritoHTML (carrito);
}

const sumarCarrito = () => {
    let carritoString = getSessionStorage (cartStorage);
    let carrito = aObj (carritoString);
    let subtotal = 0;
    let IVA = 0;
    let total = 0;

    carrito.forEach(element => {
        subtotal += (element.precio * element.cantidad);
    })
    IVA = parseFloat((subtotal * 0.21).toFixed(2));
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

    $('#carritoActual').html(carritoCards);  
    sumarCarrito();
}