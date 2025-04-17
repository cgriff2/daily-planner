import React, { useState, useEffect } from 'react';
import { useWeather } from '../hooks/useWeather';
import WeatherIcon from './WeatherIcon';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const WeatherPage: React.FC = () => {
  const [location, setLocation] = useState(localStorage.getItem('lastLocation') || 'Provo');
  const [searchLocation, setSearchLocation] = useState(location);
  const [isSearchPressed, setIsSearchPressed] = useState(false);
  const { currentWeather, forecast } = useWeather(location);
  const navigate = useNavigate();

  const handleSearch = () => {
    setLocation(searchLocation);
    localStorage.setItem('lastLocation', searchLocation);
    setIsSearchPressed(true);
  };

  useEffect(() => {
    if (!isSearchPressed) return;
  }, [isSearchPressed]);

  return (
    <div className="weather-page">
      <div className="search-bar-container">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
        <input
          value={searchLocation}
          onChange={e => setSearchLocation(e.target.value)}
          placeholder="Search location..."
          className="search-bar"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {currentWeather && (
        <div className="current-weather">
          <h2>Current Weather</h2>
          <WeatherIcon condition={currentWeather.condition} />
          <p>{currentWeather.temperature}°F - {currentWeather.condition}</p>
        </div>
      )}

      <div className="forecast-section">
        <h2>10-Day Forecast</h2>
        <div className="forecast-grid">
          {forecast.map((day, index) => (
            <div key={index} className="forecast-card">
              <p className="forecast-date">{day.date}</p>
              <WeatherIcon condition={day.condition} />
              <p className="forecast-temp">{day.temperature}°F</p>
              <p className="forecast-condition">{day.condition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;