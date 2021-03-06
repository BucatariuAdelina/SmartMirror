const cityForm = document.querySelector("#weatherForm");
const city = 'cugir';
console.log("weather!!");

const getWeatherCondition = async(city) => (

    await fetch(`http://api.weatherstack.com/(addYourKey)${city}`)

    .then(res => res.json())
    .then(data => {

        console.log(data)

        let div = document.createElement("div");
        div.setAttribute("id","conditions");
        let img = document.createElement("img");
        img.setAttribute("src",data.current.weather_icons[0]);
        img.setAttribute("loading","lazy");

        let weatherDesc = document.createElement("h4");
        let weatherDescNode = document.createTextNode(data.current.weather_descriptions[0]);
        weatherDesc.appendChild(weatherDescNode);
        weatherDesc.style.color= '#ffffff';

        let city = document.createElement("h2");
        let cityNode = document.createTextNode(data.request.query);
        city.appendChild(cityNode);
        city.style.color= '#ffffff';
        
        let temp = document.createElement("div");
        let tempNode = document.createTextNode(data.current.temperature + " °C" );
        temp.appendChild(tempNode);

        div.appendChild(img);
        div.appendChild(weatherDesc);
        div.appendChild(temp);
        div.appendChild(city);

        document.querySelector("main").appendChild(div);

    }).catch( err => console.log(err))

)

document.addEventListener("DOMContentLoaded", (e) => {
    let conditionsDiv = document.querySelector("#conditions");
    if (conditionsDiv) {
        document.querySelector("main").removeChild(conditionsDiv);
    }
    getWeatherCondition(city);
    console.log("weather!!");
})



