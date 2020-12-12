
export  async function displayCurrentWeather(weatherData, weatherIcons) {
    const currentWeather = weatherData.current;

    const data = new FilterData(currentWeather.dt, currentWeather.sunset, currentWeather.sunrise, currentWeather.humidity, currentWeather.pressure, currentWeather.wind_speed, currentWeather.temp, currentWeather.feels_like, currentWeather.weather[0], currentWeather.weather[0].description, currentWeather.weather[0].icon)

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
   
    addDataDisplay(data.humidity, data.wind, data.pressure)
}

function addDataDisplay(humidity, wind, pressure) {
  const humidityBlock = document.querySelector('.j-add_info_humidity');
  const windBlock = document.querySelector('.j-add_info_wind');
  const pressureBlock = document.querySelector('.j-add_info_pressure');
  humidityBlock.innerHTML = humidity;
  windBlock.innerHTML = wind;
  pressureBlock.innerHTML = pressure;
}


function FilterData(date, sunset, sunrise, humidity, pressure, wind, temperature, feelsLike, weather, description, icon) {
  this.date = dateConvert(date);
  this.sunset = timeConvert(sunset);                        
  this.sunrise = timeConvert(sunrise);
  this.humidity = humidity;
  this.pressure = pressure;
  this.wind = wind;
  this.temperature = temperature;
  this.feelsLike = feelsLike;
  this.weather = weather;
  this.description = description;
  this.icon = icon;
}

  

export  async function displayDailyWeather(weatherData) {
    const dailyWeather = weatherData.daily;
     console.log(dailyWeather[0])

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

  