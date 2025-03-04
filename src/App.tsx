import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Planner from "./components/Planner";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Planner />} />
      </Routes>
    </Router>
  );
};

export default App;