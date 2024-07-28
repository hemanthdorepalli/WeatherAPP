import React, { useState } from 'react'
import { FaSearch} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Inputs = ({setQuery, setUnits}) => {
      const [city, setCity] = useState("")

      const handleSearchClick = ()=>{
        if(city !== "") 
          setQuery({q: city})
      }
      const handleLocationClick = ()=>{
        if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition((position) =>{
            const {latitude, longitude} = position.coords
            setQuery({lat: latitude, lon: longitude })
           },
          (position)=>{
              console.log(position)
              alert("Cannot Read User Current Location! Please Allow Location")
          })
        }
      }
      
  return (
    <div className='lg:flex lg:flex-row  lg:justify-between px-8 lg:items-center nav' >
        <div className='lg:font-bold lg:text-3xl '>
               <p className='weather'>Weather</p>
        </div>
        <div className='flex flex-row justify-center items-center w-2/4'>
            <input  
                value={"" || city}
                onChange={(e)=>{setCity(e.currentTarget.value)}}
                placeholder='Search for city...'        
                type="text"  
                className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize Search-bar'
            />
          <FaSearch size={30} className="cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}/> 
        </div>
        
        <div><FaLocationDot size={30} className="cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick}/></div>

        <div className='flex flex-row items-center justify-center'>
            <button name='metric'  className='lg:text-2xl  text-white lg:font-bold cursor-pointer transition ease-out hover:scale-125' onClick={() => setUnits("metric")}>°C</button>
            <p className='lg:text-2xl text-white font-light'> |</p>
            <button name='imperial' className='lg:text-2xl text-white font-bold cursor-pointer transition ease-out hover:scale-125' onClick={() => setUnits("imperial")}>°F</button>
        </div>
    </div>
  )
}

export default Inputs