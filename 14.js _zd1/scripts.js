const row = document.querySelector('.row');

const createCard = (flag, countryName, region, population,languageStr, moneyStr) => {
    return `<div class="card" style="width: 18rem;">
    <img src=${flag} class="card-img-top">
    <div class="card-body">
      <h2>${countryName}</h2>
      <p class="card-text">${region}</p>
      population,languageStr, moneyStr
      <p>👨‍👩‍👧‍👦 ${population} млн</p>
      <p>🗣 ${languageStr}</p>
      <p>💵 ${moneyStr}</p>
    </div>
  </div>`
}


async function date () {
    const url = `https://restcountries.com/v3.1/all`; 
    const res = await fetch(url);
    const data = await res.json();
    getInfo(data)
}
function getInfo (countries) {
    for(let i = 0; i < countries.length; i += 5) {
        let dd = Object.values(countries[i].currencies)
        let card = createCard(countries[i].flags.png, countries[i].name.official, countries[i].region, countries[i].population, Object.values(countries[i].languages), Object.values(dd[0]))
        row.innerHTML += `<div class="col">${card}</div>`;
    }    
}
date()