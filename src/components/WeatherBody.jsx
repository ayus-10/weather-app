import React, { useEffect, useState } from "react";
import {
  TiWeatherCloudy,
  TiWeatherShower,
  TiWeatherPartlySunny,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
} from "react-icons/ti";
import "./WeatherBody.css";

const WeatherBody = () => {
  const navItems = ["Weather Stats", "Other Stats", "Options"];

  const weatherStats = [
    "Temperature",
    "Feels like",
    "Max temperature",
    "Min temperature",
  ];

  const [weatherData, setWeatherData] = useState({});

  const getWeather = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9e29402da1d0377e04d1e1503b4d8046&units=metric"
    )
      .then((response) => response.json())
      .then((json) => setWeatherData(json));
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="weather-body">
      <div className="weather-summary">
        <div className="weather-image">
          <TiWeatherCloudy size={80} />
          {weatherData.weather && <span>{weatherData.weather[0].main}</span>}
        </div>
      </div>
      <div className="weather-details">
        <div className="nav-items">
          {navItems.map((navItem, index) => (
            <span className="nav-item" key={index}>
              {navItem}
            </span>
          ))}
        </div>
        <div className="weather-stats">
          <ul>
            {weatherStats.map((weatherStat, index) => (
              <li key={index}>{weatherStat}</li>
            ))}
          </ul>
          <ul>
            {weatherData.main && (
              <>
                <li>{weatherData.main.temp}</li>
                <li>{weatherData.main.feels_like}</li>
                <li>{weatherData.main.temp_max}</li>
                <li>{weatherData.main.temp_min}</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherBody;
