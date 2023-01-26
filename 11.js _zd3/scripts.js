document.getElementById('div_1').addEventListener('click',() => {
    localStorage.url = 'url(https://cdn.pixabay.com/photo/2016/04/20/19/47/wolves-1341881_960_720.jpg)'
    document.getElementById('container').style.backgroundImage = localStorage.url;

})
document.getElementById('div_2').addEventListener('click',() => {
    localStorage.url = 'url(https://cdn.pixabay.com/photo/2016/03/21/10/44/desert-1270345_960_720.jpg)'
    document.getElementById('container').style.backgroundImage = localStorage.url;
})
document.getElementById('div_3').addEventListener('click',() => {
    localStorage.url = 'url(https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg)'
    document.getElementById('container').style.backgroundImage = localStorage.url;
})