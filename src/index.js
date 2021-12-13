// THIS IS THE MAIN FILE.
// IT DOESN'T MATTER THAT THE API_KEY IS SHOWING NOW FOR NOW, SINCE IT IS FOR LEARNING PORPUSES AND A FREE API. LATER I'LL LEARN TO HIDE IT.
import "./styles.css";
import { createSearchBar , createWeatherHtml , fillWeatherHtml } from "./page-structure";
import { getCityTemp } from  "./api-functions";

async function getDataAndPopulate(location) {  
    let data = await getCityTemp(location);

    if(data === undefined) {
        data = await getCityTemp('London');
        fillWeatherHtml(data);
    } else {
        fillWeatherHtml(data)
    }
}

function validateInput(userInput) {
    if(!userInput) {
        return 0;
    }

    return 1;
}

createSearchBar();
createWeatherHtml();
getDataAndPopulate('London');

const button = document.querySelector("#button-bar");
const input = document.querySelector("#input-bar");

// this just makes the page not reload when pressing enter but cant make it work to search.
input.setAttribute("onkeydown", "return (event.keyCode!=13);");

button.addEventListener('click', () => {
    const inputValue = input.value;

    const validated = validateInput(inputValue);
    if(validated === 1) getDataAndPopulate(inputValue);
});

button.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        const inputValue = input.value;

        const validated = validateInput(inputValue);
        if(validated === 1) getDataAndPopulate(inputValue);
    }
});