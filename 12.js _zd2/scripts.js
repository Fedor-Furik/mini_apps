let body = document.querySelector('body')
document.getElementById('one').addEventListener("click", () => {
    document.body.style.backgroundColor = 'white'
    document.getElementById('one').style.backgroundColor = 'rgb(225,225,225)'
    document.getElementById('two').style.backgroundColor = 'rgb(225,225,225)'
    document.getElementById('h2').style.color = 'black'
    document.getElementById('h22').style.color = 'black'
    document.querySelector('h1').style.color = 'black'
    let p = document.querySelectorAll('p')
    p.forEach(element => {
        element.style.color = 'black'
    })

})
document.getElementById('two').addEventListener("click", () => {
    document.body.style.backgroundColor = 'rgb(18,18,18)'
    document.getElementById('one').style.backgroundColor = 'rgb(30,30,30)'
    document.getElementById('two').style.backgroundColor = 'rgb(30,30,30)'
    document.getElementById('h2').style.color = 'white'
    document.getElementById('h22').style.color = 'white'
    document.querySelector('h1').style.color = 'white'
    let p = document.querySelectorAll('p')
    p.forEach(element => {
        element.style.color = 'white'
    })
})