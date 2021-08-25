//window.onload = visualizarCarrito(); //--> load.js

const viewCart = () => {
    const cartContainer = document.querySelector(".visualizarCarrito")
    cartContainer.classList.toggle("display-block")
    cartContainer.classList.toggle("view-cart")

    const bodyGrid = document.querySelector("#productsBody")
    bodyGrid.classList.toggle("productsBody")
  //console.log(cartContainer);
};

const cartBtn = document.querySelector("#cart-btn");
cartBtn.addEventListener("click", viewCart);
