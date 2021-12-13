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

createSearchBar();
createWeatherHtml();
getDataAndPopulate('London');
