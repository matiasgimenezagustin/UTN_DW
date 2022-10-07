/* DRY = Dont Repeat Yourself = no te repitas */

const listaDeNumeros = [8, 2, 4, 9, 11, 7]

/* console.log(listaDeNumeros[0])
console.log(listaDeNumeros[1])
console.log(listaDeNumeros[2]) */

/* for(let i = 0; i < listaDeNumeros.length; i++){

    console.log(listaDeNumeros[i])
} */

//for of = es un bucle para recorrer arrays

/* const result = []

for( let numero of listaDeNumeros){
    if(numero < 3){
        console.log( "el numero " + numero + " no es mayor a 3")
    }else{
        result.push(numero)
    }
}
console.log(result) */

//Funciones
/* 
const sumar = (a, b) =>{
    return a + b
}

console.log(sumar(8, 10)) */

//Actividad 1

const result = listaDeNumeros.map( (numero) => {
    if(numero % 2 === 0){
        return numero + " es par"
    }else{
        return numero + " es impar"
    }
})


//Actividad 2

const listaDeNombres = [ "Francisco", "Matias", "Nancy", "Alejandro", "Javier", "Emma", "Juli"]

const nombresCortos = listaDeNombres.filter((nombre) => nombre.length < 7)

const nombresLargos = listaDeNombres.filter((nombre) => nombre.length < 10)

//Actividad 3

// pregunten al usuario 5 nombres y agregenlos a un array
// luego muestren solo los que sean mayores a 7 letras por alerta