import { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WeatherComp from "../components/weather/WeatherComp";

const Weather = () => {
  return (
    <div>
      <Navbar />
      <WeatherComp />
      <Footer />
    </div>
  );
};

export default Weather;
