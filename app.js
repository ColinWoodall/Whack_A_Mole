const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const startGame = document.getElementById('startBtn')

let result = 0;
let hitPosition
let currentTime = 10;
let timerID = null

startGame.addEventListener('click', ()=> {
    startGame.disabled = true;
    let result = 0;
    score.textContent = result
    let hitPosition
    let currentTime = 10;
    timeLeft.textContent = currentTime
    let timerID = null


    function randomSquare(){
        squares.forEach(square => {
            square.classList.remove('mole')})
        let randomSquare = squares[Math.floor(Math.random() * 9)]
            randomSquare.classList.add('mole')
            hitPosition = randomSquare.id
}  

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole(){
    timerID = setInterval(randomSquare, 850)
}

moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerID)
        alert('Game Over: your final score is ' + result)
        startGame.disabled = false;
    }
}

let countDownTimerId = setInterval(countDown, 1000)

})
