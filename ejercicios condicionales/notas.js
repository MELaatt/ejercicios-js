var mat = prompt("ingrese nota de matematicas")
var esp = prompt("ingrese nota de español")
var soc = prompt("ingrese nota de sociales")

mat = parseInt(mat); esp = parseInt(esp); esp = parseInt(esp);

var promedio = (mat + esp + soc)/3

if (promedio = 10){
    console.log("excelente")
}else{
    if(promedio >= 7){
        if(promedio < 10){
            console.log("bueno")
        }
    }else{
        console.log("insuficiente")
    }
}