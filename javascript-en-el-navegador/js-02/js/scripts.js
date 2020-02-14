// const title = document.getElementById('title2')

// if (title) {
//     title.style.background = 'yellow'
// }

// console.log('Hola Mundo')

const title = document.querySelector('h1')

// title.setAttribute('id', 'title')
title.id = 'title'

// añadir nuevos atributos
title.classList.add('main-title', 'title-front-page')

// console.log(title.classList)

console.log(title.textContent) //solo te devuelve texto, no reconoce el html
console.log(title.innerHTML) //te devuelve html, reconoce html

/* DIFERENCIA entre textContent e innerHTML, innerHTML no es un standar del DOM es un invento de internet explorer   */

console.log(title.outerHTML) // se obtiene todo el elemento

// title.textContent = 'Hola mamá, estoy en clase'
title.innerHTML = `Hola mamá, <em>estoy en clase</em>`


/* Crear elementos */

const title2 = document.querySelector('h1')

const profesor = document.createElement('p')
profesor.textContent = 'Alexys Lozada'
profesor.classList.add('teacher')
    // profesor.id = 'teacher'

/* esto hace que el ultimo hijo de body aparesca */
// document.body.appendChild(profesor)

const profesorContainer = document.getElementById('teacher')

if (profesorContainer && profesorContainer.querySelector('span')) {
    profesorContainer.querySelector('span').appendChild(profesor)
}