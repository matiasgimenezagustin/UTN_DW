


// a == b // a === b

/* function devolverMayor (a, b){
    if(a > b){
        return a
    }else if( a === b){
        return "son iguales"
    }
    else{
        return b
    }
} */

/* const sumar = (a, b) => a + b */

//Pedir dos numeros al usuario y sumarlos

/* 
let result = sumar(parseFloat(prompt("ingrese un numero")), parseFloat(prompt("ingrese un numero")))

console.log(result) */

//ACTIVIDAD 1
/* Calcular el tiempo de espera promedio en relación a la cantidad de turnos registrados. */

const calcularTiempoPromedio = () =>{
    return turnos * tiempoPromedio
}


//recibe un numero, si es menor a 60 devueve numero + min, si es mayor a 60 devuelve numero + "hr", que pasa cuando es mas de una hora
const darFormatoDeHora = (tiempo) =>{
    if( tiempo < 60){
        return tiempo + "min"
    }else if (tiempo >= 60){
        return parseInt(tiempo/60) + ":" + (tiempo%60) + "hr"
    }
}

let tiempoPromedio = 15
let turnos = 0


const sacarTurno = () => {
    let nombre = prompt("ingrese un nombre")
    let quiereSacarTurno = prompt("desea sacar turno")
    if(quiereSacarTurno == "si" || quiereSacarTurno == "SI" || quiereSacarTurno == "Si"){
        alert(nombre + " tiene turno para dentro de " + darFormatoDeHora(calcularTiempoPromedio()))
        turnos++
    }else{
        alert("que tenga un buen dia!")
    }
}




