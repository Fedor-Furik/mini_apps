let httpRequest = new XMLHttpRequest();

httpRequest.onload = function() {
    let obj = JSON.parse(httpRequest.responseText);
    
}

httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');
httpRequest.send();