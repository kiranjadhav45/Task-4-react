import { useState, useEffect } from "react";
import "./weather.css";
import axios from "axios";

const WeatherComp = () => {
  const [data, setData] = useState("");
  const [city, setCity] = useState("Pune");
  useEffect(() => {
    const fetchWather = async () => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: city },
        headers: {
          "X-RapidAPI-Key":
            "73b3a59e70msh1d0b98da122b3b0p1c8ffbjsnfe23e070a3ba",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWather();
  }, []);
  console.log(data);
  return (
    <div className="weather-container">
      <div className="weather">
        <div className="date"></div>
        <hr className="horizontal-line " />
        <div className="main-containt">
          {/* time and current weather */}
          <div className="current-weather">
            <span>Current Weather</span>
            {data && <span>{data.location.name}</span>}
          </div>
          <hr className="horizontal-line " />
          {/* °C and status */}
          <div className="degree-celcius row">
            <div className="col-6 suniconmain">
              <div className="sunicon">
                {data && (
                  <img
                    width={70}
                    className="img-fluid"
                    src={data.current.condition.icon}
                    alt="pngwing-com"
                    border="0"
                  />
                )}
                {data && <span>{data.current.temp_c} °C</span>}
              </div>
              {data && <div>{data.current.condition.text}</div>}
            </div>
            {data && (
              <div className="col-6 status">
                RealFeel®
                {data.current.feelslike_c} °C
              </div>
            )}
          </div>
          <hr />
          {/* section One */}
          <div className="row">
            <div className="col-6 d-flex justify-content-between">
              <span>Wind Gusts</span>
              {data && <span>{data.current.gust_kph} km/h</span>}
            </div>
            <div className="col-6 d-flex justify-content-between">
              <span>Pressure</span>
              {data && <span>{data.current.pressure_mb} mb</span>}
            </div>
          </div>
          <hr />
          {/* section Two */}
          <div className="row">
            <div className="col-6 d-flex justify-content-between">
              <span>Humidity</span>
              {data && <span>{data.current.humidity}</span>}
            </div>
            <div className="col-6 d-flex justify-content-between">
              <span>Wind Direction</span>
              {data && <span>{data.current.wind_dir}</span>}
            </div>
          </div>
          <hr />
          {/* section Three */}
          <div className="row">
            <div className="col-6 d-flex justify-content-between">
              <span>feels like</span>
              {data && <span>{data.current.feelslike_c} °C</span>}
            </div>
            <div className="col-6 d-flex justify-content-between">
              <span>Wind speed</span>
              {data && <span>{data.current.wind_kph} km/h</span>}
            </div>
          </div>
          <hr />
          {/* section four */}
          <div className="row">
            <div className="col-6 d-flex justify-content-between">
              <span>Vis</span>
              {data && <span>{data.current.vis_km} km</span>}
            </div>
            <div className="col-6 d-flex justify-content-between">
              <span>UV</span>
              {data && <span>{data.current.uv}</span>}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default WeatherComp;
