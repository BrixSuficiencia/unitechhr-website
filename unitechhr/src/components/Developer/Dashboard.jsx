import Layout from './DevLayout';
import { FaHome } from 'react-icons/fa';
import '../../PageCSS/Developer.css';

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
    </Layout>
  );
};

export default Dashboard;
