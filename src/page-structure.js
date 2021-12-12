import "./styles.css";
import { getCityTemp } from "./api-functions";

function createSearchBar() {
  // create the search bar.
}

async function createWeatherHtml(location) {
  const data = await getCityTemp(location);

  if (data === undefined) {
    console.log("city invalid");
    return;
  }

  console.log(data);

  const body = document.querySelector("body");
  const container = document.createElement("div");
  const top = document.createElement("div"); // where the city name and weather condition will go.
  const bottom = document.createElement("div"); // where the temperature and other details will go.
  const city = document.createElement("h1");
  const condition = document.createElement("h3");

  container.classList.add("container-weather");
  top.classList.add("container-texts");
  bottom.classList.add("container-numbers");
  city.classList.add("city-text");
  condition.classList.add("condition-text");

  city.innerText = data.location;
  condition.innerText = data.condition;

  body.appendChild(container);
  container.appendChild(top);
  container.appendChild(bottom);
  top.appendChild(city);
  top.appendChild(condition);
}

/* eslint-disable import/prefer-default-export */
export { createWeatherHtml, createSearchBar };
