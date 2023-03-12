let hours = document.getElementById('hours')
let minyts = document.getElementById('minuts')
let secynds = document.getElementById('seconds')

setInterval(function(){
    let date = new Date()
    let hor = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    hours.innerText = hor
    minyts.innerText = min
    secynds.innerText = sec
}, 1000);

