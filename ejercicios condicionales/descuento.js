var cantidad = parseInt(prompt("cantidad de escritorios"))
var precio = 100000

if (cantidad < 5) {
    console.log("10% de descuento")
    precio = precio*cantidad - (precio * 0.1)*cantidad
    console.log("precio con descuento " + precio)
} else {
    if (cantidad >= 5) {
        if (cantidad < 10)
            console.log("20% de descuento")
        precio = precio*cantidad - (precio * 0.2)*cantidad
        console.log("precio con descuento " + precio)
    } else {
        if (cantidad >= 10) {
            console.log("40% de descuento")
            precio = precio*cantidad - (precio * 0.4)*cantidad
            console.log("precio con descuento " + precio)
        }
    }
}
