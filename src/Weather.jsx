import React, { useState } from "react";
import "./weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    try {
      setLoading(true);

    
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0) {
        alert("City not found!");
        setLoading(false);
        return;  
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // 2. Fetch weather using coordinates
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
      );
      
      const weatherData = await weatherRes.json();
      
      setWeather({
        city: name,
        country: country,
        temp: weatherData.current.temperature_2m,
        humidity: weatherData.current.relative_humidity_2m,
        wind: weatherData.current.wind_speed_10m,
        code: weatherData.current.weather_code,
      });
      
      setLoading(false);
    } catch (error) {
      alert("Something went wrong!");
      setLoading(false);
    }
  };

  const getWeatherName = (code) => {
    const weatherCodes = {
      0: "Clear Sky",
      1: "Mainly Clear",
      2: "Partly Cloudy",
      3: "Overcast",
      45: "Foggy",
      48: "Depositing Rime Fog",
      51: "Light Drizzle",
      53: "Moderate Drizzle",
      55: "Dense Drizzle",
      61: "Light Rain",
      63: "Moderate Rain",
      65: "Heavy Rain",
      71: "Light Snow",
      73: "Snowfall",
      75: "Heavy Snowfall",
    };
    return weatherCodes[code] || "Unknown Weather";
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h2 className="title">🌤 Weather App</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={getWeather}>Search</button>
        </div>

        {loading && <p className="loading">Loading...</p>}

        {weather && (
          <div className="result">
            <h3>
              {weather.city}, <span>{weather.country}</span>
            </h3>

            <p className="temp">{weather.temp}°C</p>

            <p className="condition">{getWeatherName(weather.code)}</p>

            <div className="info-grid">
              <div className="info-box">
                <span>💧 Humidity</span>
                <strong>{weather.humidity}%</strong>
              </div>

              <div className="info-box">
                <span>💨 Wind Speed</span>
                <strong>{weather.wind} m/s</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
