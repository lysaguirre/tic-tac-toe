const board = document.querySelector('.board')

const info  = document.querySelector('.info')


const startCells = [
    '', '', '','', '', '', '', '', ''
]

let go = 'cross'
info.textContent = 'Cross goes first'


function createBoard () {
    startCells.forEach((cell, index) => {
       const cellElement = document.createElement('div')
       cellElement.classList.add('square')
       cellElement.id = index
       cellElement.addEventListener('click', addNext)
       board.append(cellElement)
})

}

createBoard();

function addNext(e){
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === 'cross' ? "circle" : "cross"
    info.textContent = "it is now " + go + "'s go." 
    e.target.removeEventListener('click', addNext)

    checkScore()
}

function checkScore(){
    const allSquares = document.querySelectorAll('.square')
    
    const winningCombinations = [
        [0, 1, 2], // Fila superior
        [3, 4, 5], // Fila del medio
        [6, 7, 8], // Fila inferior
        [0, 3, 6], // Columna izquierda
        [1, 4, 7], // Columna del medio
        [2, 5, 8], // Columna derecha
        [0, 4, 8], // Diagonal izquierda a derecha
        [2, 4, 6], // Diagonal derecha a izquierda
      ];

      winningCombinations.forEach(array =>{
        const circleWins =
        array.every(cell => allSquares[cell].firstChild ?.classList.contains('circle'))

        if(circleWins) {
            info.textContent = "Circle Wins! :)"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
      })

      winningCombinations.forEach(array =>{
        const crossWins =
        array.every(cell => allSquares[cell].firstChild ?.classList.contains('cross'))

        if(crossWins) {
            info.textContent = "Cross Wins! :)"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
      })

      

      
}