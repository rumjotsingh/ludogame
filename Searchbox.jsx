import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import "./Searchbox.css"
import { useState } from 'react';
import { red } from '@mui/material/colors';
export default function Searchbox({upadteinfo}){
    let[city,setcity]=useState("");
    let  [error,seterror]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="956d6fea49abc9877c7cb708c0c35a4a";
    let getweatherinfo= async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data=await response.json();
               let result={
                city:city,
                temp:data.main.temp,
                tempmin:data.main.temp_min,
                tempmax:data.main.temp_max,
                humidity:data.main.humidity,
                feels_like:data.main.feels_like,
                weather:data.weather[0].description,
            }
            console.log(result);
            return result;
            }
    catch(error){
       throw error
    }
}
   
    let handlechange= (event)=>{
        setcity(event.target.value);
    }
    let handlesubmit= async( event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setcity("");
            let newinfo=await getweatherinfo();
            upadteinfo(newinfo);   
         }catch(error){
            seterror(true);
         }
        
    }
    return(
        <div className="serachbox">
        
        <form onSubmit={handlesubmit}>
        <TextField id="city" label="City Name" variant="outlined"  required value={city} onChange={handlechange}/>
         <br></br>
         <br></br>
        <Button variant="contained" type="submit ">
        Search
        </Button>
       { error&& <p style={{color:"red"}}>no such place exits</p>}
        </form>
       
        </div>
    )
}