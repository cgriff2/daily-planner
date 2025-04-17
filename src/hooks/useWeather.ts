/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';

const API_KEY = '78073af908623ad7bafff195815fad73';

export const useWeather = (location: string) => {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);

  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      const iconCode = data.weather[0].icon;

      setCurrentWeather({
        temperature: Math.round((data.main.temp * 9) / 5 + 32), // Convert to °F
        condition: data.weather[0].main,
        iconCode,
      });

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=10&units=metric&appid=${API_KEY}`
      );
      const forecastData = await forecastRes.json();

      const mappedForecast = forecastData.list.map((d: any) => ({
        date: new Date(d.dt * 1000).toLocaleDateString('en-US', {
          month: 'numeric',
          day: 'numeric',
          weekday: 'short',
        }),
        temperature: Math.round((d.temp.day * 9) / 5 + 32),
        condition: d.weather[0].main,
        iconCode: d.weather[0].icon,
      }));

      setForecast(mappedForecast);
    };

    fetchWeather();
  }, [location]);

  return { currentWeather, forecast };
};
