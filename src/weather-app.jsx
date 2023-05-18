import React from "react";
import ReactDOM from 'react-dom/client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FullscreenApp } from "./fullscreen/fullscreen";
import "swiper/css";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <FullscreenApp/>
)