import React from "react";
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
  const navItems = ["item1", "item2", "item3", "item4", "item5"];

  return (
    <div className="weather-body">
      <div className="weather-summary">
        <div className="weather-image">
          <TiWeatherCloudy size={80} />
          <span>{"Cloudy"}</span>
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
      </div>
    </div>
  );
};

export default WeatherBody;
