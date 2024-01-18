// HTML ELEMENTS
const playButton = document.getElementById('play-button')
const square = document.getElementById('square')

// GENERARE LA GRIGLIA AL CLICK DI PLAYBUTTON

playButton.addEventListener('click', function(){
    square.classList.remove('d-none')
})