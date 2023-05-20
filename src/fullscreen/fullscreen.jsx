import React from "react";
import { Screen } from "./screen";
import {weatherIcons, days } from "../services/services";

export const FullscreenApp = (props) => {
    //FIX ERROR
    if (props.fullWeather == undefined) { return }
    const date = new Date()
    //THIS DAY
    if (props.isThisDay) { 
        const fullWeather = {
            name: props.fullWeather.name,
            temp: Math.round(props.fullWeather.main.temp),
            humidity: props.fullWeather.main.humidity,
            windSpeed: Math.round(props.fullWeather.wind.speed),
            description:props.fullWeather.weather[0].main,
            date:`${days[date.getDay()]} ${date.getDate()}/0${date.getMonth()+1}/${date.getFullYear()}`
        }

        return (<Screen fullWeather={fullWeather} weather={weatherIcons[props.fullWeather.weather[0].icon]} />)
    }

    //NEXT DAYS
    //fake data because need subscribe for API
    const fullWeather = {
        name: "Barcelona",
        temp: '19',
        humidity: '67',
        windSpeed: '4',
        description:'Clouds',
        date:'Friday 26/05/2023'

    }
    return (<Screen fullWeather={fullWeather} weather={weatherIcons['01n']} />)
}