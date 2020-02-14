/* Insertar elementos 
    appendChild()    
*/
// const parent = document.getElementById('parent')

// const newElement = document.createElement('div')
// newElement.textContent = 'Soy un nuevo elemento'

// parent.appendChild(newElement)
/* insertBefore */
// parent.insertBefore(nuevo elemento, nieto3)

// const childs = Array.from(parent.children)
// const childWithChilds = childs.filter(child => child.children.length > 0)[0]
//     /* de esta manera se detecta que elemento tienen hijos */
// console.log(childWithChilds)

// const childs = Array.from(parent.querySelectorAll('div'))
//     /* de esta manera se detecta que elemento tienen hijos */
// console.log(childs.filter(child => child.textContent.trim() === 'Nieto 3')[0])
//     // console.log(childs)

const parent = document.getElementById('parent'),
    childs = Array.from(parent.children),
    childParent = childs.filter(child => child.children.length > 0)[0],
    grandSons = Array.from(childParent.children),
    grandSon3 = grandSons.filter(child => child.textContent.trim() === 'Nieto 3')[0]

const newElement = document.createElement('h2')
newElement.textContent = 'Soy un nuevo elemento'

childParent.insertBefore(newElement, grandSon3)