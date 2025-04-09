import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLikes: 43.49,
    humidity: 41,
    temp: 37.83,
    tempMin: 37.83,
    tempMax: 37.83,
    weather: "broken clouds",
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }
  return (
    <div>Weather App by Delta
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
    </div>
  )
}