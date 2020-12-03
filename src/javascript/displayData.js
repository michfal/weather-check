export  async function displayCurrentWeather(weatherData, weatherIcons) {
    const currentWeather = weatherData.current;     //get data for current date
    console.log(currentWeather);

    const date = dateConvert(currentWeather.dt)     //get date
    // const time = timeConvert(currentWeather.dt)
                                                           //get feels like temperature
    const sunset = timeConvert(currentWeather.sunset)      //get sunset 
    // console.log(sunset)                             
    const sunrise = timeConvert(currentWeather.sunrise)           //get sunrise
    // console.log(sunrise)
    const humidity = currentWeather.humidity                //get humidity
    // console.log(humidity)
    const pressure = currentWeather.pressure                //get pressure
    // console.log(pressure)
    const temperature = currentWeather.temp;                //get temperature
    const feelsLike = currentWeather.feels_like             //get feels like temperature
    // console.log(feelsLike)
    const weather = currentWeather.weather[0];              //get embedded weather info
    const description = weather.description;                //get description
    
    const icon = weather.icon;                              //get icon
    console.log(icon)
    // const display = document.querySelector('.main_display__weather')
    // display.innerHTML = ''
    buildDisplayDom(date, sunrise, sunset, feelsLike, temperature, description, weatherIcons[icon])
   
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

  function buildDisplayDom(date, sunrise, sunset, feelsLike, temperature, description, icon) {
    console.log(icon)
    const content = `
    <h2 class="info_text info_text--large_scrn">${date}</h2>
    
    <div class="weather_basic_info">
      ${icon}
      <h2 class="info_text info_text--temperature_main">${temperature} C</h2>
    </div>
    <h2 class="info_text">${description}</h2>
    <h2 class="info_text">Feels like ${feelsLike}</h2>
    `
    
    const display = document.querySelector('.main_display__weather')
    display.innerHTML = ''
    
    const currentWeatherDiv = document.createElement('DIV');
    currentWeatherDiv.classList.add('current_weather')
    currentWeatherDiv.innerHTML = content;
    
    display.appendChild(currentWeatherDiv);

    // const weatherIcon = document.createElement('DIV');
    // weatherIcon.classList.add('current_weather_icon')
    // weatherIcon.innerHTML = icon;
    // display.appendChild(weatherIcon);
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

  