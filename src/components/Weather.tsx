import { useState } from "react";

interface WeatherSearchProps {
  onSearch: (city: string) => void;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default WeatherSearch;


// import { useState, useEffect } from "react";
// import { fetchWeather } from "../api";
// import { WeatherData } from "../types";

// const Weather = () => {
//   const [city, setCity] = useState("New York");
//   const [weather, setWeather] = useState<WeatherData | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getWeather = async () => {
//       setLoading(true);
//       const data = await fetchWeather(city);
//       setWeather(data);
//       setLoading(false);
//     };
//     getWeather();
//   }, [city]);

//   return (
//     <div className="p-4 bg-blue-100 rounded-lg">
//       <input
//         className="p-2 border rounded"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       {loading ? (
//         <p>Loading...</p>
//       ) : weather ? (
//         <div>
//           <h2 className="text-xl">{weather.city}</h2>
//           <p>{weather.temperature}°C - {weather.description}</p>
//           <img src={weather.icon} alt="Weather Icon" />
//           <div className="flex space-x-2 mt-2">
//             {weather.forecast.map((f) => (
//               <div key={f.date} className="text-center">
//                 <p>{f.date}</p>
//                 <img src={f.icon} alt="Forecast Icon" />
//                 <p>{f.temp}°C</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <p>Failed to load weather.</p>
//       )}
//     </div>
//   );
// };

// export default Weather;
