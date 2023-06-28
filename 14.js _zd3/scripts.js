const form = document.querySelector('form')
const input = document.querySelector('input')
const playerDiv = document.querySelector('.player')

function createPlayer(id) {
  return `<iframe src="https://www.youtube.com/embed/${id}" width="560" height="315" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
}

async function date (value) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBaPOK-VAQktm98Bprx3oKrsz6KpZuWuts&q=${value}&type=video`; 
  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
  getInfo(data)
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  date(input.value)
})

function player (i) {
  let imgClicks = document.querySelectorAll('.img')
  let imgSrc = imgClicks[i].getAttribute('alt')
  console.log('hi2')
  localStorage.src = imgSrc
  let card = createPlayer(localStorage.src)
  playerDiv.innerHTML = card
}
  
function getInfo(data) {
  let imgClicks = document.querySelectorAll('img')
  console.log(imgClicks)
  let card2 = createPlayer(data.items[0].id.videoId)
  playerDiv.innerHTML = card2
  for(let i = 0; i < 5; i++) {
    imgClicks[i].src = data.items[i].snippet.thumbnails.medium.url
    imgClicks[i].alt = data.items[i].id.videoId
    console.log('hi')
    imgClicks[i].addEventListener('click', () => {
      player(i);
    })
  }
}
