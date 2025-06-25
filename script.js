// https://api.openweathermap.org/data/2.5/weather?q=Germany&appid=907c8ecd7b818ddffd1eb6812a993e82&units=metric

const apiKey = '907c8ecd7b818ddffd1eb6812a993e82';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const city = document.querySelector('#city');
const searchButton = document.querySelector('.search-icon');
const weatherIcon = document.querySelector('.weather-icon');



async function getWeather(city) {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    var data = await response.json();
    console.log(data);
    
    if(data.weather[0].main === 'Clouds') {
        weatherIcon.innerHTML= `<img src="images/clouds.png" alt="Clouds">
        <h1 class="city-update">CITY</h1>
        <h2 class="temp-update">Temp</h2>`;
    }
    else if(data.weather[0].main === 'Rain') {
        
        weatherIcon.innerHTML = `<img src="images/rain.png" alt="Rain">
        <h1 class="city-update">CITY</h1>
        <h2 class="temp-update">Temp</h2>`;
    }
    else if(data.weather[0].main === 'Snow') {
        
        weatherIcon.innerHTML = `<img src="images/snow.png" alt="Snow">
        <h1 class="city-update">CITY</h1>
        <h2 class="temp-update">Temp</h2>`;
    }   
    else if(data.weather[0].main === 'Clear') {
        
        weatherIcon.innerHTML = `<img src="images/clear.png" alt="Clear">
        <h1 class="city-update">CITY</h1>
        <h2 class="temp-update">Temp</h2>`;
    }
    else if(data.weather[0].main === 'Drizzle') {
        weatherIcon.innerHTML = `<img src="images/drizzle.png" alt="Drizzle">
        <h1 class="city-update">CITY</h1>
        <h2 class="temp-update">Temp</h2>`;
    }
    else if(data.weather[0].main === 'Mist') {
        weatherIcon.innerHTML = `<img src="images/mist.png" alt="Mist">
        <h1 class="city-update">CITY</h1>
        <h2 class="temp-update">Temp</h2>`;
    }
    
    document.querySelector('.city-update').innerHTML = data.name;
    document.querySelector('.temp-update').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity-update').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind-update').innerHTML = data.wind.speed + ' km/h';
}

searchButton.addEventListener('click', () => {
    const cityValue = city.value.trim();
    getWeather(cityValue);
});
