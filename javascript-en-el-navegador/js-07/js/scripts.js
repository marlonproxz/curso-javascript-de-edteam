/* Eventos multimedia */
const video = document.getElementById('video'),
    playButton = document.getElementById('play'),
    pauseButton = document.getElementById('pause')

playButton.addEventListener('click', () => {
    video.play()
})

pauseButton.addEventListener('click', () => {
    video.pause()
        // playButton.click()
})