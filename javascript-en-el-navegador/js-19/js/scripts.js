/* Objeto location: te devuelve informacion sobre a URL, location es lectura y escritura
    href: con esto tu obtienes la direccion*/
// console.log(location.href)
// location.href = 'https://app.ed.team' // le estaria enviando a la URL porque location es de lectura y escritura
/*  host: nos devulve el dominio mas puerto*/
console.log(location.host)
    /* probar todos los links externos */
    // const links = document.links
    // for (let link of links) {
    //     if (link.href.includes(location.host)) {
    //         link.style.background = 'yellow'
    //         console.log(link)
    //     }
    // }
    /* probar todos los links externos */
const links = document.links
for (let link of links) {
    if (!link.href.includes(location.host)) {
        link.style.background = 'yellow'
        console.log(link)
    }
}
/* hostname: nos devuelve dominio */
console.log(location.hostname)
    /* port: nos devulve el puerto */
console.log(location.port)
    /* protocol: nos devuelve si es http o https */
console.log(location.protocol)
    /* origin: nos devulve el protocolo + el dominio */
console.log(location.origin)
    /* hash: nos devulve si hay un hash en la pagina 
    http://localhost/edteam/javascript-en-el-navegador/js-19/#temario
    los hash se usan para hacer enlaces internos, yo puedo detectar un hash
    */
console.log(location.hash)
    /* pathname: nos devuelve la ruta interna luego del dominio, de esta manera puedes
    saber en que pagina te encuentras 
    https://ed.team/cursos/js-poo
    */
console.log(location.pathname)
if (location.pathname.includes('cursos')) {
    document.body.classList.add('cursos-page')
}

/* METODOS
    reload(): recarga la pagina
    location.reload()
    assign(url): cambia la navegacion, es lo mismo que sobreescribir la propiedad href
    replace(url): cambia la navegacion, es lo mismo que sobreescribir la propiedad href
*/