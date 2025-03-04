import axios from "axios";

const API_KEY = "78073af908623ad7bafff195815fad73";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchWeather = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("City not found or API error");
  }
};