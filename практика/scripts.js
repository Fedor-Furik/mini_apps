
let score = 0
let time = document.getElementById('time') //заголовок
let isGameActive = false
let start = document.getElementById('start') //запуск игры
let input = document.querySelector('input') //input времени
let pole = document.getElementById('game') //поле игры
let result = document.getElementById('result') 
let resultH1 = document.getElementById('result-header')
let timeH1 = document.getElementById('time-header') 


function endGame() {
    isGameActive = false
    game.innerHTML = ''
    input.removeAttribute('disabled')
    start.classList.remove('hide')
    pole.style.backgroundColor = "rgb(204, 204, 204)"
    pole.style.borderColor = "rgb(204, 204, 204)"
    timeH1.classList.add('hide')
    resultH1.classList.remove('hide')
    result.textContent = String(score)
}
function renderBox() {
    pole.innerHTML = '';
    let randomSize = getRandom(30, 100)
    let maxDelta = 300 - randomSize
    let div = document.createElement('div')
    div.style.width = `${randomSize}px`
    div.style.height = `${randomSize}px`
    div.style.backgroundColor = 'black'
    div.style.position = 'absolute'
    div.style.top = `${getRandom(30, 100)}px`
    div.style.left = `${getRandom(30, 100)}px`
    div.style.cursor = 'pointer'
    div.className = "box" 
    document.getElementById('game').appendChild(div)

}
function gameBoxClick(event){
    if (!isGameActive) {
            return; 
    }
    if(event.target.classList.contains("box")){
        score = score + 1
        renderBox() 
    }
}


function startGame() { 
    score = 0
    time.textContent = input.value
    isGameActive = true
    input.disabled = true
    resultH1.classList.add('hide')
    timeH1.classList.remove('hide')
    start.classList.add('hide')
    pole.style.backgroundColor = "white"
    pole.style.borderColor = "gray"
    let interval = setInterval(function(){ 
        let currentTime = Number(time.textContent)
        if (currentTime <= 0) {
            clearInterval(interval);
            endGame()
        } else {
            let time2 = Number(time.textContent) - 1.0
            time2.toFixed(1)
            time.textContent = time2
        }
    },1000)
    renderBox()
}


function getRandom(min, max) {
    return (Math.floor(Math.random() * (max - min) + min)) 
  }



start.addEventListener('click', startGame)
pole.addEventListener('click',  gameBoxClick)
