
document.body.querySelector('button').addEventListener('click', () => {
    let p = document.createElement('p')
    p.innerText = document.querySelector('input').value
    document.body.appendChild(p)
})