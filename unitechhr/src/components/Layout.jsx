import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import UnitechLogo from '../images/UNITECH_Logo.png';
import ProfilePic from '../images/Profile.png';
import { FaBell, FaBars, FaSearch } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`container ${isNavOpen ? 'sidebar-open' : ''}`}>
      <header className="header">
        <Link to="/dashboard">
          <img src={UnitechLogo} alt="UNITECH Logo" className="logo" />
        </Link>
        <button className="collapse-button" onClick={handleNavToggle}>
          <FaBars />
        </button>
        <div className="search-bar-container">
          <FaSearch className="search-icon" />
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
        <div className="notification-container">
          <button className="notification-button" onClick={handleDropdownToggle}>
            <FaBell />
          </button>
          {isDropdownOpen && (
            <div className="notification-dropdown">
              <ul className="notification-list">
                <li className="notification-item">Notification 1</li>
                <li className="notification-item">Notification 2</li>
                <li className="notification-item">Notification 3</li>
                <li className="notification-item">Notification 4</li>
              </ul>
              <Link to="/notifications" className="view-all-link">
                View All Notifications
              </Link>
            </div>
          )}
        </div>
        <img src={ProfilePic} alt="Profile" className="profile-pic" />
        <span className="profile-name">John Doe</span>
      </header>
      <nav className={`sidebar ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/applicants">Applicants</Link></li>
          <li><Link to="/employees">Employees</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/careers">Careers</Link></li>
        </ul>
      </nav>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
