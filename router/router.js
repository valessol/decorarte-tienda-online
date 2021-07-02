const routes = [
    { path: "/index", action: "index"},
    { path: "/carrito", action: "carrito"}
];

const router = () => {
    let rutaActual = location.hash.slice(1);
    let rutaFinal = routes.find((p)=> p.path == rutaActual);

    switch (rutaFinal.action) {
        case routes [0].action: 
            $(".hero-title").html("<h1>Productos</h1>"),
            startLoad(); //--> load.js
        break;
        case routes [1].action: 
            $(".hero-title").html("<h1>Carrito de compras</h1>"),
            $.get("./views/carrito.html", function (data) {
                $(".spa").html(data);
            });
        break;
    };
};