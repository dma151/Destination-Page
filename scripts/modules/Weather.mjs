
export default function Weather () {

    const apiKey = "af49a4791bf97524e0cf3569333a982a";
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {

        const {latitude, longitude} = position.coords
        makeApiCall(latitude, longitude);

    }

    function error () {
        alert('Sorry no position available');
    }

    const makeApiCall = async (lat, lon) => {
        const weatherDiv = document.createElement("div");
        const header = document.createElement("h2");
        header.innerText = "Current Weather"
        const details = document.createElement("ul");

        const location = document.createElement("li");
        location.innerText = "Current Location : ";
        
        const feelsLike = document.createElement("li");
        feelsLike.innerText = "Feels like : ";

        const humidity = document.createElement("li");
        humidity.innerText = "Humidity: ";

        const temperature = document.createElement("li");
        temperature.innerText = "Temperature: ";

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        const json = await res.json();
        location.innerText += json.name;
        const humid = (json.main.feels_like - 273) * 9/5 + 32;
        const roundedHumid = humid.toFixed(1)
        feelsLike.innerText += roundedHumid + " \u00B0F";
        humidity.innerText += json.main.humidity;
        const temp = (json.main.temp - 273) * 9/5 + 32;
        const roundedTemp = temp.toFixed(1);
        temperature.innerText += roundedTemp + " \u00B0F";
        
        details.appendChild(location);
        details.appendChild(feelsLike);
        details.appendChild(humidity);
        details.appendChild(temperature);
        weatherDiv.appendChild(header);
        weatherDiv.appendChild(details);
        document.querySelector("header").appendChild(weatherDiv);
        return temperature
    }
}