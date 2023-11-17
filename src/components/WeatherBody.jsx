import React, { useEffect, useState } from "react";
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindy,
  TiWeatherWindyCloudy,
} from "react-icons/ti";
import "./WeatherBody.css";

const WeatherBody = () => {
  const [activeTab, setActiveTab] = useState("weatherStats");

  const changeActiveTab = (tab) => {
    setActiveTab(tab);
  };

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

  // https://openweathermap.org/weather-conditions
  const weatherIcon = (id) => {
    if (id >= 200 && id < 300) {
      return <TiWeatherStormy />;
    } else if (id >= 300 && id < 400) {
      return <TiWeatherStormy />;
    }
  };

  return (
    <div className="weather-body">
      <div className="weather-summary">
        <div className="weather-image">
          <TiWeatherCloudy size={80} />
          {weatherData.weather && <span>{weatherData.weather[0].main}</span>}
        </div>
        <div className="other-details">
          <ul>
            <li>Country:</li>
            <li>City:</li>
            <li>Longitude:</li>
            <li>Latitude:</li>
          </ul>
          <ul>
            {weatherData.sys && <li>{weatherData.sys.country}</li>}
            <li>{weatherData.name}</li>
            {weatherData.coord && (
              <>
                <li>{weatherData.coord.lon}&deg;</li>
                <li>{weatherData.coord.lat}&deg;</li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="weather-details">
        <div className="nav-items">
          <button
            className="nav-item"
            onClick={() => changeActiveTab("weatherStats")}
          >
            Weather Stats
          </button>
          <button
            className="nav-item"
            onClick={() => changeActiveTab("otherStats")}
          >
            Other Stats
          </button>
        </div>
        {activeTab === "weatherStats" ? (
          <div className="stats">
            <ul>
              <li>Temperature</li>
              <li>Feels like</li>
              <li>Max temperature</li>
              <li>Min temperature</li>
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
        ) : (
          <div className="stats">
            <ul>
              <li>Sunrise</li>
              <li>Sunset</li>
              <li>Pressure</li>
              <li>Humidity</li>
            </ul>
            <ul>
              {weatherData.sys && (
                <>
                  <li>{weatherData.sys.sunrise}</li>
                  <li>{weatherData.sys.sunset}</li>
                </>
              )}
              {weatherData.main && (
                <>
                  <li>{weatherData.main.pressure}</li>
                  <li>{weatherData.main.humidity}</li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherBody;
