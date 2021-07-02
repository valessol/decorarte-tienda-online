//Constructor de productos como objetos literales

class ProductsInCart {

    constructor (id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad= 1;
      
    }

    // cantidadAgregada () {
    //     let count = 0;
    //     setInterval(function(){
    //         $(`#refreshStock-${this.id}`).html(count)}, 1000
    //     );

    //     $(`#btn-${this.id}`).click(function(){
    //         this.cantidad = count += 1;
    //     });

    //     return this.cantidad;
    // };
};
