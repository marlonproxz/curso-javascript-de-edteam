/* Clases
La POO nos ayuda a escribir clases que son esos moldes a partir de esas
clases crear los objetos que uno necesita
*/

/* Utilizando la nomenclatura de clases */
class Usuario {
    /* el metodo constructor nos permite definir los atributos que van a tener ese objeto   */
    constructor(nombres, apellidos, correo, activo) {
        this.nombres = nombres,
            this.apellidos = apellidos,
            this.correo = correo,
            this.activo = activo
    }
    presentarse() {
        return `Hola, soy ${this.nombres} y mi correo es: ${this.correo}`
    }

    /* Metodos getters y los setters 
    se usa para buenas practicas es un standar
       GET -> Obtener
       SET -> Dar
    */
    getNombres() {
        return this.nombres
    }

    getApellidos() {
        return this.apellidos
    }

    setApellido(nuevosApellidos) {
        this.apellidos = nuevosApellidos
    }

}

/* Instanciar un objeto
las instancias son objetos que fueron declarado a partir de una clase
*/
const beto = new Usuario("Beto", "Quiroga", "beto@ed.team", true)
const alexys = new Usuario("Alexys", "Lozada", "alexys@ed.team", true)

// console.log(beto)
// console.log(alexys)

// beto.apellidos = "Quiroga M."
beto.setApellido("Quiroga Muñoz")

console.log(beto.presentarse())

console.log(`${beto.getNombres()} ${beto.getApellidos()}`)