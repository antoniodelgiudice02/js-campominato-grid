// CREAZIONE CELLA

function creatCell(i) {

    const item = document.createElement('div')
    item.classList.add('box')
    item.classList.add('text-center')
    item.classList.add('notclicked')
    item.classList.add('cursor-pointer')

    returnButton.addEventListener('click', function () {
        item.remove('div')
        square.classList.add('d-none')
        jumbotron.classList.remove('d-none')
        game.classList.add('d-none')
    })

    if (difficulty == 'easy') {
        item.classList.add('box-easy')
    }
    if (difficulty == 'medium') {
        item.classList.add('box-medium')
    }
    if (difficulty == 'hard') {
        item.classList.add('box-hard')
    }

    item.innerHTML = i

    item.addEventListener('click', function () {

        scoreText.innerText = ('Score:' + score)
        item.classList.add('unclickeble')


        if (bomb.includes(i)) {
            item.classList.add('bomb-clicked')
            gameOver.classList.remove('d-none')
            gameOverText.innerText = ('GAME OVER')
            gameOverText.classList.add('text-danger')

        } else {
            item.classList.add('clicked')
            score++;
            console.log(score)
            console.log(i)
            if (score == numberOfCell - bomb.length) {
                gameOverText.innerText = ('HAI VINTO')
                gameOverText.classList.add('green')
                gameOver.classList.remove('d-none')
            }
        }

    })

    return item;
}

// CREAZIONE GRIGLIA

function creatGrid(size) {
    for (i = 1; i <= size; i++) {
        const cell = creatCell(i)
        square.append(cell)
        console.log(i)
    }
}

// DIFFICOLTA'

function setDifficulty(setting) {
    input.addEventListener('click', function () {

    })

    if (setting == 'easy') {
        numberOfCell = 100
    }

    if (setting == 'medium') {
        numberOfCell = 81
    }

    if (setting == 'hard') {
        numberOfCell = 49
    }

}

// random number

function getRandomNumber(min, max) {
    let generateNumber = Math.floor((Math.random() * max) + min);
}