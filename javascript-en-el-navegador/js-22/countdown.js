/* Ejercicio crear una cuenta regresiva con Javascript puro */
const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24))

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }

}

// console.log(getRemainTime('Jan 25 2020 14:21:39 GMT-0500'))
const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem)

    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline)
        el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate)
            el.innerHTML = finalMessage
        }

    }, 1000)
}

countdown('Jan 16 2020 14:35:00 GMT-0500', 'clock', 'Muchas gracias')