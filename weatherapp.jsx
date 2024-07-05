import { useState } from "react"
import Searchbox from "./Searchbox"
import Infobox from "./infobox"
export default function WEatherapp(){
    const [weatherinfo,setweatherinfo]=useState({
        city:"Delhi",
        temp:25.05,
        tempMin:25.05,
        tempmax:25.05,
        humidity:47,
        feels_like:24.84,
        weather:"haze",
    });
    let upadteinfo=(newinfo)=>{
        setweatherinfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <Searchbox upadteinfo={upadteinfo}/>
           
            <Infobox info={weatherinfo}/>
        </div>
    )
}