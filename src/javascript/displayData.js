
export  async function displayCurrentWeather(weatherData, weatherIcons) {
    const currentWeather = weatherData.current;

    const data = new filterData(currentWeather, weatherIcons)

      const content = `
    <h2 class="info_text info_text--large_scrn">${data.date}</h2>
    
    <div class="weather_basic_info">
      ${weatherIcons[data.icon]}
      <h2 class="info_text info_text--temperature_main">${Math.round(data.temperature)} C</h2>
    </div>
    <h2 class="info_text">${data.description}</h2>
    <h2 class="info_text">Feels like ${Math.round(data.feelsLike)}</h2>
    `
    
    const display = document.querySelector('.main_display__weather')
    display.innerHTML = ''
    
    const currentWeatherDiv = document.createElement('DIV');
    currentWeatherDiv.classList.add('current_weather')
    currentWeatherDiv.innerHTML = content;
    
    display.appendChild(currentWeatherDiv);
   
}

function filterData(currentWeather, weatherIcons) {
  // const currentWeather = weatherData.current; 
    // console.log(currentWeather.weather)
    const data = {
            date: dateConvert(currentWeather.dt),
            sunset: timeConvert(currentWeather.sunset),                        
            sunrise: timeConvert(currentWeather.sunrise),
            humidity: currentWeather.humidity,
            pressure: currentWeather.pressure,
            temperature: currentWeather.temp,
            feelsLike: currentWeather.feels_like,
            weather: currentWeather.weather[0],
            description: currentWeather.weather[0].description,
            icon: currentWeather.weather[0].icon,
          }
      return data
    }

export  async function displayDailyWeather(weatherData) {
    const dailyWeather = weatherData.daily;
    // console.log(dailyWeather)
}

function dateConvert(UNIX_timestamp){
    const timestamp = new Date(UNIX_timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = timestamp.getFullYear();
    const month = months[timestamp.getMonth()];
    const date = timestamp.getDate();
    const time = date + ' ' + month + ' ' + year; 
    return time;
  }

  function timeConvert(UNIX_timestamp){
    const timestamp = new Date(UNIX_timestamp * 1000);
    const hour = timestamp.getHours();
    const min = timestamp.getMinutes();
    const time = hour + ':' + min;   
    return time;
  }

  export function currentTime() {
    const timeDisplay = document.querySelector('.main_display__place_time')
    const date = new Date();  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(hours < 10)  {hours = '0' + hours};
    if(minutes < 10)  {minutes = '0' + minutes};
    timeDisplay.innerHTML = `${hours}:${minutes}`;
  }

  