// THIS IS THE MAIN FILE.
// IT DOESN'T MATTER THAT THE API_KEY IS SHOWING NOW FOR NOW, SINCE IT IS FOR LEARNING PORPUSES AND A FREE API. LATER I'LL LEARN TO HIDE IT.
import "./styles.css";
import {
  createSearchBar,
  createWeatherHtml,
  fillWeatherHtml,
} from "./page-structure";
import { getCityTemp } from "./api-functions";

// FOR NOW IT IS NOT POSSIBLE TO SEARCH FOR CITY AND COUNTRY, (TO BE ADDED LATER).

async function getDataAndPopulate(location) {
  let data = await getCityTemp(location);

  if (data === undefined) {
    data = await getCityTemp("London");
    fillWeatherHtml(data);
  } else {
    fillWeatherHtml(data);
  }
}

createSearchBar();
createWeatherHtml();

const input = document.querySelector("#input-bar");
// do not reload on enter press.
input.setAttribute("onkeydown", "return (event.keyCode!=13);");

getDataAndPopulate("London");

const button = document.querySelector("#button-bar");

// this just makes the page not reload when pressing enter but cant make it work to search.

button.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue) {
    getDataAndPopulate(inputValue);
  }
});
