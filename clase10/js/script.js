
//TIPOS DE DATOS

//TIPOS DE DATOS PRIMITIVOS

//Boolean : true : 1 / false : 0

//Number : entero, ejemplos: 2.3, 2, 0, 1, -2

//Strings (cadenas de texto): "hola", 'hola', `hola`


//Otros tipos de datos

//NaN : Not a Number (es un tipo de dato Number)

//undefined: Indefinido

//Null: nulo


/* var / let / const */

//Operadores 

//= : Es el operador asignacion

//+ : Para strings (o strings con numeros) es concatenar / para numbers es sumar

// ES6+ = js moderno (actual) NO se usa var
var meGustaJugar = true


//Variables
let numeroFavorito = 455
let nada 
let score = 0

//aumentamos el score en 1
score = score + 1
score += 5 // score = score + 5
score++ //score = score + 1

//console.log() se usa para debbugear
console.log(score)



// CONSTANTES
const pi = 3.14

//NO puedo no asignarles un valor en su declaracion 
//const random ESTO ESTA MAL

const random = ""




//Funcion alert()
/* alert("matias " +  "gimenez " + (9 + 10)) */

//FUNCIONES NATIVAS DE JS

//alert("hola") : Recibe un dato y lo muestra por ventana de alerta

//prompt("hola " + 9) : Recibe un dato por y nos abre una ventana  con un input

/* let valorIngresado = prompt("hola " + 9) */ //devuelve/retorna el valor que ingrese el usuario


//console.log() : recibe un dato y lo muestra por consola

// para transformar strings en numeros 

//  parseInt() o parseFloat() : recibe un dato, si el dato string es un numero Ejemplo: "3" me retorna/devuelve un numero (3). 

//Si el dato es string texto, ejemplo: "hola" me va a retornar un NaN


/* let nombre = prompt("ingresa tu nombre")
let apellido = prompt("ingresa tu apellido")
let saludo =  nombre + " " + apellido
alert( saludo ) */

//Javascript es Case Sentive distingue entre mayusculas y minusculas

/* let saludar = "hola"
 */
//es distinto de 

/* let saludar = "Hola" */