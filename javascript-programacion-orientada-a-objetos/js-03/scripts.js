/* Objetos Literales 
Los objetos asi como tienen atributos tienen metodos
METODOS: capacidades o cualidades que pueda hacer un objeto,
pueden recibir parametros */
/* acceder a los atributos de mi mismo objeto seria this desde esta llave hasta esa llave scope o alcance */
const nombres = "Juan"

const alumno = {
    //Atributos del objeto
    nombres: "Beto Junior",
    apellidos: "Quiroga M.",
    edad: 29,
    hermanos: ["Juan", "Maria", "Pepe"],
    padre: {
        nombre: "Hector L. Quiroga",
        edad: 62
    },
    //Metodos del objeto
    presentarse() {
        // console.log(`Hola mi nombre es ${alumno.nombres} ${alumno.apellidos} y tengo ${alumno.edad} años.`)
        console.log(`Hola mi nombre es ${this.nombres} ${this.apellidos} y tengo ${this.edad} años.`)
    },
    whoIsYourFather() {
        console.log(`Mi padre es ${this.padre.nombre}`)
    }
}

alumno.presentarse()
alumno.whoIsYourFather()