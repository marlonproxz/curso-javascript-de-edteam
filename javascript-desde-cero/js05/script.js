let number = 5
    /* Especifica el numero de decimales */

console.log(number.toFixed(2))

let number2 = 9078.8736218635

console.log(number2.toFixed(3))

let texto = '20'

/* Convertir texto a numero entero */
let textNumber = parseInt(texto, 10)

console.log(textNumber)

/* Convertir texto a numero decimal */

let texto2 = '20.12'

console.log(parseFloat(texto2))
console.log(parseInt(texto2, 10))

Math.floor(20.7) //20
Math.ceil(20.1) //21
Math.round(20.6) //21
Math.random() // randon de 0 a 1 con decimales
Math.ceil(Math.random() * 10) // randon de 1 a 10

/* PROPIEDADES length: cuandos caracteres tiene */
let profesor = 'Alexis'
console.log(profesor.length)

/* METODOS 
    Sin parametros
    .trim()
*/
let saludo = '   hola '
console.log(saludo.trim())

/* .toUpperCase : convierte en mayuscula*/
let saludo2 = 'hola'
console.log(saludo2.toUpperCase())

/* .toLowerCase : convierte en minuscula*/
let saludo3 = 'HOLA'
console.log(saludo2.toLowerCase())