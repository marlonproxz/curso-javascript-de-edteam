// console.log('Curso EDteam - Javascript POO')
/* Objetos Literales: un objeto es un tipo de dato */

// const nombre = "Beto Quiroga"
// const edad = 29

/* tipo de datos de la variable */
// console.log(typeof(nombre))
// console.log(typeof(edad))

const alumno = {
    nombres: "Beto Junior",
    apellidos: "Quiroga M.",
    edad: 29,
    hermanos: ["Juan", "Maria", "Pepe"],
    padre: {
        nombre: "Hector L. Quiroga",
        edad: 62
    }
}

/* Los objetos pueden tener atributos que contengan a su vez cualquier tipo de dato como valor 
pueden ser anidados con objetos 
2 maneras de acceder a los atributos de un objeto la notacion . y [] */

// console.log(typeof(alumno))
console.log(alumno)
    // console.log(alumno.nombres)
    // console.log(typeof(alumno.edad))
    // console.log(alumno.padre)
    // console.log(alumno["apellidos"])

// alumno.gereno = "Masculino"
alumno["genero"] = "Masculino"
alumno.edad = 30

console.log(alumno)

/* en los 2 objetos automaticamente ya esta generado el masculino,
porque un objeto al ser una constante ya no sufre modificacion a lo largo del archivo 
sino lo unico que sufre modificacion son sus atributos internos eso es la diferencia
con string number bolean ademas los objetos.
Los objetos si pueden ser modificados pero no su estructura sino solamente sus atributos
internos
*/
/* En el caso de atributos que ya existen cuando el objeto a sido declarado
esto si cambia, en cambio en el caso del genero esta presente en los 2 objetos automaticos,
en cambio la edad si respeta el cambio */
/* a valores que ya fueron seteados o iniciado en el objeto si le cambiamos
el valor entonces el objeto recien pasa a tener el valor luego de la asignacion,
en cambio a valores que no existian en el objeto, el objeto al ser una constante
siempre mantiene ese asignacion nueva a lo largo de su vida entre constante    */