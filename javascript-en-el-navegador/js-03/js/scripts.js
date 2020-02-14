/* Los eventos */
/* click */
// function holaMundo() {
//     alert("Hola mundo")
// }
const title = document.getElementById('title')

// title.addEventListener('eventName', eventHander)

// title.addEventListener('click', () => {
//     alert('Hola mundo')
// })

// const holaMundo = () => alert('Hola EDteam')
// title.addEventListener('click', holaMundo)

// const holaMundo = e => alert(e.target.textContent)

// title.addEventListener('click', e => {
//     holaMundo(e)
// })

// document.querySelector('button').addEventListener('click', e => {
//     holaMundo(e)
// })

/* dblclick */

// const holaMundo = e => alert(e.target.textContent)
// title.addEventListener('dblclick', e => {
//     holaMundo(e)
// })

/* mouseenter: cuando entro al elemento se ejecuta */

// const holaMundo = e => console.log(e.target.textContent)

// title.addEventListener('mouseenter', e => {
//     holaMundo(e)
// })

/* mouseleave: cuando sale del elemento, pero debo estar previamente en el elemento para que se ejecute */

// const holaMundo = e => console.log(e.target.textContent)

// title.addEventListener('mouseleave', e => {
//     holaMundo(e)
// })

/* contextMenu */

// const holaMundo = e => console.log(e.target.textContent)

// title.addEventListener('contextmenu', e => {
//     // holaMundo(e)
//     // console.log(e)
//     console.log(e.pageX, e.pageY)
//     e.preventDefault()
// })


// const createMenu = () => {
//     const menu = document.createElement('div')
//     menu.textContent = 'Soy un menu contextual'
//     document.body.appendChild(menu)
// }

// title.addEventListener('contextmenu', e => {
//     createMenu()
//     e.preventDefault()
// })


// const createMenu = e => {
//     const menu = document.createElement('div')
//     menu.textContent = 'Soy un menu contextual'
//     document.body.appendChild(menu)

//     menu.style.padding = '1em'
//     menu.style.background = '#eee'
//     menu.style.position = 'fixed'
//     menu.style.top = `${e.pageY}px`
//     menu.style.left = `${e.pageX}px`
// }

// title.addEventListener('contextmenu', e => {
//     createMenu(e)
//     e.preventDefault()
// })


const createMenu = e => {
    const menu = document.createElement('div')
    const prevMenu = document.getElementById('context-menu')
    menu.id = 'context-menu'
    menu.textContent = 'Soy un menu contextual'

    if (prevMenu) {
        document.body.removeChild(prevMenu)
    }
    document.body.appendChild(menu)

    menu.style.padding = '1em'
    menu.style.background = "#eee"
    menu.style.position = 'fixed'
    menu.style.top = `${e.pageY}px`
    menu.style.left = `${e.pageX}px`
}
document.addEventListener('contextmenu', e => {
    createMenu(e)
    e.preventDefault()
})

/* mousedown */

/* mouseup */

/* mousemove */