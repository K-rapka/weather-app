import React from "react";

export function Weather(props) {
    return (
        <div className={`weather ${props.weather}`}>
            <div>{props.name}</div>
            <div>{props.temp}°C</div>
            <div>{props.description}</div>
        </div>)
}

