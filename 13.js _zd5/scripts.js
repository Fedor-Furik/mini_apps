const city = document.getElementById('city')
const time = document.getElementById('time')
const temper = document.getElementById('temper')
const wzDescripts = document.getElementById('weather')
const wzIcon = document.getElementById('iconWz')
const wind = document.getElementById('vector')

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=a94d0a5ac08570add4b47b8da933f247`;
    console.log(url)
    const res = await fetch(url);
    const data = await res.json();
    
    let tempy = data.list[0].main.temp
    let tempKf = tempy - 273.15 
    let tempKf2 = Math.round(tempKf)
    temper.textContent = `${tempKf2}°C`;
    wzDescripts.textContent = data.list[0].weather[0].description;
    wind.textContent = `${data.list[0].wind.speed} m/s `
    wzIcon.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
    wzIcon.style.visibility = 'visible'
}
city.addEventListener('input', getWeather)

async function DupWeather() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=a94d0a5ac08570add4b47b8da933f247`;
    const res = await fetch(url);
    const data = await res.json();
    for (let i = 1; i < 4; i++) {
        let date = new Date();
        let tempy1 = data.list[i].main.temp;
        let tempKf2 = tempy1 - 273.15 
        let tempKf3 = Math.round(tempKf2);
        let tempers = document.getElementById(`grad${i}`);
        let wzIcons = document.getElementById(`icons${i}`);
        let den = document.getElementById(`date${i}`);
        let vrem = document.getElementById(`time${i}`);
        tempers.textContent = `${tempKf3}°C`;
        wzIcons.src = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
        wzIcons.style.visibility = 'visible'
        den.textContent = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
        let hum = data.list[i].dt_txt
        let arr = hum.split(' ');
        vrem.textContent = arr[1]
    }
}
city.addEventListener('input', DupWeather)

function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric',timeZone: 'GMT'};
    const currentDate = date.toLocaleDateString('English', options);
    console.log(currentDate)
}

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    //showDate()
}
showTime();


