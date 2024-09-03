import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Applicants from './components/Applicants';
import Employees from './components/Employees';
import Jobs from './components/Jobs';
import Careers from './components/Careers';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Applicants" element={<Applicants />} />
        <Route path="/Employees" element={<Employees />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Careers" element={<Careers />} />
      </Routes>
    </Router>
  );
};

export default App;
