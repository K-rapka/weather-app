import React from "react";
import { Screen } from "./screen";

export const FullscreenApp = (props) => {
    //FIX ERROR
    if (props.fullWeather == undefined) { return }

    //THIS DAY
    if (props.isThisDay) {
        const fullWeather = {
            name: props.fullWeather.name,
            temp: Math.round(props.fullWeather.main.temp),
            humidity: props.fullWeather.main.humidity,
            windSpeed: Math.round(props.fullWeather.wind.speed),
        }

        return (<Screen fullWeather={fullWeather} weather={props.weather} />)
    }

    //WEEK
    const fullWeather = {
        name: props.fullWeather,
        temp: '2',
        humidity: '3',
        windSpeed: '4',

    }
    return (<Screen />)
}