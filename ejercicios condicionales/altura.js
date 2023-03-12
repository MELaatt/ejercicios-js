var altura = prompt("ingresa tu altura en centimetros")

altura = parseInt(altura)

if (altura <= 150){
    console.log("persona de altura baja")
}else{
    if(altura >= 151){
        if(altura <=170){
            console.log("persona de altura media")
        }else{
            if(altura >= 171){
                console.log("persona alta")
            }
        }
    }
}