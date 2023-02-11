let hor = document.getElementById('hours')
let min = document.getElementById('minuts')
let sec = document.getElementById('seconds')

let date = new Date()
hor.textContent = date.getHours()
min.textContent = date.getMinutes()
sec.textContent = date.getSeconds()

setTimeout(function(){
	location.reload();
}, 1000);

