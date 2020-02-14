/* Eventos de DOM
DOMContentloaded es cuando el navegador leyo el html y lo proceso ahi ocurre este*/

// addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('form')
//     const rememberPassword = document.getElementById('remember-password')

//     form.addEventListener('submit', () => {
//         console.log('Ha enviado el formulario')
//     })

//     rememberPassword.addEventListener('change', e => {
//         // console.log(e)
//         if (e.target.checked) {
//             console.log('El usuario quiere recordar su contraseña')
//         } else {
//             console.log('El usuario NO quiere recordar su contraseña')
//         }
//     })

// })

addEventListener('scroll', e => {
    console.log(scrollX, scrollY)
})

addEventListener('resize', e => {
    console.log(innerWidth, innerHeight) //e.target.innerWidth = innerWidth
    console.log(outerWidth, outerHeight)
})