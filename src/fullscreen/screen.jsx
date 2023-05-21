import React from "react";

import { Weather } from "./weather";
import { Wind } from "./wind";
import { CurrentDate } from "./currentDate";

export function Screen(props) {
    const date = new Date()

    return (
        <div className={`main ${props.weather}`}>
            <div className="container">
                <div className={`weatherScreen ${props.weather}`}>
                    <form><input className="search" type="text" placeholder="Search" /></form>
                    <Weather name={props.fullWeather.name} temp={props.fullWeather.temp} description={props.fullWeather.description}/>
                    <Wind humidity={props.fullWeather.humidity} windSpeed={props.fullWeather.windSpeed}/>
                    <CurrentDate date={props.fullWeather.date}/>
                </div>
                <div className={`pattern ${props.weather}`}></div>
            </div>
        </div>)
}