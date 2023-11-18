import React, { useState } from "react";
import "./App.css";
import WeatherBody from "./components/WeatherBody.jsx";
import { CiSearch } from "react-icons/ci";

const App = () => {
  const [location, setLocation] = useState("Kathmandu"); // Default location

  const changeLocation = (event) => {
    event.preventDefault();
    var inputLocation = document.getElementById("inputLocation").value;
    setLocation(inputLocation);
  };

  return (
    <div className="wrapper">
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
        <WeatherBody location={location} />
      </div>
    </div>
  );
};

export default App;
