/* Objeto history: este objeto contiene el historial de la pestaña en la que estas no de todo el browser,
no es tanto que te devuelva un objeto con todas las url sino te detecta el atras y el adelante */
console.log(history)
    /* length: Cantidad de elementos, incluye la página actual */

/* METODOS 
    back()
    forward()
    go(posicion)
    -1 back, 1 forward    
*/

/* Objeto navigator: los navegadores trabajan sobre los desarrollos de otros navegadores por el tema de opensource es completamente normal    */
console.log(navigator)
    /* lo que es necesario detectar son stwichusr */
    /* Detectar caracteristicas: 
    CSS 
        @supports
    Javascript
        operador in
        ejm: 'Promize' in window  true
    Modernizr 
    https://workflowy.com/s/TvW.vmWEPfZLPQ
    */

/* TIMERS : permiten ejecutar acciones despues de un tiempo o acciones que se repiten periodicamente 
tenemos 2 times:
    setTimeout(callback.ms) : ejecuta lo que esta en el callback despues de la cantidad de milisegundos
    setInterval(callback.ms) : ejecuta una funcion varias veces con un intervalo indicado en el segundo parametro
*/

// setTimeout(() => {
//     alert('hola mundo')
// }, 2000)

// let contador = 0
// const saludarMuchasVeces = setInterval(() => {
//     contador++
//     if (contador > 1) {
//         console.log(`Hola ${contador} veces`)
//     } else {
//         console.log(`Hola ${contador} vez`)
//     }

//     if (contador === 20) {
//         clearInterval(saludarMuchasVeces)
//     }
// }, 1000)

console.log(new Date().toLocaleTimeString()) // nos devuelve horas, minutos y segundos

setInterval(() => {
    const clock = document.getElementById('clock')
    if (clock) clock.textContent = new Date().toLocaleTimeString()
}, 1000)