import React, { useState } from "react";
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
} from "react-icons/ti";
import "./WeatherBody.css";

const WeatherBody = (props) => {
  const [activeTab, setActiveTab] = useState("weatherStats");

  const changeActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const weatherData = props.weatherData;

  // Please refer https://openweathermap.org/weather-conditions
  const getWeatherIcon = (id) => {
    if (id >= 200 && id < 300) {
      return <TiWeatherStormy size={80} />;
    } else if (id >= 300 && id < 400) {
      return <TiWeatherShower size={80} />;
    } else if (id >= 500 && id < 600) {
      return <TiWeatherDownpour size={80} />;
    } else if (id >= 600 && id < 700) {
      return <TiWeatherSnow size={80} />;
    } else if (id >= 700 && id < 800) {
      return <TiWeatherWindyCloudy size={80} />;
    } else if (id == 800) {
      return <TiWeatherSunny size={80} />;
    } else if (id > 800 && id < 900) {
      return <TiWeatherCloudy size={80} />;
    }
  };

  return (
    <div className="weather-body">
      <div className="weather-summary">
        <div className="weather-image">
          {weatherData.weather && (
            <>
              {getWeatherIcon(parseInt(weatherData.weather[0].id))}
              <span>{weatherData.weather[0].main}</span>
            </>
          )}
        </div>
        <div className="other-details">
          <ul>
            <li>
              <span>Country:</span>
              {weatherData.sys && <span>{weatherData.sys.country}</span>}
            </li>
            <li>
              <span>City/Town:</span>
              <span>{weatherData.name}</span>
            </li>
            <li>
              <span>Longitude:</span>
              {weatherData.coord && <span>{weatherData.coord.lon}</span>}
            </li>
            <li>
              <span>Latitude:</span>
              {weatherData.coord && <span>{weatherData.coord.lon}</span>}
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-details">
        <div className="nav-items">
          <button
            className={`nav-item ${activeTab === "weatherStats" && "active"}`}
            onClick={() => changeActiveTab("weatherStats")}
          >
            Weather Stats
          </button>
          <button
            className={`nav-item ${activeTab === "otherStats" && "active"}`}
            onClick={() => changeActiveTab("otherStats")}
          >
            Other Stats
          </button>
        </div>
        {activeTab === "weatherStats" ? (
          <div className="stats">
            {weatherData.main && (
              <ul>
                <li>
                  <span>Temperature</span>
                  <span>{weatherData.main.temp}&deg;C</span>
                </li>
                <li>
                  <span>Feels like</span>
                  <span>{weatherData.main.feels_like}&deg;C</span>
                </li>
                <li>
                  <span>Max temperature</span>
                  <span>{weatherData.main.temp_max}&deg;C</span>
                </li>
                <li>
                  <span>Min temperature</span>
                  <span>{weatherData.main.temp_min}&deg;C</span>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="stats">
            <ul>
              {weatherData.wind && (
                <>
                  <li>
                    <span>Wind</span>
                    <span>
                      {weatherData.wind.speed}m/s, {weatherData.wind.deg}&deg;
                    </span>
                  </li>
                  <li>
                    <span>Visibility</span>
                    <span>{weatherData.visibility}m</span>
                  </li>
                </>
              )}
              {weatherData.main && (
                <>
                  <li>
                    <span>Pressure</span>
                    <span>{weatherData.main.pressure}hPa</span>
                  </li>
                  <li>
                    <span>Humidity</span>
                    <span>{weatherData.main.humidity}%</span>
                  </li>
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
