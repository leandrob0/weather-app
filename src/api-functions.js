/* eslint-disable import/prefer-default-export */

function processData(data) {
  const finalData = {
    location: `${data.name}, ${data.sys.country}`,
    condition: data.weather[0].description,
    feelsLike: data.main.feels_like,
    currentTemp: data.main.temp,
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

    // const unitUsed = (unit === 'metric') ? 'C' : 'F';
    // const temperatura = `Temperatura en ${city}: ${ tempData.main.temp } °${unitUsed}`;
    const processedData = processData(weatherData);
    return processedData;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

export { getCityTemp };
