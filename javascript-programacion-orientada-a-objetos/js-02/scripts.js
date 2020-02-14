/* Objetos Literales */

/* podemos construir un objeto apartir de otras variables */

// const nombres = "Beto Jr"
// const apellidos = "Quiroga M."
// const edad = 29
// const padre = {
//     nombre: "Hector L. Quiroga",
//     edad: 62
// }


// const alumno = {
//     nombres: nombres,
//     apellidos: apellidos,
//     edad: edad,
//     padre: padre
// }

// console.log(alumno)

/*
se puede refactorizar y esto resumirlo a mucho mas
si el atributo el nombre del atributo es igual al nombre de la
variable o constante que yo le estoy pasando como valor
yo puedo simplemente reducirlo a esto
mi declaracion de mi objeto esta mucho mas legible sencilla limpio
*/

const nombres = "Beto Jr"
const apellidos = "Quiroga M."
const edad = 29
const padre = {
    nombre: "Hector L. Quiroga",
    edad: 62
}


const alumno = {
    nombres,
    apellidos,
    edad,
    padre
}

console.log(alumno)