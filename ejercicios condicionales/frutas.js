var frutas = "1-Banano= 200. 2-Manzana= 1500. 3-Naranja 1000. 4-Mango= 2000. 5-Fresas 3000. 6-melon= 4000"

alert("seleccione una fruta:" + frutas)

var fSeleccionada = prompt("numero de la fruta que desea (1 a 6)")
var cantidad = prompt("cantidad de frutas que desea")

var nombre
var valor

if (fSeleccionada == "1"){
    valor = 200;
    nombre = "banano. "
}else if (fSeleccionada == "2"){
    valor = 1500;
    nombre = "Manzana. "
}else if (fSeleccionada == "3"){
    valor = 1000;
    nombre = "Naranja. "
}else if (fSeleccionada == "4"){
    valor = 2000;
    nombre = "mango. "
}else if (fSeleccionada == "5"){
    valor = 3000;
    nombre = "fresas. "
}else if (fSeleccionada == "6"){
    valor = 4000;
    nombre = "melon. "
}else{
    alert("la fruta seleccionada no es valida, seleccione una fruta del 1 al 6")
}

var total = cantidad*valor

alert("fruta seleccionada: " + nombre + "valor por unidad: $" + valor + "valor total: $" + total)