let a = document.getElementById('str_one')
let b = document.getElementById('str_two')
let c = document.getElementById('str_three')

document.getElementById('one').addEventListener("click", () => {
    a.className = 'active'
    b.className = 'noactive'
    c.className = 'noactive'
})
document.getElementById('two').addEventListener("click", () => {
    a.className = 'noactive'
    b.className = 'active'
    c.className = 'noactive'
})
document.getElementById('three').addEventListener("click", () => {
    a.className = 'noactive'
    b.className = 'noactive'
    c.className = 'active'
})