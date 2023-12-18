import React, { useState, useEffect } from "react";
import "./App.css";
import { CiSearch } from "react-icons/ci";
import WeatherBody from "./components/WeatherBody.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  const [location, setLocation] = useState("Kathmandu");

  const changeLocation = (event) => {
    // Prevent page reload
    event.preventDefault();

    // Recieve the input element for location
    const getInput = () => document.getElementById("inputLocation");

    // Update the current state of location
    let inputLocation = getInput().value;
    setLocation(inputLocation);

    // Empty the input field after updating location
    getInput.value = "";
  };

  const [weatherData, setWeatherData] = useState({});

  // Use fetch api to get weather data
  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=9e29402da1d0377e04d1e1503b4d8046&units=metric`
    )
      .then((response) => response.json())
      .then((json) => {
        // Put the weather data in a state
        setWeatherData(json);
      });
  };

  useEffect(() => {
    // Set loading to true
    setLoading(true);

    // Fetch new data for updated location
    getWeather();

    // Set loading to false after 400ms
    setTimeout(() => setLoading(false), 400);
  }, [location]);

  return (
    <div className="wrapper">
      {!loading ? (
        <div className="container">
          <form className="search-bar-div" onSubmit={changeLocation}>
            <input
              id="inputLocation"
              type="text"
              className="search-bar"
              placeholder="Type a city/town name here..."
            />
            <button className="search-button">
              <CiSearch />
            </button>
          </form>
          <WeatherBody weatherData={weatherData} />
        </div>
      ) : (
        <LoadingScreen loading={loading} />
      )}
    </div>
  );
};

export default App;
