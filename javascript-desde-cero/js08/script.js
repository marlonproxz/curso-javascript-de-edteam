/* Funciones */
// function saludar(persona, sexo) {
//     let saludo = sexo === 'm' ?
//         'Bienvenido' :
//         'Bienvenida'
//     return `${saludo} a EDteam, ${persona}`
// }

/* funciones de flecha */
const saludar = (persona, sexo) => {
    let saludo = sexo === 'm' ?
        'Bienvenido' :
        'Bienvenida'
    return `${saludo} a EDteam, ${persona}`
}
console.log(saludar('Beto', 'm'))
console.log(saludar('Gisela', 'f'))

const sumar = (a, b) => a + b

// function sumar(a, b) {
//     return a + b
// }

console.log(sumar(1, 4))

/* parametros rest */
const sumarTodos = (...numeros) => {
    // console.log(numeros)
    let resultado = 0
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i]
    }
    return resultado
}

console.log(sumarTodos(1, 2, 3, 4, 5, 6, 7))

const c = console.log
    // const multiplicar = (a, b) => a * b
    // c(multiplicar(3, 4))

// let edad = multiplicar(5, 4)
// c(edad)

// function sumatoria(x) {
//     return function(y) {
//         return x + y
//     }
// }

// const sumatoria = x => y => x + y
// c(sumatoria(5)(2))

// const doSomething = x => y => x * y

// const a = doSomething(2)(2) // 4
// const b = doSomething(3) // y => x * y
// c(doSomething(a)(b(3))) // doSomething(4)(9) = 36

/* Tipos de funciones */

/* funciones no puras */
// let a = 'Hola'
// const saludo = persona => {
//     a = a + ' ' + persona
//     return a
// }
// c(saludo('Marlon'))
// c(a)

/* funcion pura: no causa un efecto secundario y siempre se mantiene su valor*/
// let a = 'Hola'
// const saludo = (saludo, persona) => `${saludo} ${persona}`

// c(saludo(a, 'Marlon'))
// c(a)

/* funciones autoejecutadas autoinvocadas */
// let a = 'Hola'
// const saludo = ((saludo, persona) => `${saludo} ${persona}`)(a, 'Marlon')
// c(saludo)
// c(a)

/* funciones nombradas y anonimas */
// let a = 'Hola'
// const saludo = (saludo, persona) => `${saludo} ${persona}`

// setTimeout(() => {
//     alert(saludo(a, 'marlon'))
// }, 1000);

/* SCOPE */

// {

//     let profesor = 'Alexys'

//     {
//         c(profesor)
//     }

// }

// c(profesor)

/* Closures */
// function sumar2(x) {
//     return function(y) {
//         return x + y
//     }
// }
// c(sumar2(2)(3))

function aumentar() {
    let numero = 0
    return function() {
        numero++
        c(numero)
    }
}

aumentar()()
aumentar()()
aumentar()()
aumentar()()
aumentar()()
aumentar()()

const incrementar = aumentar()
incrementar()
incrementar()
incrementar()
incrementar()
incrementar()
incrementar()

/* This : solo busca dentro del objeto*/
let edad = 10
let user = {
    nombre: 'Alexys',
    edad: 54,
    getEdad() {
        c(this.edad)
    }
}

user.getEdad() // 54


let user2 = {
    nombre: 'Alexys',
    edad: 54,
    getEdad() {
        c(edad)
    }
}
user2.getEdad() //10