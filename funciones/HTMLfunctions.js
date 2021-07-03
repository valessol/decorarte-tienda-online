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
const carritoHTML = (p) => {
        $('#empty').css("display", "none");
        $('#verCarrito').show();
        $('#carrito').html(`<p>Productos añadidos: ${p.length}</p>`);    
}
    

//Visualizar los prodcutos en la página del carrito
const verCarrito = (prod) =>
    `<div class="col-6">
        <p class="cardTitle">${prod.nombre}</p>
    </div>
    <div class="col-3">
        <p>${prod.cantidad}</p>
    </div>  
    <div class="col-3">
        <p>$ ${prod.precio}</p>
    </div>  
    <hr>`