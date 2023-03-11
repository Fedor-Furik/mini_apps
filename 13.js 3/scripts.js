let httpRequest = new XMLHttpRequest();

httpRequest.onload = function() {
    let obj = JSON.parse(httpRequest.responseText);
    for (i = 0;i < 20; i++) {
       console.log(obj[i].title) 
    }
}

httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
httpRequest.send();