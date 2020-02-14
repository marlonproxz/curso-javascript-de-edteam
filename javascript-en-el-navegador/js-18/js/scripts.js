/* Objeto window : es el objeto de mas alto nivel en el navegador, porque javascript tmb existe en el servidor
todos los objetos vienen del objeto global window ejm: console.log('algo') = window.console.log('algo') 
    Objetos:
        console
        navigator: nos da informacion sobre el navegador
        location: nos da informacion sobre la url de la pagina que estoy actualmente
        history: nos da informacion sobre el historial del navegador
    Métodos
        alert(message) //manda un mensaje
        confirm(message) //muestra un modal de confirmacion y devulve false o true
        prompt(message) // lo que hace es mandar un mensaje y guardar la respuesta del usuario en una variable
        open(): // nos permise abrir una nueva instancia del nagevagor y esa nueva instancia se va abrir con algunos parametros
        close() // solo se puede usar en ventanas que se han abierto con open()
        open() no es standar
*/
// window.open('https://ed.team', 'EDteam', 'width=200,height=400')

/* Ejercicio responsive tester */
const form = document.getElementById('responsive-tester-form')
if (form) {
    form.addEventListener('submit', () => {
        let width = form.querySelector('#width'),
            height = form.querySelector('#height'),
            url = form.querySelector('#url')

        if (width && height && url) {
            width = width.value
            height = height.value
            url = url.value
        }

        // window.open(url, url, `width=${width},height=${height}`)
        window.open(url, url, `innerWidth=${width},innerHeight=${height}`) // para que la barra del navegador donde esta el titulo, la x, esta las opciones de maximinizar eso no cuente en esos tamaños  
    })
}