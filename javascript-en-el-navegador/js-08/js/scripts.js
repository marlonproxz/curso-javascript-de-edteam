/* Propagación de eventos */

// document.querySelectorAll('div').forEach(el => {
//     el.addEventListener('click', () => {
//         console.log('click')
//     })
// })

// document.querySelectorAll('div').forEach(el => {
//     el.addEventListener('click', e => {
//         console.log(`Hiciste click en el div ${e.target.id}`)
//     })
// })

/* quiero que no se propage el evento que se quede donde esta, ya no se van a elevar los eventos y no te va traer problemas, enque casos podria servir
ejm: tu tienes un click detectando un click de boton pero tambien en el papa tienes otro click para abrir un modal y
cuando le click al boton se ejecuta la accion del boton pero tambien se habre el modal se vuelve un loquerio
porque se ejecuta varias acciones a la vez con un stopPropagation() se resuelve    */

document.querySelectorAll('div').forEach(el => {
    el.addEventListener('click', e => {
        console.log(`Hiciste click en el div ${e.target.id}`)
        e.stopPropagation()
    })
})