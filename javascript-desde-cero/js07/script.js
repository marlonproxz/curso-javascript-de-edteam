// let age = parseInt(prompt('Dime tu edad'), 10)

// if (age) {
//     if (age >= 18) {
//         alert('Eres mayor de edad')
//     } else {
//         alert('Te faltan años')
//     }
// } else {
//     age = parseInt(prompt('Tu edad debe ser un número'), 10)
// }

//let message = age >= 18 ? 'Eres mayor de edad' : 'Te faltan años'

//alert(message)

// let answer = parseInt(prompt('Escoge un número del 1 al 3'), 10)

// switch (answer) {
//     case 1:
//         alert("Eres tímido")
//         break
//     case 2:
//         alert("Eres extrovertido")
//         break
//     case 3:
//         alert("Eres muy feliz")
//         break

//     default:
//         alert("Por favor escribe un numero del 1 al 3")
//         break;
// }

// let answer = prompt(`La capital de Colombia es:
// a. Bogotá
// b. Lima
// c. Madrid
// d. México
// e.La Paz
// `).toUpperCase().trim()

// switch (answer) {
//     case 'A':
//         alert('¡Correcto!')
//         break;
//     case 'B':
//         alert('Te equivocastes. Lima es la capital de Peru')
//         break;

//     default:
//         alert('No has escrito una opcion valida')
//         break;
// }


// for (let i = 0; i <= 100; i++) {
//     if (i % 7 === 0) continue
//     console.log(i)
// }

// let n = 0
// for (let i = 1; i <= 100; i++) {
//     if (i % 8 === 0) {
//         console.log(i)
//         n++
//     }
//     // console.log(n)
//     if (n >= 7) break
// }

// let i = 0
// while (i <= 10) {
//     console.log(i)
//     i++
// }

// let i = 10
// while (i--) {
//     console.log(i)
// }

// let i = 0
// do {
//     console.log(i)
// } while (i > 0)

let password = 'EDteam'
let pass
do {
    pass = prompt('Ingrese la contraseña')

} while (pass !== password)