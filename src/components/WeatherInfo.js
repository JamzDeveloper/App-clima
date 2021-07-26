import React, { useEffect } from "react";
import { WEATHER_KEY } from "../app/keys";
const WeatherInfo = ({ data }) => {
  useEffect(() => {
    console.log("llego a data useeffect-->");
    console.log(data);
    let API_URL = "";
    const peticion = async () => {
      if (data?.longitude && data?.latitude) {
        API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${WEATHER_KEY}`;
      } else {
        if (data?.city && data?.country) {
          console.log(data.city);
          API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${WEATHER_KEY}`;
        }
      }
      console.log(API_URL);
      const res = await fetch(API_URL);
      const resp = await res.json();
      console.log(resp);
    };
    peticion();
  }, [data]);

  return (
    <div className="weather-info">
      <div className="weather-info-title">
        <h3>Weather Info</h3>
      </div>
    </div>
  );
};

export default WeatherInfo;
