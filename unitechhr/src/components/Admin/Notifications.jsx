import Layout from './AdminLayout';
import { FaHome } from 'react-icons/fa';
import '../../PageCSS/Admin.css';

const Notifications = () => {
  return (
    <Layout>
      <div className="page-header-container">
        <div className="page-header-left">
          <FaHome className="home-icon" />
          <span className="page-title-text">Home / Notifications</span>
        </div>
        <div className="page-header-center">
          <span className="page-header-title">Notifications</span>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
