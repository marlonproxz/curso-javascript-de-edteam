/* Herencia */
class Usuario {
    constructor(nombres, apellidos, correo, activo) {
        this.nombres = nombres
        this.apellidos = apellidos
        this.correo = correo
        this.activo = activo
    }
    presentarse() {
        return `Hola, soy ${this.nombres} y mi correo es: ${this.correo}`
    }

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

// Herencias
class Profesor extends Usuario {
    constructor(nombres, apellidos, correo, activo, cursosDictados, calificacion) {
        super(nombres, apellidos, correo, activo)
        this.cursosDictados = cursosDictados
        this.calificacion = calificacion
    }
}

class Alumno extends Usuario {
    constructor(nombres, apellidos, correo, activo, cursosTomados) {
        /* crear un objeto que estoy extendiendo super() */
        super(nombres, apellidos, correo, activo)
        this.cursosTomados = cursosTomados
    }
}




const beto = new Alumno("Beto", "Quiroga", "beto@ed.team", true, ["HTML", "Drupal"])
const alexys = new Profesor("Alexys", "Lozada", "alexys@ed.team", true, ["BD", "Java"], 10)

// beto.setApellido("Quiroga Muñoz")

// console.log(`${beto.getNombres()} ${beto.getApellidos()}`)

// console.log(beto)
// console.log(alexys)
console.log(alexys.presentarse())