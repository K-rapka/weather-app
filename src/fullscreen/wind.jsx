import React from "react";

export function Wind(props) {
    return (
        <div className="wind">
            <div>Humidity: {props.humidity}%</div>
            <div>Wind Speed: {props.windSpeed} km/h</div>
        </div>
    )
}