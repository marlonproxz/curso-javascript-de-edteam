/* Los eventos de teclado  */

const input = document.getElementById('input')

// document.addEventListener('keyup', e => {
//     console.log(e.key)
//     console.log(e)
//     console.log(e.ctrlKey)
//     console.log(e.altKey)
// })

// addEventListener('keydown', e => {
//     if (e.key === 'a' && e.ctrlKey === true) {
//         e.preventDefault()
//         alert('CTRL A')
//     }
// })

// addEventListener('keyup', e => {
//     console.log(e.key)
// })

let x = 0,
    y = 0
    // addEventListener('keyup', e => {
    //     const ball = document.getElementById('ball')
    //     const move = () => ball.style.transform = `translate(${x*10}px,${y*10}px)`
    //     const up = () => {
    //         y--
    //         move()
    //     }

//     const down = () => {
//         y++
//         move()
//     }

//     const left = () => {
//         x--
//         move()
//     }

//     const right = () => {
//         x++
//         move()
//     }

//     switch (e.key) {
//         case 'ArrowUp':
//             up()
//             break;
//         case 'ArrowDown':
//             down()
//             break;
//         case 'ArrowLeft':
//             left()
//             break;
//         case 'ArrowRight':
//             right()
//             break;

//         default:
//             break;
//     }
// })

addEventListener('keyup', e => {
    const ball = document.getElementById('ball')
    const move = direccion => {
        switch (direccion) {
            case 'up':
                y--
                break;
            case 'down':
                y++
                break;
            case 'left':
                x--
                break;
            case 'right':
                x++
                break;
            default:
                break;
        }

        ball.style.transform = `translate(${x*10}px,${y*10}px)`
    }

    switch (e.key) {
        case 'ArrowUp':
            move('up')
            break;
        case 'ArrowDown':
            move('down')
            break;
        case 'ArrowLeft':
            move('left')
            break;
        case 'ArrowRight':
            move('right')
            break;

        default:
            break;
    }
})