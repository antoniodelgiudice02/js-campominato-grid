// HTML ELEMENTS
const playButton = document.getElementById('play-button')
const square = document.getElementById('square')
const box = document.querySelectorAll('.box')
const jumbotron = document.getElementById('jumbotron')
const game = document.getElementById('game')
const input = document.getElementById('difficulty')
const difficulty = input.value;
const returnButton = document.getElementById('return-button')


// GENERARE LA GRIGLIA AL CLICK DI PLAYBUTTON

playButton.addEventListener('click', function () {
    // mostrare il gioco e rimuovere il menu
    square.classList.remove('d-none')
    jumbotron.classList.add('d-none')
    game.classList.remove('d-none')
    //generare con un ciclo for quanti box necessari
    setDifficulty(difficulty)
    const grid = creatGrid(box)
})



// al click della cella, questa si colora di azzurro






