const board = document.querySelector('#board')

const colors = ['#00FFFF','#F0F8FF','#FAEBD7','#000000','#FAEBD7','#DC143C','#7FFF00','#00FFFF','#8B008B','#FF1493']
const SQUARES_NUMBER = 357

for (let i = 0; i < SQUARES_NUMBER; i++ ){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}
function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`
    element.style.borderRadius = `20px`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
    element.style.borderRadius = `0px`

}

function getRandomColor() {
   const index = Math.floor(Math.random() *colors.length)
   return colors[index]
}
