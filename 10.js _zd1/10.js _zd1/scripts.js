document.getElementById('call-back').addEventListener('click',() => {
    document.getElementById('sloi_2').style.visibility = 'visible';
    document.getElementById('sloi_2').style.opacity = '100';
})
document.getElementById('cls').addEventListener('click',() => {
    document.getElementById('sloi_2').style.opacity = '0';
    document.getElementById('sloi_2').style.visibility = 'hidden';
})