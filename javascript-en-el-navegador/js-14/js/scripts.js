/* JQUERY LIKE 
before()    hermano anterior
after()     hermano siguiente
prepend()   primer hijo
append()    ultimo hijo
child.replaceWith(newChild)
*/

const parent = document.getElementById('parent')
const ad = document.createElement('div')
ad.id = 'EDteam'
ad.textContent = 'Publicidad'

// parent.append(ad)
parent.children[0].replaceWith(ad)

/* Clonar y Eliminar elementos 
desde la consola
$0.remove() :   se elimina del DOM
const newBuyBlock = $0.cloneNode(true) // copiar con todos los hijos
en memnoria eh guardado una copia de ese elemento
newBuyBlock
$0.after(newBuyBlock)
*/