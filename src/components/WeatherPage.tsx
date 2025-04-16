/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import { useWeather } from '../hooks/useWeather';

const WeatherPage: React.FC = () => {
  const [location, setLocation] = useState(localStorage.getItem('lastLocation') || 'Provo');
  const { currentWeather, forecast } = useWeather(location);

  const handleSearch = () => {
    localStorage.setItem('lastLocation', location);
  };

  return (
    <div>
      <input
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Search location..."
      />
      <button onClick={handleSearch}>Search</button>

      <h2>{location} Weather</h2>
      {currentWeather && (
        <p>{currentWeather.temperature}°C - {currentWeather.condition}</p>
      )}
      <ul>
        {forecast.map(day => (
          <li key={day.date}>
            {day.date}: {day.temperature}°C - {day.condition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherPage;