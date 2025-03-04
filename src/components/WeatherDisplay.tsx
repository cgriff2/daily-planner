/* eslint-disable  @typescript-eslint/no-explicit-any */

interface WeatherDisplayProps {
    weather: any;
  }
  
  const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
    return (
      <div className="mt-4 p-4 border rounded bg-gray-100">
        <h2 className="text-xl font-bold">{weather.name}, {weather.sys.country}</h2>
        <p>{weather.weather[0].description}</p>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    );
  };
  
  export default WeatherDisplay;
  