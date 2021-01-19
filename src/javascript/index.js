import '../sass/style.scss';

import "regenerator-runtime/runtime.js";
import {getWeather} from './getData';
import {displayCurrentWeather} from './displayData';
import {displayDailyWeather} from './displayData';
import {currentTime} from './displayData'
import {getSearchFormData} from './searchForm';
import {weatherIcons} from './weatherIcons'

const welcomeScreen = document.querySelector('.welcome_screen');
const searchButton = document.querySelector('.j-search_button');
const searchButtonWelcome = document.querySelector('.j-search_button_welcome');


searchButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const formData = getSearchFormData();
    const city = formData
    console.log(formData !== "")
    const weatherData = await getWeather(city, process.env.API_KEY);
    await displayCurrentWeather(weatherData, weatherIcons)
    await displayDailyWeather(weatherData, weatherIcons)
    welcomeScreen.classList.add('hidden')
})
searchButtonWelcome.addEventListener('click', async (event) => {
    event.preventDefault()
    const formData = getSearchFormData();
    const city = formData
    console.log(formData !== "")
    const weatherData = await getWeather(city, process.env.API_KEY);
    await displayCurrentWeather(weatherData, weatherIcons)
    await displayDailyWeather(weatherData, weatherIcons)
    welcomeScreen.classList.add('hidden')
})



currentTime()