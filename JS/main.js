// HTML ELEMENTS
const playButton = document.getElementById('play-button')
const square = document.getElementById('square')
let grid;


// GENERARE LA GRIGLIA AL CLICK DI PLAYBUTTON

playButton.addEventListener('click', function () {
    // rimuovere d-none dalla griglia
    square.classList.remove('d-none')
    //generare con un ciclo for quanti box necessari
    const box = `<div class="box text-center" id="box"><span class="align-middle"></span></div>`
    grid = boxGeneration(box)
    
})

function boxGeneration(element) {
    for (i = 1; i <= 100 ; i++) {
        square.innerHTML += element
        console.log(i)
    }
}

