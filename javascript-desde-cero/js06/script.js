let answer = prompt('¿Cuál es la capital de Perú?').toUpperCase().trim()
    /* Operador ternario */
let message = answer == 'LIMA' ? '¡Correcto!' : '¡Te equivocaste! La respuesta es Lima'
alert(message)

/* Encontrar caracteres 
indexOf: encuentra caracter de inicio a fin 
*/
let profesor = 'Alexys'
console.log(profesor.indexOf('r'))

let saludo = 'Hola amigos'
console.log(saludo.indexOf('o', saludo.indexOf('o') + 1))

/* lastIndexOf: encuentra caracter de fin a inicio */
console.log(saludo.lastIndexOf('o'))

let url = 'https://ed.team/blog'
console.log(url.includes('blog'))

console.log(url.startsWith('https://ed.team'))

console.log(url.endsWith('/blog'))

/* Manipulacion de strings */

console.log(saludo.replace('amigos', 'EDteam'))
console.log(profesor.split('e'))
console.log(saludo.split(' '))
console.log(saludo.split(' ')[1])
console.log(saludo.split(' ')[0])
console.log(profesor.split(''))
console.log(profesor.split('')[4])
console.log(profesor[4])

/* substring es posicion posicion */
console.log(saludo.substring(2))
console.log(saludo.substring(2, 5))

/* substr es posicion y cantidad de caracteres */
console.log(saludo.substr(2, 5))

console.log(saludo.slice(2, 5))