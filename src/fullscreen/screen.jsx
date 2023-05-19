import React from "react";

export function Screen(props) {
    return (
        <div className={`main ${props.weather}`}>
            <div className="container">
                <div className={`weatherScreen ${props.weather}`}>
                    <form><input className="search" type="text" placeholder="Search" /></form>
                    <div className={`weather ${props.weather}`}>
                        <div>{props.fullWeather.name}</div>
                        <div>{props.fullWeather.temp}°C</div>
                        <div>{props.weather}</div>
                    </div>
                    <div className="wind">
                        <div>Humidity: {props.fullWeather.humidity}%</div>
                        <div>Wind Speed: {props.fullWeather.windSpeed} km/h</div>
                    </div>
                    <div className="date">
                        <div>Monday 19/05/2023</div>
                    </div>
                </div>
                <div className={`pattern ${props.weather}`}></div>
            </div>
        </div>)
}