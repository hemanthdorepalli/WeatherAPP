import React from 'react';
// import sun from '../assets/weatherIcon.png';

const Forecast = ({title, data}) => {
  return (
    <div className='mx-5 forecast-div'>
     <div className=''>
          <p className='lg:font-medium lg:text-xl uppercase'> {title}</p>  
       </div> 

       <div className='flex flex-row justify-between lg:mt-4  gap-x-5'>
         {data.map((d, index)=>(
              <div className='border flex flex-col justify-evenly items-center Hourly-forecast' key={index}>
              <p className='lg:text-l'>{d.title}</p>
              <img src={d.icon} alt="" className=''/>
              <p className=''>{d.temp.toFixed()}°</p>
            </div>
          ))}
            
             </div>

    </div>
  )
}

export default Forecast