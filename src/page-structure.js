import "./styles.css";

function createSearchBar() {
  const body = document.querySelector("body");
  const containerBar = document.createElement("div");
  const form = document.createElement("form");
  const button = document.createElement("button");
  const input = document.createElement("input");

  containerBar.setAttribute("id", "search-bar");
  form.setAttribute("id", "form-bar");
  button.setAttribute("id", "button-bar");
  button.setAttribute("type", "button");
  containerBar.setAttribute("id", "search-bar");
  input.setAttribute("id", "input-bar");
  input.setAttribute("autocomplete", "off");
  input.setAttribute("type", "text");
  input.setAttribute("minlength", "2");
  input.setAttribute("placeholder", "Enter the city name");

  button.textContent = "SEARCH";

  body.appendChild(form);
  form.appendChild(containerBar);
  containerBar.appendChild(input);
  containerBar.appendChild(button);
}

function createWeatherHtml() {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  const top = document.createElement("div"); // where the city name and weather condition will go.
  const bottom = document.createElement("div"); // where the temperature and other details will go.
  const city = document.createElement("h1");
  const condition = document.createElement("h3");
  const degrees = document.createElement("div");
  const numberDegrees = document.createElement("p");
  const unitDegrees = document.createElement("p");
  const details = document.createElement("div");
  const feelsLike = document.createElement("p");
  const wind = document.createElement("p");
  const humidity = document.createElement("p");

  container.classList.add("container-weather");
  top.classList.add("container-texts");
  bottom.classList.add("container-numbers");
  city.classList.add("city-text");
  condition.classList.add("condition-text");
  degrees.setAttribute("id", "degrees");
  numberDegrees.setAttribute("id", "number-degrees");
  unitDegrees.setAttribute("id", "unit-degrees");
  details.setAttribute("id", "details-weather");
  feelsLike.classList.add("detail");
  feelsLike.setAttribute("id", "feels-like");
  wind.classList.add("detail");
  wind.setAttribute("id", "wind");
  humidity.classList.add("detail");
  humidity.setAttribute("id", "humidity");

  body.appendChild(container);
  container.appendChild(top);
  container.appendChild(bottom);
  top.appendChild(city);
  top.appendChild(condition);
  bottom.appendChild(degrees);
  degrees.appendChild(numberDegrees);
  degrees.appendChild(unitDegrees);
  bottom.appendChild(details);
  details.appendChild(feelsLike);
  details.appendChild(wind);
  details.appendChild(humidity);
}

function fillWeatherHtml(data) {
  const container = document.querySelector(".container-weather");
  const city = document.querySelector(".city-text");
  const condition = document.querySelector(".condition-text");
  const numberDegrees = document.querySelector("#number-degrees");
  const unitDegrees = document.querySelector("#unit-degrees");
  const feelsLike = document.querySelector("#feels-like");
  const wind = document.querySelector("#wind");
  const humidity = document.querySelector("#humidity");

  if (container.classList.contains("fade-in")) {
    container.classList.remove("fade-in");
    // eslint-disable-next-line no-unused-expressions
    container.offsetWidth;
    container.classList.add("fade-in");
  } else {
    container.classList.add("fade-in");
  }

  // THIS LINES ARE ADDED IN THE CASE THE USER INPUTS A CONTINENT LIKE AFRICA.
  let location;
  if (data.location.includes(undefined)) {
    location = data.location.split(",");
    location.pop();
  } else {
    location = data.location;
  }

  city.innerText = location;
  condition.innerText = data.condition;
  numberDegrees.innerText = data.currentTemp;
  unitDegrees.innerText = "°C";
  feelsLike.innerText = `Feels like: ${data.feelsLike} °C`;
  wind.innerText = `Wind: ${data.wind}`;
  humidity.innerText = `Humidity: ${data.humidity}`;
}

/* eslint-disable import/prefer-default-export */
export { createWeatherHtml, createSearchBar, fillWeatherHtml };
