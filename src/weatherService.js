import { DateTime } from "luxon";

const api_key ="c9fff9db3ed46c3c6b5d69bbfe023b86";
const Base_url = "https://api.openweathermap.org/data/2.5/";

const getWeathetData =async (infoType, searchParams)=>{
       const url = new URL(Base_url+ "/" + infoType);
       url.search =new URLSearchParams({...searchParams, appid: api_key});

       return fetch(url)
       .then((res) => res.json())

};
 const iconUrlFromCode = (icon) =>  `https://openweathermap.org/img/wn/${icon}@2x.png`

 const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
        timezone,
    } = data

    const {main: details, icon} = weather[0]
    const formatTime = formatLocalTime(dt, timezone)
    return {lat,
            lon,
            temp,
            feels_like,
            temp_min, 
            temp_max,
            humidity,
            name,
            dt, 
            country,
            details,
            icon: iconUrlFromCode(icon),
            sunrise: formatLocalTime(sunrise, timezone, 'hh:mm a'),
            sunset: formatLocalTime(sunset, timezone, 'hh:mm a'),
            weather,
            speed,
            timezone,
            formatTime,
        }
};

      const formatForecastWeather = (secs, offset, data) =>{
        // hourly
        const hourly = data.filter((f)=> f.dt > secs)
        .slice(0, 5)
        .map((f) => ({
            temp: f.main.temp,
            title: formatLocalTime(f.dt, offset, "hh:mm a"),
            icon: iconUrlFromCode(f.weather[0].icon),
            date: f.dt_txt,
        }))
        // daily
        const daily = data.filter((f) => f.dt_txt.slice(-8) === "00:00:00")
        .map((f) =>({
            temp: f.main.temp,
            title: formatLocalTime(f.dt, offset, "ccc"),
            icon: iconUrlFromCode(f.weather[0].icon),
            date: f.dt_txt,
        }))
        return {hourly, daily}
      }     

     const getFormattedWeatherData = async (searchParams) => {
        const formattedCurrentWeather = await  getWeathetData
           ('weather', searchParams)
           .then(formatCurrentWeather);

        const {dt, timezone, lat, lon} = formattedCurrentWeather

     const formattedForecastWeather = await getWeathetData('forecast', 
        {lat,
         lon,
         units: searchParams.units,})
         .then((d) => formatForecastWeather(dt, timezone, d.list))
        
          return {...formattedCurrentWeather, ...formattedForecastWeather};
     }

    const formatLocalTime = (secs, offset, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") =>
                                DateTime.fromSeconds(secs + offset, { zone: "utc"}).toFormat(format)


     export default getFormattedWeatherData;
