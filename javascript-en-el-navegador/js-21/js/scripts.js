/* Date : es un objeto que trae del sistema operativo */
// const now = new Date()
// console.log(now)

// const aniversario = new Date(2000, 4, 21, 20, 30, 12)
// const aniversario = new Date('Sun May 21 2000 20:30:12 GMT-0500')
// console.log(aniversario)

/* METODOS 
    getFullYear()
    getMinutes()
    getSeconds()
    getDate()
    getDay()
    getMonth()
    getTime() : nos devuelve en milisegundos
    getTimeZoneOffset()    
*/

// const timeZoneOffset = new Date().getTimezoneOffset()
// console.log(timeZoneOffset) // 300 porque nos da la diferencia entre la zona horaria base y mi zona horaria
// -300
// 0
// 300

const birthday = new Date(1980, 1, 4)
const now = new Date(2018, 4, 21)

// console.log(now - birthday)

const getSeconds = ms => Math.round(ms / 1000)
const getMinutes = ms => getSeconds(ms) / 60

console.log(getMinutes(now - birthday))