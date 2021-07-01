//Constructor de productos como objetos literales

class ProductsInCart {

    constructor (id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
      
    }

};

//si hay stock del producto y ademas cumple:
const agregarProducto = (pos) => {

    carrito.push(new ProductsInCart (productos[pos].id, productos[pos].nombre, productos[pos].precio, 1));
};
