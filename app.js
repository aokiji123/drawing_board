const board = document.querySelector("#board")
const colors = ['#6495ED', '#8A2BE2', '#E6E6FA', '#FFB6C1', '#90EE90', '#F4A460']
const SQUARES_NUMBER = 1225

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))  
    
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow = "0 0 2px #000"
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}