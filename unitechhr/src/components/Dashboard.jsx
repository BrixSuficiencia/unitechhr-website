import Layout from './Layout';
import { FaHome, FaUserPlus } from 'react-icons/fa';
import '../PageCSS/Dashboard.css';

const Dashboard = () => {
  return (
    <Layout>
      <div className="page-header-container">
        <div className="page-header-left">
          <FaHome className="home-icon" />
          <span className="page-title-text">Home / Dashboard</span>
        </div>
        <div className="page-header-center">
          <span className="page-header-title">HR Dashboard</span>
        </div>
      </div>
      <div className="dashboard-buttons">
        <div className="dashboard-button employees">
          <span>EMPLOYEES</span>
          <span className="count">120</span>
        </div>
        <div className="dashboard-button job-positions">
          <span>JOB POSITIONS</span>
          <span className="count">15</span>
        </div>
        <div className="dashboard-button notifications">
          <span>NOTIFICATIONS</span>
          <span className="count">8</span>
        </div>
        <div className="dashboard-button add-employee">
          <FaUserPlus className="add-icon" />
          <span>ADD EMPLOYEE</span>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
