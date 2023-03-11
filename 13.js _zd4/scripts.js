let httpRequest = new XMLHttpRequest();

httpRequest.onload = function() {
    let obj = JSON.parse(httpRequest.responseText);
    for (i = 0;i < 10; i++) {
       let zgl = obj[i].name
       let by = obj[i].email
       let bod = obj[i].body
       let div = document.createElement('div')
       let li = document.createElement('h2')
       li.innerText = zgl
       let owner = document.createElement('p')
       owner.innerText = by
       let osn = document.createElement('p')
       osn.innerText = bod
       div.appendChild(li)
       div.appendChild(owner)
       div.appendChild(osn)
       document.body.appendChild(div)
    }
}

httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');
httpRequest.send();