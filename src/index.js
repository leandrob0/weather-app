// THIS IS THE MAIN FILE.
// IT DOESN'T MATTER THAT THE API_KEY IS SHOWING NOW FOR NOW, SINCE IT IS FOR LEARNING PORPUSES AND A FREE API. LATER I'LL LEARN TO HIDE IT.

async function getCityTemp(city, unit) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=895c4d9498d80d80a266b2ec0fc6b67a&units=${unit}`, { mode: "cors" });
        const tempData = await response.json();

        const unitUsed = (unit === 'metric') ? 'C' : 'F';
        const temperatura = `Temperatura en ${city}:${ tempData.main.temp } °${unitUsed}`;
        console.log(temperatura);
    } catch (err) {
        console.log(err);
    }
}

getCityTemp('London','metric');