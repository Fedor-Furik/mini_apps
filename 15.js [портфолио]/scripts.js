const time = document.querySelector('.time');
const data = document.querySelector('.date');
const hello = document.querySelector('.greeting')
const inp = document.querySelector('.name')
const slid1 = document.getElementById("slid1")
const slid2 = document.getElementById("slid2")
const city = document.querySelector(".city")
let weatherIc = document.getElementById("iconWz")
const temper = document.querySelector(".temperature");
const wzDescripts = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humid = document.querySelector(".humidity");
let txt = document.getElementById('txt')
let autor = document.getElementById('autor')
let changQue = document.getElementById('changQue')

function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric',timeZone: 'GMT'};
    const currentDate = date.toLocaleDateString('English', options);
    data.textContent = currentDate;
}
showDate();

function showGreeting(){
    function getTimeOfDay() {
        const date = new Date();
        const hours = date.getHours();
        let x = hours/6
        let newX = Math.round(x)
        if (newX == 1) {
            let time = 'night'
            return time
        } else if (newX == 2) {
            let time = 'morning'
            return time
        } else if (newX == 3) {
            let time = 'afternoon'
            return time
        } else if (newX == 4) {
            let time = 'evening'
            return time
        }
        
    }
    let timeOfDay = getTimeOfDay();
    let greetingText = `Good ${timeOfDay},`;
    hello.textContent = greetingText
    return timeOfDay
}

function setLocalStorage() {
    localStorage.setItem('name', inp.value);
}
window.addEventListener('beforeunload', setLocalStorage)

inp.value = localStorage.name


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function setBg() {  
    const img = new Image();
    let times = showGreeting();
    let number = getRandomInteger(1, 20)
    if (number < 10) {
            number = '0' + number
    }
    let getRandom = number
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${times}/${getRandom}.jpg`
    img.onload = () => {      
      document.body.style.backgroundImage = `url('${img.src}')`;
    }; 
  }
setBg() 

slid1.addEventListener('click', setBg)
slid2.addEventListener('click', setBg)

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    let valu = city.value;
    console.log(valu)
    const res = await fetch(url);
    const data = await res.json();
    
    weatherIc.className = 'weather-icon owf';
    weatherIc.classList.add(`owf-${data.weather[0].id}`);
    temper.textContent = `${data.main.temp}°C`;
    wzDescripts.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${data.wind.speed} m/s `
    humid.textContent = `Humidity: ${data.main.humidity}%`
  }
city.addEventListener('input', getWeather)

