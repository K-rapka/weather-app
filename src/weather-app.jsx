import React, { useState } from "react";
import ReactDOM from 'react-dom/client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';

import { FullscreenApp } from "./fullscreen/fullscreen";
import { getWeather } from "./services/services";


const root = ReactDOM.createRoot(document.getElementById('root'))


const WeatherApp = () => {
  const [weatherNow, setWeatherNow] = useState(undefined)
  const [weatherNext, setWeatherNext] = useState(undefined)

  //WEATHER LOAD
  async function loadWeather() {
    const weather = await getWeather();
    setWeatherNow(weather)
  }
  if (weatherNow == undefined) {
    loadWeather()
  }
  //CODE


  return (
    <Swiper slidesPerView={1} navigation modules={[Navigation]}>
      <SwiperSlide><FullscreenApp fullWeather = {weatherNow} isThisDay = {true}/></SwiperSlide>
      <SwiperSlide><FullscreenApp fullWeather = {weatherNow} isThisDay = {false}/></SwiperSlide>
    </Swiper>
  )
}

root.render(
  <WeatherApp />
)