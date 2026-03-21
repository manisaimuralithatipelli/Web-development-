document.getElementById("btn").addEventListener("click", getWeather);

document.getElementById("error").innerHTML = "<b>PLEASE ENTER CITY</b>";
document.getElementById("icon").style.display = "none";  
document.getElementById("icon").src = "";  
document.querySelector(".img-bg").style.display = "none";

document.querySelector(".weather-box").style.display = "none";

async function getWeather() {
let city = document.getElementById("city").value.trim().toUpperCase();;

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b052382adf8d88737dea987c953ddf6&units=metric`;

let response = await fetch(url);
let data = await response.json();

if (data.cod !== 200) {
document.getElementById("error").innerHTML = "<b>CITY NOT FOUND</b>";
document.getElementById("error").style.color = "red";

document.getElementById("icon").style.display = "none";  
document.getElementById("icon").src = "";  
document.querySelector(".img-bg").style.display = "none";  

document.querySelector(".weather-box").style.display = "none";

document.getElementById("cityname").innerText = "";  
document.getElementById("country").innerText = "";  
document.getElementById("temp").innerText = "";  
document.getElementById("feels").innerText = "";  
document.getElementById("condition").innerText = "";  
document.getElementById("humidityValue").innerText = "";  
document.getElementById("windValue").innerText = "";  
document.getElementById("sunriseValue").innerText = "";  
document.getElementById("sunsetValue").innerText = "";  
return;

}

document.getElementById("error").innerText = "";
document.querySelector(".weather-box").style.display = "grid";

document.getElementById("cityname").innerText = city;
document.getElementById("country").innerText = data.sys.country;
document.getElementById("temp").innerText = data.main.temp + "°C";
document.getElementById("feels").innerText = "Feels like: " + data.main.feels_like + "°C";
document.getElementById("condition").innerText = "Condition: " + data.weather[0].main;

let icon = data.weather[0].icon;
document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
document.getElementById("icon").style.display = "inline";

document.querySelector(".img-bg").style.display = "flex";

document.querySelectorAll(".bg-video").forEach(v => v.style.display = "none");

let weather = data.weather[0].main;

if (weather === "Clear")
document.getElementById("clearvideo").style.display = "block";
else if (weather === "Clouds")
document.getElementById("cloudyvideo").style.display = "block";
else if (weather === "Rain")
document.getElementById("rainVideo").style.display = "block";
else if (weather === "Snow")
document.getElementById("snowvideo").style.display = "block";
else if (weather === "Thunderstorm")
document.getElementById("thunderstormvideo").style.display = "block";
else if (weather === "Haze")
document.getElementById("hazevideo").style.display = "block";

let sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
let sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

document.getElementById("humidityValue").innerText = data.main.humidity + "%";
document.getElementById("windValue").innerText = data.wind.speed + " km/h";
document.getElementById("sunriseValue").innerText = sunrise;
document.getElementById("sunsetValue").innerText = sunset;
}