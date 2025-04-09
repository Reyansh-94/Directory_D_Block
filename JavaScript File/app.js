const apiKey = "17f424abfae77dc0a6a72aef24d2222e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInp = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".feelsLike").innerHTML =
      data.main.feels_like + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".uv").innerHTML = data.weather[0].description;
    document.querySelector(".visibility").innerHTML =
      data.visibility / 1000 + " km";
    document.querySelector(".airPressure").innerHTML =
      data.main.pressure + " hPa";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src =
        "https://w7.pngwing.com/pngs/654/29/png-transparent-cloud-weather-scalable-graphics-icon-several-weather-icon-text-hand-cloud-thumbnail.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFUPUoEXv1C77grbQSATv7sfQ6zwvD5GeIeQp68-NSbNcEHhD3xPwphS4ped717RoSWI&usqp=CAU";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToR0qxd-HWAbf7M0TtcVhR5Co-ElND9Jh1Og&s";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pBaC2_6en05XEhB8GyV2ynlvOJrEURtbUQ&s";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFckqvahf4gwfKSFyTRLuB-DN1iHzSgIEtA&s";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchInp.value);
});
