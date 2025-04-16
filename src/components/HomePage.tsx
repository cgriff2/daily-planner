import React from 'react';
import { useTasks } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';
import { useWeather } from '../hooks/useWeather';
import '../App.css';

const HomePage: React.FC<{ location: string }> = ({ location }) => {
  const { currentWeather } = useWeather(location);
  const { tasks } = useTasks();
  const navigate = useNavigate();

  const today = new Date().toISOString().split('T')[0];
  const todayTasks = tasks.filter(t => t.date === today);

  return (
    <div className="home-container">
      <h1>Today's Tasks</h1>

      {todayTasks.length > 0 ? (
        <>
          <h4>To Do:</h4>
          <ul className="task-list">
            {todayTasks.map(task => (
              <li key={task.taskId} onClick={() => navigate('/planner')} className="clickable-task">
                {task.title}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <button onClick={() => navigate('/planner')} className="go-planner-btn">
          Go to Planner
        </button>
      )}

      <div onClick={() => navigate('/weather')} className="weather-widget">
        {currentWeather && (
          <>
            <img src={currentWeather.icon} alt={currentWeather.condition} />
            <p>{currentWeather.temperature}°C - {currentWeather.condition}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