const msv = [
    {
        text: `"Программирование сегодня — это гонка разработчиков программ, стремящихся писать программы с большей и лучшей идиотоустойчивостью, и вселенной, которая пытается создать больше отборных идиотов. Пока вселенная побеждает." `, // 0
        author: "Rick Cook"
    },
    {
        text: ` "Низкоуровневый язык — это когда требуется внимание к вещам, которые никак не связаны с программами на этом языке." `, // 1
        author: "Alan J. Perlis"
    },
    {
        text: `"Программирование на С похоже на быстрые танцы на только что отполированном полу людей с острыми бритвами в руках." `, // 2
        author: "Waldi Ravens"
    },
    {
        text: `"Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили." `, // 3
        author: "Mosher’s Law of Software Engineering"
    },
    {
        text: `"Для меня долгое время было загадкой, как что-то очень дорогое и технологичное может быть столь бесполезным. И вскоре я осознал, что компьютер — это глупая машина, обладающая способностями выполнять невероятно умные вещи, тогда как программисты — это умные люди, у которых талант делать невероятные глупости. Короче, они нашли друг друга." `, // 4
        author: "Bill Bryson"
    },
    {
        text: `"В хорошем дизайне добавление чего-то стоит дешевле, чем сама эта вещь." `, // 5
        author: "Thomas C. Gale"
    },
    {
        text: `"В теории, теория и практика неразделимы. На практике это не так." `, // 6
        author: "Yoggi Berra"
    },
    {
        text: `"Perl — это тот язык, который одинаково выглядит как до, так и после RSA шифрования." `, // 7
        author: "Keith Bostic"
    },
    {
        text: `"Я изобрел понятие «объектно-ориентированный», и могу заявить, что не имел в виду C++." `, // 8
        author: "Alan Kay"
    },
    {
        text: `"Иногда лучше остаться спать дома в понедельник, чем провести всю неделю в отладке написанного в понедельник кода." `, // 9
        author: "Christopher Thompson"
    },
    {
        text: `"Измерять продуктивность программиста подсчетом строк кода — это так же, как оценивать постройку самолета по его весу." `, // 10
        author: "Bill Gates"
    },
    {
        text: `"Отладка кода вдвое сложнее, чем его написание. Так что если вы пишете код настолько умно, насколько можете, то вы по определению недостаточно сообразительны, чтобы его отлаживать." `, // 11
        author: "Brian W. Kernighan"
    },
    {
        text: ` "Многие из вас знакомы с достоинствами программиста. Их всего три, и разумеется это: лень, нетерпеливость и гордыня." `, // 12
        author: "Larry Wall"
    },
    {
        text: ` "Большинство программ на сегодняшний день подобны египетским пирамидам из миллиона кирпичиков друг на друге и без конструктивной целостности — они просто построены грубой силой и тысячами рабов." `, // 13
        author: "Alan Kay"
    },
    {
        text: ` "Большинство хороших программистов делают свою работу не потому, что ожидают оплаты или признания, а потому что получают удовольствие от программирования." `, // 14
        author: "Linus Torvalds"
    },
    {
        text: ` "Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете" `, // 15
        author: "Martin Golding"
    },
    {
        text: ` "Программы должны писаться для людей, которые будут их читать, а машины, которые будут эти программы исполнять — второстепенны." `, // 16
        author: "Harold Abelson"
    },
    {
        text: ` "Люди, которые думают, что ненавидят компьютеры, на самом деле ненавидят плохих программистов." `, // 17
        author: "Larry Niven"
    },
    {
        text: ` "Если вы дадите человеку программу, то займете его на один день. Если вы научите человека программировать, то займете его на всю жизнь." `, // 18
        author: "Waseem Latif"
    },
    {
        text: ` "Язык, который не меняет вашего представления о программировании, недостоин изучения." `, // 19
        author: "Alan J. Perlis"
    },
    {
        text: ` "Мы наблюдаем общество, которое все больше зависит от машин, но при этом использует их все неэффективнее." `, // 20
        author: "Douglas Rushkoff"
    },
]

let mus1 = document.getElementById('mus1')
let mus2 = document.getElementById('mus2')
let mus3 = document.getElementById('mus3')
let mus4 = document.getElementById('mus4')

function getQuotes() {
    let rnd = getRandomInteger(0, 21)
    txt.innerText = msv[rnd].text
    autor.innerText = msv[rnd].author
}
getQuotes();

changQue.addEventListener('click',getQuotes)

let musicList = ['Aqua Caelestis.mp3','Ennio Morricone.mp3','River Flows In You.mp3','Summer Wind.mp3']

let audios = new Audio();
function playAudio(i) {
    audios.src = `assets/sounds/${musicList[i]}`
    audios.currentTime = 0;
    audios.play()
}
playAudio()

function obrabotka() {
    for(let i = 0;i < 4; i++){
        let butonToStop = document.getElementById(`ng${i}`)
        butonToStop.addEventListener('click', playAudio(i))
    }
}


let isPlay = false;

function playAudios() {
  audio.currentTime = 0;
  if(!isPlay){
    isPlay = true;
    audio.play();
  } else {
    isPlay = false;
    audio.pause();
  }
}
mus1.addEventListener('click',playAudios)

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
    showGreeting(); 
}
showTime();


