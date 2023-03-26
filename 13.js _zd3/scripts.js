let httpRequest = new XMLHttpRequest();
let ul = document.querySelector('ul')

httpRequest.onload = function() {
    let obj = JSON.parse(httpRequest.responseText);
    for (i = 0;i < 20; i++) {
       console.log(obj[i].title)
       let li = document.createElement('li')
       li.innerText = obj[i].title
       ul.appendChild(li)
    }
}

httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
httpRequest.send();