
import { use, useState } from 'react';
import TextField from '@mui/material/TextField';
import TempBox from './TempBox.jsx';
import Button from '@mui/material/Button';
import "./SearchBox.css"
export default function SearchBox(){
    let [city,setCity]=useState("chennai");
    let [result,setResult]=useState({
        temp: 32.74,
        tempMin: 32.22,
        tempMax: 32.74,
        humidity: 59,
        weather: "overcast clouds"
    });
    let [err,setErr]=useState(false);
    let api_URL="https://api.openweathermap.org/data/2.5/weather";
    let api_key=import.meta.env.VITE_WEATHER_API_KEY;
    let searchData=async()=>{
        try{
            let response=await fetch(`${api_URL}?q=${city}&appid=${api_key}&units=metric`);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                weather:jsonResponse.weather[0].description,
            }
            setResult(result);
            setErr(false);
        }catch(err){
            setErr(true);
        }
    }
    let handleChange=()=>{
        setCity(event.target.value);
    }
    let  handleSubmit=(event)=>{  
        event.preventDefault();
        searchData();
        setCity("");
    }
    return (
        
        <div className='out'>
            <h1>The WeatherAPP</h1>
            <div className='search-out'>
                <div >
                    <h2>Know weather of your city!</h2>
                    <form action="" onSubmit={handleSubmit} >
                        <TextField id="City" label="City name" variant="outlined" required value={city} onChange={handleChange}/>
                        <br /><br />    
                        <Button variant="contained" type='submit' >
                            Search
                        </Button>
                    </form>
                </div>
                <div>
                    {err?"No such place exits! " :<TempBox result={result} />}
                </div>
            </div>
        </div>
    )
}