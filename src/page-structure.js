import "./styles.css";

function createSearchBar() {
  const body = document.querySelector("body");
  const containerBar = document.createElement('div');
  const form = document.createElement('form');
  const button = document.createElement('button');
  const input = document.createElement('input');

  containerBar.setAttribute('id','search-bar');
  form.setAttribute('id','form-bar');
  button.setAttribute('id','button-bar');
  containerBar.setAttribute('id','search-bar');
  input.setAttribute('id','input-bar');
  input.setAttribute('type','text');
  input.setAttribute('minlength','2');
  input.setAttribute('placeholder','Enter the city name');

  button.textContent = 'SEARCH';

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

  container.classList.add("container-weather");
  top.classList.add("container-texts");
  bottom.classList.add("container-numbers");
  city.classList.add("city-text");
  condition.classList.add("condition-text");

  body.appendChild(container);
  container.appendChild(top);
  container.appendChild(bottom);
  top.appendChild(city);
  top.appendChild(condition);
}

function fillWeatherHtml(data) {
  const city = document.querySelector('.city-text');
  const condition = document.querySelector('.condition-text');

  city.innerText = data.location;
  condition.innerText = data.condition;
}

/* eslint-disable import/prefer-default-export */
export { createWeatherHtml, createSearchBar , fillWeatherHtml };
