// const usuario1 = {
//     nombres: "Beto Junior",
//     apellidos: "Quiroga M.",
//     edad: 29,
//     correo: "beto@ed.team",
//     activo: true,
//     presentarse() {
//         console.log(`Hola mi nombre es ${this.nombres} ${this.apellidos} y tengo ${this.edad} años.`)
//     }
// }

// const usuario2 = {
//     nombres: "Alexys",
//     apellidos: "Lozada",
//     edad: 40,
//     correo: "alexys@ed.team",
//     activo: true,
//     presentarse() {
//         console.log(`Hola mi nombre es ${this.nombres} ${this.apellidos} y tengo ${this.edad} años.`)
//     }
// }

// const usuario3 = {
//     nombres: "Alvaro",
//     apellidos: "Felipe",
//     edad: 40,
//     correo: "alvaro@ed.team",
//     activo: true,
//     presentarse() {
//         console.log(`Hola mi nombre es ${this.nombres} ${this.apellidos} y tengo ${this.edad} años.`)
//     }
// }

// /* Este molde es distinto a los demas */
// const usuario4 = {
//     nombre: "Manuel",
//     apellido: "Rodriguez",
//     presentarse() {
//         console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
//     }
// }

// console.log(usuario1)
// console.log(usuario2)
// console.log(usuario3)

/* FUNCIÓN CONSTRUCTORAS 
esta funcion ayuda en que uno no se puede salir de ese molde, esta funcion constructiva
me esta determinando, me esta restringiendo que atributos va utilizar para crear
ese objeto   
*/

function Usuario(nombres, apellidos, correo, activo) {
    this.nombres = nombres,
        this.apellidos = apellidos,
        this.correo = correo,
        this.activo = activo
}

const beto = new Usuario("Beto", "Quiroga", "beto@ed.team", true)
const alexys = new Usuario("Alexys", "Lozada", "alexys@ed.team", true)

console.log(beto)
console.log(alexys)