//Mostrar ventana carrito
const viewCart = () => {
  const cartContainer = document.querySelector(".visualizarCarrito");
  cartContainer.classList.toggle("display-block");
  cartContainer.classList.toggle("view-cart");

  const closeBtn = document.querySelector('#cross')
  closeBtn.classList.toggle('display-block')
};

//Mostrar productos del carrito o no
const carritoHTML = () => {
  $('#empty').css("display", "none");
  $('#cart-titles').css("display", "block");
  $('#verCarrito').show();         
}

//Visualizar los prodcutos en la ventana del carrito
const verCarrito = (prod) =>
  `<div class="row">
  <div class="col-6">
      <p class="cardTitle">${prod.nombre}</p>
  </div>
  <div class="col-3">
      <p>${prod.cantidad}</p>
  </div>  
  <div class="col-3">
      <p>$ ${prod.precio}</p>
  </div> 
  </div>  
  <hr>`

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

//Visualizar los productos del carrito
const productsCart = () => {
  let carritoString = getSessionStorage(cartStorage);
  let carrito = aObj(carritoString);

  if (carrito === null) return;
  carritoHTML();
  const cartItems = [];
  carrito.forEach((element) => cartItems.push(verCarrito(element)));

  $('#carrito').html(cartItems);  
    sumarCarrito();
};



//Eventos del carrito
const cartBtn = document.querySelector("#cart-btn");
cartBtn.addEventListener("click", viewCart);
cartBtn.addEventListener("click", productsCart);

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", viewCart);
