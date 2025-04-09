import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
export default function InfoBox({info}) {
  const INIT_url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6qsWjkXkTvI6GYtnx0Alu8boVwtAVvSL0w&s";
    const HOT_URL = " https://images.inc.com/uploaded_files/image/1920x1080/getty_483631780_200013332000928032_260786.jpg";
    const RAIN_URL = "https://www.telegraph.co.uk/multimedia/archive/00995/wet-weather-460_995731c.jpg";
    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiv9783YmU-60wHmZG2SyhHqFkyyV9r8N9w&s";
  return (
    <div>
      <h1><i>Weather Info <b style={{color: "brown"}}>{info.weather}</b></i></h1>
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL:COLD_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { info.city }&nbsp;&nbsp;
            { info.humidity > 80 ? <ThunderstormSharpIcon/> : info.temp > 20 ? <WbSunnySharpIcon/>:<AcUnitIcon/> }
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <div>Temperature = {info.temp}&deg;C</div>
            <br></br>
           
            <div>Humidity = {info.humidity}%</div>
            <br></br>
            <div>TempMin = {info.tempMin}&deg;C</div>
            <br></br>
            <div>TempMax = {info.tempMax}&deg;C</div>
            <br></br> 
            <div>The weather can described as <i>{info.weather}</i> and
            feels likes as <i>{info.feelsLikes}&deg;C</i></div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}