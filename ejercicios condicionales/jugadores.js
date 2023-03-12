var estatura = parseFloat(prompt("ingrese estatura"))
var velocidad = parseFloat(prompt("ingrese velocidad"))
var edad = parseInt(prompt("edad"))

var requisitos

if(estatura >= 1.80){
    if(velocidad >= 30) {
        if(edad < 18){
            console.log("puede ingresar a la division menor")
        }else{
            console.log("puede ingreasr al equipo profesional")
        }
    }else{
        console.log("no cumple con los requisitos")
    }
}else{
    console.log("no cumple con los requisitos")
}