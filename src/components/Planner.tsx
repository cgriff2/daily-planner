import { useWeather } from "../hooks/useWeather";
import WeatherSearch from "../components/Weather";
import WeatherDisplay from "../components/WeatherDisplay";

const Home = () => {
  const { weather, loading, error, getWeather } = useWeather();

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Daily Planner</h1>
      <WeatherSearch onSearch={getWeather} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default Home;



// import React, { useState } from "react";
// import { useTaskContext } from "../context/TaskContext";

// const Planner = () => {
//   const { tasks, addTask, removeTask } = useTaskContext();
//   const [task, setTask] = useState("");
//   const [time, setTime] = useState("");

//   return (
//     <div className="p-4">
//       <h2 className="text-lg font-bold">Daily Planner</h2>
//       <input
//         className="p-2 border rounded m-2"
//         placeholder="Task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <input
//         type="time"
//         className="p-2 border rounded m-2"
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//       />
//       <button className="bg-blue-500 text-white p-2 rounded" onClick={() => addTask(task, time)}>
//         Add Task
//       </button>
//       <ul className="mt-4">
//         {tasks.map((t) => (
//           <li key={t.id} className="p-2 border rounded flex justify-between">
//             {t.time} - {t.text}
//             <button className="bg-red-500 text-white p-1" onClick={() => removeTask(t.id)}>
//               X
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button
//         className="bg-red-500 text-white p-2 rounded mt-4"
//         onClick={() => localStorage.removeItem("tasks")}
//       >
//         Clear All Tasks
//       </button>
//     </div>
//   );
// };

// export default Planner;
