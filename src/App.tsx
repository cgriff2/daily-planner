import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import HomePage from './components/HomePage';
import WeatherPage from './components/WeatherPage';
import PlannerPage from './components/PlannerPage';

const App = () => {
  const location = localStorage.getItem('lastLocation') || 'Provo';

  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage location={location} />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/planner" element={<PlannerPage />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;