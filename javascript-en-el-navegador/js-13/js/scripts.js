/* Insert Adjacent: insertar elementos
coges un elemento y metes un hijo diciendoles una posicion  
    beforebegin: antes que comience el elemento, hermano anterior
    afterbegin: despues que comience, su primer hijo
    beforeend: antes de que acabe, su ultimo hijo
    afterend: despues de que acabe, un hermano siguiente
*/

const parent = document.getElementById('parent')
const ad = document.createElement('div')
ad.id = 'EDteam'
ad.textContent = 'Publicidad'

// parent.insertAdjacentElement('beforebegin', ad)
// parent.insertAdjacentElement('afterend', ad)
// parent.insertAdjacentText('beforebegin', 'Hola mundo')
// parent.insertAdjacentHTML('beforebegin', `<h1>Soy el titulo principal</h1>`)

/* replaceChild(newChild, oldChild) :  lo que hace es reemplazar un hijo por uno nuevo*/
parent.replaceChild(ad, parent.children[0])