// HTML ELEMENTS
const playButton = document.getElementById('play-button')
const square = document.getElementById('square')
const box = document.querySelectorAll('.box')

// GENERARE LA GRIGLIA AL CLICK DI PLAYBUTTON

playButton.addEventListener('click', function () {
    // rimuovere d-none dalla griglia
    square.classList.remove('d-none')
    //generare con un ciclo for quanti box necessari
    const grid = creatGrid(box)

})

// al click della cella, questa si colora di azzurro



function creatGrid() {
    for (i = 1; i <= 100; i++) {
        const cell = creatCell(i)
        square.append(cell)
        console.log(i)
    }
}



function creatCell(i) {
    const item = document.createElement('div')
    item.classList.add('box')
    item.classList.add('text-center')
    item.innerHTML = i
    item.addEventListener('click', function(){
    item.classList.toggle('clicked')
    })
    return item;
    
}