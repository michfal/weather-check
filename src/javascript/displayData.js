
export  async function displayCurrentWeather(weatherData, weatherIcons) {
    const currentWeather = weatherData.current;

    const data = new FilterData(currentWeather.dt, currentWeather.sunset, currentWeather.sunrise, currentWeather.humidity, currentWeather.pressure, currentWeather.wind_speed, currentWeather.temp, currentWeather.feels_like, currentWeather.weather[0], currentWeather.weather[0].description, currentWeather.weather[0].icon)

      const content = `
    <h2 class="info_text info_text--large_scrn">${data.date}</h2>
    
    <div class="weather_basic_info">
      ${weatherIcons[data.icon]}
      <h2 class="info_text info_text--temperature_main">${Math.round(data.temperature)}&#176C</h2>
    </div>
    <div class="main_display__weather_description">
      <h2 class="info_text">${data.description}</h2>
      <h2 class="info_text">Feels like ${Math.round(data.feelsLike)}&#176C</h2>
    </div>
      `
    
    const display = document.querySelector('.main_display__weather')
    display.innerHTML = ''
    

    display.innerHTML = content;
    
   
    addDataDisplay(data.humidity, data.wind, data.pressure);
    displayDateInfo(data.date, data.sunset, data.sunrise)
}

function addDataDisplay(humidity, wind, pressure) {
  const addInfo = document.querySelector('.j-add_info');
  const humidityBlock = document.querySelector('.j-add_info_humidity');
  const windBlock = document.querySelector('.j-add_info_wind');
  const pressureBlock = document.querySelector('.j-add_info_pressure');
  humidityBlock.innerHTML = humidity;
  windBlock.innerHTML = wind;
  pressureBlock.innerHTML = pressure;

  addInfo.classList.remove('hidden')
}

function displayDateInfo(day, sunrise, sunset) {
  const dayNode = document.querySelector('.j-day')
  const sunriseNode = document.querySelector('.j-sunrise')
  const sunsetNode = document.querySelector('.j-sunset')
  dayNode.innerHTML = day
  sunriseNode.innerHTML = `Sunrise ${sunrise}`
  sunsetNode.innerHTML = `Sunset ${sunset}`
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

  

export  async function displayDailyWeather(weatherData, weatherIcons) {
    const dailyWeather = weatherData.daily;

     const display = document.querySelector('.j-seven_days_display');
     display.innerHTML = '';
      dailyWeather.forEach((e) => {
      const data = new FilterData(e.dt, e.sunset, e.sunrise, e.humidity, e.pressure, e.wind_speed, e.temp, e.feels_like, e.weather[0], e.weather[0].description, e.weather[0].icon);
      const content = `
      <div class="seven_days_display__sub_block seven_days_display__sub_block_date"><h2 class="seven_days_display__sub_block_header">${data.date}</h2></div>
      <div class="seven_days_display__sub_block seven_days_display__sub_block_temperature">${weatherIcons[data.icon]}
        <div class="seven_days_display__sub_block_temperature_values_container">
          <h2 class="seven_days_display__sub_block_header seven_days_display__sub_block_header--big">${Math.round(data.temperature.day)}&#176C</h2>
          <h2 class="seven_days_display__sub_block_header">${Math.round(data.feelsLike.day)}&#176C</h2>
        </div>
      </div>
    
      <div class="seven_days_display__sub_block">${weatherIcons.wind}<h2 class="seven_days_display__sub_block_header">${Math.round(data.wind)} km/h</h2></div>
      <div class="seven_days_display__sub_block">${weatherIcons.humidity}<h2 class="seven_days_display__sub_block_header">${data.humidity}%</h2></div>
      <div class="seven_days_display__sub_block">${weatherIcons.pressure}<h2 class="seven_days_display__sub_block_header">${data.pressure} hPa</h2></div>
      `;

 
      const weatherDiv = document.createElement('DIV');
      weatherDiv.classList.add('seven_days_display__block')
      weatherDiv.innerHTML = content;
      const icon = document.querySelector('svg');
      icon.classList.add('seven_days_display__sub_block_temperature_icon')
 
      display.appendChild(weatherDiv);
      display.classList.remove('hidden')
    })

}

function dateConvert(UNIX_timestamp){
    const timestamp = new Date(UNIX_timestamp * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    const month = months[timestamp.getMonth()];
    const date = timestamp.getDate();
    const time = date + ' ' + month; 
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

  