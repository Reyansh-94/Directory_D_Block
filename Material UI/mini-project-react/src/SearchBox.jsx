import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import './App.css';
import './SearchBox.css';
export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1031e82180981b48e6b9fba105594774";

  let getWhetherInfo = async () => {
    try {
  let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
   let jsonResponse = await response.json();
   console.log(jsonResponse);
   let result = {
    city: city,
    temp: jsonResponse.main.temp,
    tempMin: jsonResponse.main.temp_min,
    tempMax: jsonResponse.main.temp_max,
    humidity: jsonResponse.main.humidity,
    feelsLikes: jsonResponse.main.feels_like,
    weather: jsonResponse.weather[0].description,
   }
   console.log(result);
   return result;
      }catch(err) {
        throw err;
      }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let handleSubmit = async (event) => {
    try {
            event.preventDefault();
      console.log(city);
      setCity("");
     let newInfo = await getWhetherInfo();
     updateInfo(newInfo);
    }catch(err) {
      setError(true);
    }

  }
  return (
      <div>
        <h3>Search For Weather</h3>
        <form onSubmit={handleSubmit}>
          <TextField 
          id="outlined-basic" 
          label="City name" 
          variant="outlined" 
          required 
          value={city}
          onChange={handleChange}
          />
          <br/><br/>
          <Button variant="contained" type="submit">Submit</Button>
        </form>
        {error && <p style={{color: "red"}}>No such api place exists!</p>}
      </div>
  );
}