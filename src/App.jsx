
import { useEffect, useState } from 'react'
import './App.css'
import Forecast from './components/Forecast'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import getFormattedWeatherData from './weatherService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function App() {
  const [query, setQuery] = useState({q: 'New Delhi'})
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState("")

  const fetchWeather = async ()=>{
    const cityName = query.q ? query.q : 'current location';
    toast.info(`Fetching weather data for ${cityName}`)

    await getFormattedWeatherData({...query, units,}).then((data) => {
      toast.success(`Fetched Weather data for ${data.name}, ${data.country}`)
      setWeather(data)
    });    
  }

  useEffect(() => {
    // fetchWeather();
    axios.get( fetchWeather() )
  }, [query, units ])

  const formatBackground = ()=>{
    try{
      if(weather.icon === 'https://openweathermap.org/img/wn/50d@2x.png') return "Mist_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/50n@2x.png') return "NightMist_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/10d@2x.png') return "Drizzle_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/10n@2x.png') return "NightDrizzle_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/13d@2x.png') return "Snow_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/13n@2x.png') return "NightSnow_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/50n@2x.png') return "Clouds_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/04d@2x.png') return "Clouds_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/02d@2x.png') return "Clouds_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/03d@2x.png') return "Clouds_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/50n@2x.png') return "NightClouds_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/04n@2x.png') return "NightClouds_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/02n@2x.png') return "NightClouds_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/03n@2x.png') return "NightClouds_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/09d@2x.png') return "ShowerRain_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/09n@2x.png') return "NightShowerRain_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/01d@2x.png') return "Clear_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/01n@2x.png') return "NightClear_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/50d@2x.png') return "Haze_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/50n@2x.png') return "NightHaze_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/11d@2x.png') return "Thunderstorm_wallpaper_background"
      if(weather.icon === 'https://openweathermap.org/img/wn/11n@2x.png') return "NightThunderstorm_wallpaper_background"
    }catch(e){
      console.log(e)
    }
  }


  return (
    
      <div className={` ${formatBackground()} App`}>
        
        <Inputs setQuery={setQuery} setUnits={setUnits}/>

        {weather && (
          <div className='lg:m-5 lg:flex lg:flex-row '>
          <TimeAndLocation weather = {weather} units={units}/>
          <div className='lg:flex lg:flex-col lg:justify-between  forecast'>
          <Forecast title="5 hour forecast" data={weather.hourly}/>
          <Forecast title="daily forecast"  data={weather.daily}/>
          </div>
          </div>
        )}
           <ToastContainer autoClose={2500} hideProgressBar={true} theme='colored'/>
      </div>
   
  )
}

export default App
