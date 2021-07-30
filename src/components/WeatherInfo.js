import React, { useEffect, useState } from "react";
import { WEATHER_KEY } from "../app/keys";
import Logo from "../assets/Group.png";
import ProgressionCircle from "./progressive/progressionCircle/ProgressionCircle";
import "./WeatherInfo.css";

const initialTime = {
  hour: 0,
  minute: 0,
  dayNumber: 0,
  day: 0,
  month: 0,
  year: 0,
};
const initialWeather = {
  temp:0,
  city:"",
  country:"",
};
const WeatherInfo = ({ data }) => {
  const fecha = new Date();
  const [time, setTime] = useState(initialTime);
  const [dataWeather, setDataWeather] = useState(initialWeather);

  const day = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  const month = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  useEffect(() => {
    setTime({
      ...time,
      hour: fecha.getHours(),
      minute: fecha.getMinutes(),
      dayNumber: fecha.getDate(),
      day: day[fecha.getDay() - 1],
      month: month[fecha.getMonth()],
      year: fecha.getFullYear(),
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setTime({
        ...time,
        hour: fecha.getHours(),
        minute: fecha.getMinutes(),
        dayNumber: fecha.getDate(),
        day: day[fecha.getDay() - 1],
        month: month[fecha.getMonth()],
        year: fecha.getFullYear(),
      });
    }, 1000);

    //console.log(time.hour, time.minute, time.day, time.month, time.year);
  }, [time]);

  useEffect(() => {
    console.log("llego a data useeffect-->");
    console.log(data);
    let API_URL = "";
    const peticion = async () => {
      if (data?.longitude && data?.latitude) {
        API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${WEATHER_KEY}&units=metric`;
      } else {
        if (data?.city && data?.country) {
          console.log(data.city);
          API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=${WEATHER_KEY}&units=metric`;
        }
      }
      console.log(API_URL);
      const res = await fetch(API_URL);
      const resp = await res.json();
      setDataWeather({
      ...resp,
      temp: resp.main.temp.toFixed(),
      city: resp.name,
      country: resp.sys.country,
      });
      console.log(dataWeather.temp,typeof dataWeather.temp);
      console.log(resp);
      console.log(dataWeather.city);

      
    };
    peticion();
  }, [data]);

  return (
    <div className="weatherInfo">
      <div className="weatherInfo--container">
        <div className="weatherInfo--day">
          <div className="weatherInfo--day-img">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="weathInfo--day-data">
            <h2>{time.day}</h2>
            <h2>{`${time.hour}:${time.minute}`}</h2>
            <p>{`${time.day},${time.dayNumber} ${time.month}`}</p>
          </div>
        </div>
        <div className="weatherInfo--description">
          <h1>{`${dataWeather.temp}°C`}</h1>
          <h2>{`${dataWeather.city}`}</h2>
          <p>{`${dataWeather.country}`}</p>
        </div>
        <div className="weatherInfo--temperature">
          <ProgressionCircle></ProgressionCircle>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
