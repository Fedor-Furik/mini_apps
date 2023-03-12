let body = document.querySelector('body')
let pp = document.querySelectorAll('p')
let h1 = document.querySelector('h1')
let h2 = document.querySelectorAll('h2')
let two = document.getElementById('two')
let one = document.getElementById('one')

one.addEventListener("click", () => {
    body.style.backgroundColor = 'white'
    one.style.backgroundColor = 'rgb(225,225,225)'
    two.style.backgroundColor = 'rgb(225,225,225)'
    h2.forEach(element => {
        element.style.color = 'black'
    })
    h1.style.color = 'black'
    pp.forEach(element => {
        element.style.color = 'black'
    })

})
two.addEventListener("click", () => {
    body.style.backgroundColor = 'rgb(18,18,18)'
    one.style.backgroundColor = 'rgb(30,30,30)'
    two.style.backgroundColor = 'rgb(30,30,30)'
    h2.forEach(element => {
        element.style.color = 'white'
    })
    h1.style.color = 'white'
    pp.forEach(element => {
        element.style.color = 'white'
    })
})