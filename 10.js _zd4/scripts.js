let input = document.querySelector('input')
let form = document.querySelector('form')
let ul = document.querySelector('ul')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let chekBox = document.createElement('input');
    let li = document.createElement('li');
    let but = document.createElement('button');
    li.innerText = input.value;
    chekBox.type = 'checkbox';
    li.prepend(chekBox);
    chekBox.addEventListener('click', () => {
        if(chekBox.checked) {
          ul.appendChild(li)
          li.style.textDecoration = 'line-through'
        } else {
            li.style.textDecoration = 'none'
            ul.prepend(li)
        }
      }) 
    but.innerText = 'delete';
    li.appendChild(but);
    but.addEventListener('click', () => {
        li.remove()
    });
    input.value = '';
    ul.appendChild(li);
})
