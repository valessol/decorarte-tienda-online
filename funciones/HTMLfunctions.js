//Mostrar productos en el HTML

const productosHTML = (product) => `<div class="galeriaItems">
<div class="card text-center galeriaItemCard">
    <img src=${"./img/img-" + product.id + ".png"} class="card-img-top galeriaFondo" alt="${product.categoria + product.nombre}">
    <a href="#"></a>
    <div class="card-body galeriaCard">
        <h5 class="card-title galeriaTitulo">${product.nombre}</h5>
        <p class="">Cantidad: ${product.stock}</p>
        <p class="galeriaPrecio">$ ${product.precio}</p>
        <div class="card-btn button">
            <a href="#" class="btn linkButton" id="${"btn-" + product.id}" data-bs-toggle="modal-body" data-bs-target="#carritoModal" onclick = "agregarAlCarrito(${product.id})">Añadir al carrito</a>
            <div id="refreshStock-${product.id}">0</div>
        </div>
    </div>
</div>
</div>`


//Mostrar productos del carrito
const carritoHTML = (prod) => {
    // `<div class="col-9">
    //     <p>${prod.nombre}</p>
    //     <p>CANT.:${prod.cantidad}</p>
    // </div>
    // <div class="col-3">
    //     <p>$ ${prod.precio}</p>
    // </div><hr>`



    $('#carritoNombre').html(`${prod.nombre}`);
    $('#carritoCantidad').html(`CANT.:${prod.cantidad}`);
    $('#carritoPrecio').html(`$ ${prod.precio}`);
}

// const mostrarProdenCarrrito = () {
//     let productosAMostrar = [];
//     $.each(carrito, function(key, product){
//         productosAMostrar.push(carritoHTML(product));
//     });
//     console.log(productosAMostrar);

// }