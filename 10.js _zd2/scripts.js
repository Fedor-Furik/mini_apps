let main = document.getElementById('main')
let panel = document.getElementById('panel')
let close = document.getElementById('close')
let open = document.getElementById('open')

open.addEventListener('click', () => {
    main.style.marginLeft = '250px'
    panel.style.width = '250px'
    panel.style.backgroundColor = '#222222'
})
close.addEventListener('click', () => {
    main.style.marginLeft = '0px'
    panel.style.width = '0px'
    panel.style.backgroundColor = 'white'
})