import React from 'react'
import { FaTemperatureHalf, FaWind, FaArrowDown, FaArrowUp  } from "react-icons/fa6";
import { BiDroplet } from "react-icons/bi";
import { GiSunrise, GiSunset } from "react-icons/gi";

const TimeAndLocation = ({weather: {formatTime, name, country, details, temp, feels_like, temp_min,  temp_max, humidity, speed, sunrise, sunset,icon,}, units}) => {
  return (
    <>
    
          <div className='lg:w-1/2 lg:border-r-2 lg:flex lg:flex-col lg:justify-between lg:items-center TimeAndLocation'>
              <div className='formatTime'>
                <p className=' lg:text-xl lg:font-extralight'> 
                    {formatTime}
                </p>
              </div>
              <div className='country'>
                   <p className=' lg:text-3xl lg:font-medium'>
                    {name}, {country}
                   </p>
              </div>

              {/* temperature details */}
              <div className='details'>
                 <p className='lg:text-3xl lg:font-medium'>{details}</p>
         </div>
         <div className='flex flex-row items-center justify-center'>
                <img src={icon} alt="weather icon" className='h-10'/>
                <p className='lg:text-5xl temp-indicator'> {temp.toFixed()}° {units === 'metric' ? 'C' : 'F'} </p>
         </div>

         <div className='flex flex-row lg:gap-16 temp'>
              <div className='flex flex-col items-center justify-center tempearature-box border'>
                <div className='flex flex-row'>
                <FaTemperatureHalf size={30}/>
                <p className='lg:text-xl lg:font-medium'>Real feel</p>
                </div>
                <p className='lg:text-3xl lg:font-bold text-center'>{feels_like.toFixed()}°</p>
              </div>

            <div className='flex flex-col items-center justify-center tempearature-box border'>
             <div className='flex flex-row items-center justify-center'>
                <BiDroplet size={30}/>
                <p className='lg:text-xl lg:font-medium'>Humidity</p>
                </div>
                <p className='lg:text-3xl lg:font-bold text-center'>{humidity}%</p>
              </div>

            <div className='flex flex-col items-center justify-center tempearature-box border b'>
              <div className='flex flex-row items-center justify-center'>
                <FaWind size={30}/>
                <p className='lg:text-xl lg:font-medium'>Wind</p>
                </div>
                <p className='lg:text-3xl lg:font-bold text-center'>{speed.toFixed()} {units === 'metric' ? 'km/h' : 'm/s'}</p>
              </div>
         </div>

          <div className='flex flex-row gap-1 border items-center justify-center temp-rise'>
            <div className='flex flex-row items-center justify-center'>
            <GiSunrise  size={20}/>
            <p className='ml-1'>Rise: <span>{sunrise}</span></p>
            <p className=''>|</p>
           
            <GiSunset size={20}/>
            <p className='ml-1'>Set: <span>{sunset}</span></p>
            <p className=''>|</p>
            </div>

            <div className='flex flex-row items-center justify-center'>
            <FaArrowDown size={20}/>
            <p className='ml-1'>Low: <span>{temp_min.toFixed()}°{units === 'metric' ? 'C' : 'F'}</span></p>
            <p className=''>|</p>
            
            <FaArrowUp  size={20}/>
            <p className='ml-1'>Rise: <span>{temp_max.toFixed()}°{units === 'metric' ? 'C' : 'F'}</span></p>
            </div>
          </div>

          </div>
         


    </>
  )
}

export default TimeAndLocation