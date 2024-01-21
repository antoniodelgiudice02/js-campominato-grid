// HTML ELEMENTS
const playButton = document.getElementById('play-button')
const square = document.getElementById('square')
const box = document.querySelectorAll('.box')
const jumbotron = document.getElementById('jumbotron')
const game = document.getElementById('game')
const input = document.getElementById('difficulty')
const difficulty = input.value;
const returnButton = document.getElementById('return-button')
const bomb = []
const gameOver = document.getElementById('game-over')
const gameOverText = document.getElementById('game-over-text')
const scoreText = document.getElementById('score-text')
let score = 0
let numberOfCell = 0


// GENERARE LA GRIGLIA AL CLICK DI PLAYBUTTON

playButton.addEventListener('click', function () {
    // mostrare il gioco e rimuovere il menu
    square.classList.remove('d-none')
    jumbotron.classList.add('d-none')
    game.classList.remove('d-none')
    //generare con un ciclo for quanti box necessari
    setDifficulty(difficulty)
    const grid = creatGrid(numberOfCell)
    console.log(grid)

    // GENERO LE BOMBE


    max = numberOfCell
    while (bomb.length < 16) {
        let generateNumber = Math.floor((Math.random() * max) + 1);
        if (!bomb.includes(generateNumber)) {
            bomb.push(generateNumber)
        }
    }

    console.log(bomb)



})










