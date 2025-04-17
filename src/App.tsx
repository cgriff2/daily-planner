import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import { LocationProvider } from './context/LocationContext';
import HomePage from './components/HomePage';
import WeatherPage from './components/WeatherPage';
import PlannerPage from './components/PlannerPage';

const App = () => {

  return (
    <TaskProvider>
      <LocationProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/planner" element={<PlannerPage />} />
          </Routes>
        </Router>
      </LocationProvider>
    </TaskProvider>
  );
};

export default App;