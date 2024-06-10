import React, { useEffect, useState } from 'react'
import './App.css'

import sunny from './assets/sunny.png'
import temp from './assets/temp.png'
import min from './assets/min.png'
import max from './assets/max.png'
import humidity from './assets/humidity.png'
import pressure from './assets/pressure.png'
import wind from './assets/wind.png'

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=13.76703&lon=100.5705441&appid=7946be73a98c1b19f0b928ad8bf07350&units=metric'


const App = () => {

    const [infos, setInfos] = useState([])

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const showDate = date.getDate() + ' ' + month + ' ' + date.getFullYear();
    const showDay = weekday[date.getDay()];

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setInfos(data))
    }, [])

    // const rise = !!infos.sys ? infos.sys.sunrise : null
    // const set = !!infos.sys ? infos.sys.sunset : null

    // const unix = (id) =>{
    //     const sun = new Date(id*100)

    //     return(
    //         sun.getHours()+':'+sun.getMinutes()
    //     )
    // }

    return (
        <>
            <div className='container'>
                <div className='weatherSide'>
                    <div className='date-container'>
                        <div className='date-dayname'>
                            <h1>{showDay}</h1>
                        </div>
                        <div className='date-day'>
                            <h3>{showDate}</h3>
                        </div>
                        <div className='location'>
                            <h3>{!!infos.name ? infos.name : null}</h3>
                        </div>
                        <div className='sun'>
                            <img src={sunny} width={250} height={250} />
                        </div>
                    </div>
                    <div className='weather-container'>
                        <div className='weather-temp'>
                            {Math.ceil(!!infos.main ? infos.main.temp : null)} °C
                        </div>
                        <div className='icon'>
                            <img src={!!infos.weather && `http://openweathermap.org/img/w/${infos.weather[0].icon}.png`} width={50} height={50} />
                        </div>
                        <div className='weather-desc'>
                            <h2>{!!infos.weather ? infos.weather[0].description : null}</h2>
                        </div>
                    </div>
                </div>
                <div className='info-side'>
                    <div className='info-top'>
                        <div className='infoIcon icon1'>
                            <img width={100} height={100} src={temp} />
                        </div>
                        <div className='box1-temp'>
                            {Math.ceil(!!infos.main ? infos.main.feels_like : null)}
                            <span className='unit'>°C</span>
                        </div>
                        <div className='box1'>
                            Feel Like
                        </div>
                        <div className='infoIcon icon2'>
                            <img width={100} height={100} src={min} />
                        </div>
                        <div className='box2-temp'>
                            {Math.ceil(!!infos.main ? infos.main.temp_min : null)}
                            <span className='unit'>°C</span>
                        </div>
                        <div className='box2'>
                            Min Temp
                        </div>
                        <div className='infoIcon icon3'>
                            <img width={100} height={100} src={max} />
                        </div>
                        <div className='box3-temp'>
                            {Math.ceil(!!infos.main ? infos.main.temp_max : null)}
                            <span className='unit'>°C</span>
                        </div>
                        <div className='box3'>
                            Max Temp
                        </div>
                    </div>
                    <div className='info-bottom'>
                        <div className='infoIcon icon1'>
                            <img width={100} height={100} src={humidity} />
                        </div>
                        <div className='box1-temp'>
                            {!!infos.main ? infos.main.humidity : null}
                            <span className='unit'>%</span>
                        </div>
                        <div className='box1'>
                            Humidity
                        </div>
                        <div className='infoIcon icon2'>
                            <img width={100} height={100} src={wind} />
                        </div>
                        <div className='box2-temp'>
                            {!!infos.wind ? infos.wind.speed : null}
                            <span className='unit'> km/h</span>
                        </div>
                        <div className='box2'>
                            Wind
                        </div>
                        <div className='infoIcon icon3'>
                            <img width={100} height={100} src={pressure} />
                        </div>
                        <div className='box3-temp'>
                            {!!infos.main ? infos.main.pressure : null}
                            <span className='unit'> hPa</span>
                        </div>
                        <div className='box3'>
                            Pressure
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App