/* Ejercicios
Crear publicidad en el medio de la pagina */

const post = document.getElementById('post')
    // console.log(post.children.length)
const ad = document.createElement('div')
ad.id = 'EDteam'
ad.textContent = 'Publicidad'

const getMiddleChild = element => {
    const childs = element.children,
        l = childs.length,
        i = Math.floor(l / 2)
    return childs[i]
}

// console.log(getMiddleChild(post))
const middleChild = getMiddleChild(post)
post.insertBefore(ad, middleChild)