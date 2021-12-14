/* eslint-disable import/prefer-default-export */

function processData(data) {
  const finalData = {
    location: `${data.name}, ${data.sys.country}`,
    condition: data.weather[0].description,
    feelsLike: parseInt(data.main.feels_like, 10),
    currentTemp: parseInt(data.main.temp, 10),
    wind: `${data.wind.speed} KPH`,
    humidity: `${data.main.humidity}%`,
  };

  return finalData;
}

async function getCityTemp(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=895c4d9498d80d80a266b2ec0fc6b67a&units=metric`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    const processedData = processData(weatherData);

    return processedData;
    
  } catch (err) {
    return undefined;
  }
}

export { getCityTemp };
