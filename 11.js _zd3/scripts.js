const imags = document.querySelectorAll('img')
window.addEventListener('click', (event) => {
  imags.forEach(element => {
    if(element == event.target){
        let imgUrl = element.getAttribute('src')
        element.classList.add('active')
        document.body.style.backgroundImage = `url(${imgUrl})`
        localStorage.srcc = imgUrl
    } else {
        element.classList.remove('active')
    }
  });
})
document.body.style.backgroundImage = `url(${localStorage.srcc})`