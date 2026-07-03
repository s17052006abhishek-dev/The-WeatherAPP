import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

import "./TempBox.css";
export default function TempBox({result}){
        let Rain_url="https://images.unsplash.com/photo-1607500098489-1991d1fbab7a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        let Sun_url="https://images.unsplash.com/photo-1525490829609-d166ddb58678?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        let Cold_url="https://www.livemint.com/lm-img/img/2024/01/25/382x214/Morning-Fog-Chill-8_1706158370870_1706158372312.jpg"
        


    return (
        <div className='outer' >
            <Card sx={{ maxWidth: 345 }} className="temp" >
                <CardMedia
                component="img"
                alt="green iguana"
                    height="140"
                    image={
                        result.humidity>80?Rain_url:result.temp>20?Sun_url:Cold_url
                    }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {result.city}{ result.humidity>80? <ThunderstormIcon/> :result.temp>20? <SunnyIcon/> :  <AcUnitIcon/> }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Temperature: {result.temp}&deg;C <br />
                    MIN_Temperature: {result.tempMin}&deg;C <br />
                    MAX_Temperature: {result.tempMax}&deg;C <br />
                    Humidity: {result.humidity}%<br />
                    Weather: {result.weather} <br />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}