
document.body.querySelector('button').addEventListener('click', () => {
    let div = document.createElement('div')
    document.body.querySelector('main').appendChild(div)
    let p = document.createElement('p')
    let but = document.createElement('button')
    but.innerText = 'delete'
    but.className = `del ${document.querySelector('input').value}`
    p.className = `del ${document.querySelector('input').value}`
    but.addEventListener('click', () => {
        but.remove()
        p.remove()
    })
    p.innerText = document.querySelector('input').value
    document.querySelector('input').value = ''
    document.body.querySelector('div').appendChild(p)
    document.body.querySelector('div').appendChild(but)
})