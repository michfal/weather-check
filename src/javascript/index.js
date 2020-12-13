import '../sass/style.scss';

import "regenerator-runtime/runtime.js";
import {getWeather} from './getData';
// import {getCoordinates} from './getData';
// import {getWeatherForCity} from './getData';
import {displayCurrentWeather} from './displayData';
import {displayDailyWeather} from './displayData';
import {currentTime} from './displayData'
import {getSearchFormData} from './searchForm';
import {weatherIcons} from './weatherIcons'




// console.log(weatherIcons["01d"]);

const searchButton = document.querySelector('#search_button');

window.addEventListener('load', async (event) => {
    
    event.preventDefault()
    const formData = getSearchFormData();
    // const country = formData.country
    const city = formData
    // console.log(city)
    
    const weatherData = await getWeather(city, process.env.API_KEY);
    console.log(weatherData)
    await displayCurrentWeather(weatherData, weatherIcons)
    await displayDailyWeather(weatherData, weatherIcons)
})

// searchButton.addEventListener('click', async (event) => {
    
//     event.preventDefault()
//     const formData = getSearchFormData();
//     // const country = formData.country
//     const city = formData
//     // console.log(city)
    
//     const weatherData = await getWeather(city, key);
//     await displayCurrentWeather(weatherData)
//     await displayDailyWeather(weatherData)
// })



currentTime()