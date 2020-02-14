/* Recorrer y transformar el DOM 
DOM Traversing: se refiere a recorrer el DOM
*Hijos:
    -childNodes: nos devuelven todos los nodos hijos
    -children: nos devuelve solo elementos
    -firstChild: devuelve un nodo, que podria ser un elemento o texto
*/

const parent = document.getElementById('parent')

console.log(parent.children)
console.log(parent.querySelectorAll('div'))
console.log(parent.childNodes)
console.log(parent.firstChild)
    /* si quieres obtener el primer hijo tendias que utilizar
    firstElementChild */
console.log(parent.firstElementChild)
    /* si quieres obtener el ultimo hijo tendias que utilizar
        lastElementChild */
console.log(parent.lastElementChild)
console.log(parent.lastChild) // devuelve text porque hay un salto de linea, sino hubiera devolveria el ultimo div
    /* hasChildNodes: es un metodo que devulve true si el emento seleccionado contiene hijos */
console.log(parent.hasChildNodes())

/*
Hemanos:
    nextSibling
    nextElementSibling
    previousSibling
    previousElementSibling
*/
const grandson = document.getElementById('grandson-2')

console.log(grandson.nextElementSibling) // devuelve el siguiente elemento
console.log(grandson.previousElementSibling) // devuelve el anterios elemento
console.log(grandson.nextSibling) // devulve text porque hay un salto de linea
console.log(grandson.previousSibling) //devulve text porque hay un salto de linea

/*
Padre:
    parentNode 
    parentElement*/
console.log(grandson.parentElement) // nos devulve el elemento padre
console.log(grandson.parentNode) // nos devulve el nodo que sea padre

console.log(grandson.parentElement.parentElement) // si se quiere subir un nivel mas