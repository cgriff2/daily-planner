/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';

const API_KEY = '78073af908623ad7bafff195815fad73';

export const useWeather = (location: string) => {
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);

  useEffect(() => {
    if (!location) return;
    const fetchWeather = async () => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`);
      const data = await res.json();
      setCurrentWeather({
        temperature: data.main.temp,
        condition: data.weather[0].main,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      });

      const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=10&units=metric&appid=${API_KEY}`);
      const forecastData = await forecastRes.json();
      setForecast(forecastData.list.map((d: any) => ({
        date: new Date(d.dt * 1000).toISOString().split('T')[0],
        temperature: d.temp.day,
        condition: d.weather[0].main,
      })));
    };
    fetchWeather();
  }, [location]);

  return { currentWeather, forecast };
};
