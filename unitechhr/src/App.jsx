import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* Admin Pages */
import AdminLogin from './components/Admin/Login';
import AdminDashboard from './components/Admin/Dashboard';
import AdminNotifications from './components/Admin/Notifications';
import AdminApplicants from './components/Admin/Applicants';
import AdminEmployees from './components/Admin/Employees';
import AdminJobs from './components/Admin/Jobs';
import AdminCareers from './components/Admin/Careers';
/* Developer Pages */
import DevLogin from './components/Developer/Login';
import DevDashboard from './components/Developer/Dashboard';
import DevNotifications from './components/Developer/Notifications';
import DevUniversities from './components/Developer/Universities';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/Admin/Dashboard" element={<AdminDashboard />} />
        <Route path="/Admin/Notifications" element={<AdminNotifications />} />
        <Route path="/Admin/Applicants" element={<AdminApplicants />} />
        <Route path="/Admin/Employees" element={<AdminEmployees />} />
        <Route path="/Admin/Jobs" element={<AdminJobs />} />
        <Route path="/Admin/Careers" element={<AdminCareers />} />
        <Route path="/Developer" element={<DevLogin />} />
        <Route path="/Developer/Dashboard" element={<DevDashboard />} />
        <Route path="/Developer/Notifications" element={<DevNotifications />} />
        <Route path="/Developer/Universities" element={<DevUniversities />} />
      </Routes>
    </Router>
  );
};

export default App;
