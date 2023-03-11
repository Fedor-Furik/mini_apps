let httpRequest = new XMLHttpRequest();

httpRequest.onload = function() {
    let obj = JSON.parse(httpRequest.responseText);
    console.log(obj.title);
}

httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
httpRequest.send();