export async function getWeather(city, key) {
        try {
        const coordinates = await getCoordinates(city, key)
        const weatherData = await getWeatherForCity(coordinates, key) 
        // await displayCurrentWeather(weatherData);
        // await displayDailyWeather(weatherData);
        return weatherData;
        }  catch (err) {
            console.log(err)
        }
  }
  
  
export  async function getCoordinates(city, key) {
      try {
        const responseCoord = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        const dataCoord = await responseCoord.json()
        const coordinates = await dataCoord.coord
        return coordinates
      } catch (err) {
        console.log("coordinates fetch error")
        console.log(err)
      }
      
  }
  
export  async function getWeatherForCity(coordinates, key) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${key}`)
      const data = await response.json()
      // console.log(data)
      return data
    } catch (err) {
      console.log("city fetch error")
      console.log(err)
    }
     
  }
  

  //this gets all thedata with one API call
  export  async function getWeatherData(city, key) {
    try {
      const responseData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
      const dataJson = await responseData.json()
      const data = await dataJson
      return data
    } catch (err) {
      console.log("coordinates fetch error")
      console.log(err)
    }
    
}


