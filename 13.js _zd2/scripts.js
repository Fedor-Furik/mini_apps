let httpRequest = new XMLHttpRequest();
let div = document.querySelector('div')

httpRequest.onload = function() {
    let obj = JSON.parse(httpRequest.responseText);
    console.log(obj.title);
    let p = document.createElement('p')
    p.innerText = obj.title
    div.appendChild(p)
}

httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
httpRequest.send();