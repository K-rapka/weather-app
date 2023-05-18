import React from "react";

export const FullscreenApp = () => {

    const weather = 'rainy'

    return (
        <div className={`main ${weather}`}>
            <div className="container">
                <div className={`weatherScreen ${weather}`}>
                    <form><input className="search" type="text" placeholder="Search" /></form>
                    <div className={`weather ${weather}`}>
                        <div>Azerbaijan, Baku</div>
                        <div>13°C</div>
                        <div>Sunny</div>
                    </div>
                    <div className="wind">
                        <div>Humidity: 40%</div>
                        <div>Wind Speed: 13 km/h</div>
                    </div>
                </div>
                <div className={`pattern ${weather}`}></div>
            </div>

        </div>
    )
}