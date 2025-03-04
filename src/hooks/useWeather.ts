import { useState } from "react";
import { fetchWeather } from "../api";

export const useWeather = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (city: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return { weather, loading, error, getWeather };
};
