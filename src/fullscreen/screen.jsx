import React from "react";

export function Screen(props) {
    const date = new Date()
    
    return (
        <div className={`main ${props.weather}`}>
            <div className="container">
                <div className={`weatherScreen ${props.weather}`}>
                    <form><input className="search" type="text" placeholder="Search" /></form>
                    <div className={`weather ${props.weather}`}>
                        <div>{props.fullWeather.name}</div>
                        <div>{props.fullWeather.temp}°C</div>
                        <div>{props.fullWeather.description}</div>
                    </div>
                    <div className="wind">
                        <div>Humidity: {props.fullWeather.humidity}%</div>
                        <div>Wind Speed: {props.fullWeather.windSpeed} km/h</div>
                    </div>
                    <div className="date">
                        <div>{props.fullWeather.date}</div>
                    </div>
                </div>
                <div className={`pattern ${props.weather}`}></div>
            </div>
        </div>)
}