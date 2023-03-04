let hor = document.getElementById('hours')
let min = document.getElementById('minuts')
let sec = document.getElementById('seconds')



setTimeout(function(){
	let date = new Date()
    hor.textContent = date.getHours()
    min.textContent = date.getMinutes()
    sec.textContent = date.getSeconds()
}, 1000);

