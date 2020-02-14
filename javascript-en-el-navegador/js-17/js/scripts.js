/* CSSOM : modelo de objeto de css
 */

const title = document.querySelector('h1')
const description = document.querySelector('p')
    // title.style.color = 'red'

/* si la propiedad de css tiene guiones se debe usar Cametcase */
// title.style.backgroundColor = 'yellow'

/* matchMedia() : nos permite evaluar los breakpoint de css */
// if (window.innerWidth > 640) {
//     document.body.style.background = 'green'
// }
/* es valido pero es una vision muy limitada, porque solo puede medir el ancho y alto nada mas,
las mediaQuerys de CSS son mas poderosas, permiten determinar si el dispositivo esta en vertical o horizontal
la proporcion de alto a ancho, la profundidad de pixeles, nos permite poner 2 puntos, o combinar.
matchMedia: nos evalua una mediaQuery de CSS y con matches sabemos si devuelve true la mediaQuery es que se cumplio
y sino es que nose cumplio   */
// const mediumBp = matchMedia('(min-width: 640px) and (orientation: portrait)')
//     // console.log(mediumBp.matches)
//     // if (mediumBp.matches) {
//     //     document.body.style.background = 'red'
//     // }
// const changeColor = () => {
//     if (mediumBp.matches) {
//         document.body.style.background = 'red'
//     } else {
//         document.body.style.background = 'yellow'
//     }
// }

// addEventListener('DOMContentLoaded', changeColor)
// addEventListener('resize', changeColor)

/* getComputedStyle() : te da es todos estilos calculado de un elemento, no es lo mismo un estilo calculado que un estilo declarado
 */
// console.log(getComputedStyle(title).fontSize) //64px
// console.log(getComputedStyle(document.body).fontSize) //32px
console.log(getComputedStyle(document.body).position) //static
console.log(getComputedStyle(document.body).display) //block

/* getBoundingClientRect() : lo que hace es devolver las codernadas(dimensiones,posiciones) del elemento seleccionado,
si tu quieres saber el tamaño real de un elemento se usaria getBoundingClientRect().width 
para saber su tamaño real de una imagen en el navegador $0.naturalWidth, $0.naturalHeight */