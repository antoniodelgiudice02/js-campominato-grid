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
        item.classList.toggle('clicked')
        item.classList.toggle('notclicked')
        console.log(i)

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
    input.addEventListener('click', function(){

    })

    if (setting == 'easy') {
        const easy = creatGrid(100)
    }

    if (setting == 'medium') {
        const medium = creatGrid(81)
    }

    if (setting == 'hard') {
        const hard = creatGrid(49)
    }

}