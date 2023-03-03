let container = document.getElementById('container')
function back (klas) {
    localStorage.url = container.className = klas
}
document.getElementById('div_1').addEventListener('click',() => {
    back('back-1')
})
document.getElementById('div_2').addEventListener('click',() => {
    back ('back-2')
})
document.getElementById('div_3').addEventListener('click',() => {
    back ('back-3')
    
})
container.className = localStorage.url