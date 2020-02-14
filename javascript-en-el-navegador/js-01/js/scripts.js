// document.doctype
// document.title
// document.charset
// document.scripts
// document.scripts[0]
// document.styleSheets
// document.links
// document.images
// document.forms
/* Se usa cuando uno necesita capturar las eleccion del usuario para algun motivo en particular  */
// document.getSelection().anchorNode.data
// document.getSelection().toString()

/* Seleccionar nodos */
/* Con ID */
const title = document.getElementById('title')
    //title.style.background = 'yellow'

/* Con selectores de CSS */
const title2 = document.querySelector('#title')
console.log(title2)

const listItems = document.querySelectorAll('ul li')
console.log(listItems[0])

const secondItem = document.querySelector('ul li:nth-child(3)')
console.log(secondItem)

const list = document.getElementById('list')
console.log(list.querySelectorAll('li:last-child')[0])

/* Colecciones */
// const nodeList = document.querySelectorAll('li')
// const elementList = document.getElementsByTagName('li')

// const lists = document.querySelector('ul')

// console.log(nodeList) //lista de nodos puede ser comentario, atributo, etc
// console.log(elementList) //este una lista de elementos
// console.log(lists)

/* diferencias entre nodeList: es una lista de nodos que puede tener atributo, comentario, texto o elemento  y elementList: es una lista de elementos (HTMLCollection)*/
// const nodeList = document.querySelectorAll('li') //no es un array
/* convertir de nodeList a un array real */
// const nodeList = [...document.querySelectorAll('li')] //esto no es recomendable
// const nodeList = Array.from(document.querySelectorAll('li')) //Array es prototipo

//const elementList = document.getElementsByTagName('li')

/* el map funciona con array */
// nodeList.map(el => el.style.background = 'yellow')

// nodeList.map(el => {
//     if (el.textContent.trim().toUpperCase() === 'OBJECT') {
//         el.remove()
//     }
// })

const nodeList = document.querySelectorAll('li')

for (let el of nodeList) {
    if (el.textContent.trim().toUpperCase() === 'OBJECT') {
        el.remove()
    }
}
// console.log(nodeList)
//console.log(elementList)