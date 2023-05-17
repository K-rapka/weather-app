import React from "react";

export const FullscreenApp = () => {
    return (
        <div className="main sunny">
            <div className="container">
                <div className="weatherScreen">
                    <form><input className="search" type="text" placeholder="Search" /></form>
                    <div>
                        <h1>Country</h1>
                        <div>13°C</div>
                        <div>Sunny</div>
                    </div>
                    <div>
                        <div>Humidity: 40%</div>
                        <div>Wind Speed: 13 km/h</div>
                    </div>
                </div>
                <div className="pattern"></div>
            </div>

        </div>
    )
}