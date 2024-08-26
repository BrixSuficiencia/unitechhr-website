import { useState } from 'react';
import UnitechLogo from '../images/UNITECH_Logo.png'; // UniTechHR Logo
import ProfilePic from '../images/Profile.png'; // Placeholder for profile picture
import { FaBell, FaBars, FaSearch, FaHome } from 'react-icons/fa'; // Icons for notification, collapse, and search

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage navigation bar visibility

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`container ${isNavOpen ? 'sidebar-open' : ''}`}>
      <header className="header">
        <img src={UnitechLogo} alt="UNITECH Logo" className="logo" />
        <button className="collapse-button" onClick={handleNavToggle}>
          <FaBars />
        </button>
        <div className="search-bar-container">
          <FaSearch className="search-icon" />
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
        <button className="notification-button">
          <FaBell />
        </button>
        <img src={ProfilePic} alt="Profile" className="profile-pic" />
        <span className="profile-name">John Doe</span>
      </header>
      <nav className={`sidebar ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Applicants</a></li>
          <li><a href="#">Employees</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </nav>
      <div className="content">
        <div className="page-header-container">
          <div className="page-header-left">
            <FaHome className="home-icon" />
            <span className="page-title-text">Home/Dashboard</span>
          </div>
          <div className="page-header-center">
            <span className="page-header-title">HR Dashboard</span>
          </div>
        </div>

        <h2>Dashboard</h2>
        <p>Welcome to your dashboard! Here you can manage your account, view your settings, and explore more opti ons. ddd dd dd dddd dddddddddddddddddddddddddddWelcome to your dashboard! 
          Here you can manage your account, view your settings, and explore more optio ns. ddd dddd dd dddd dddddddddddddddddddddddddWelcome to your dashboard! 
          Here you can manage your account, view your settings, and explore more options.dddddddddddddddddddddddddddddddddddddd</p>
      </div>
    </div>
  );
};

export default Dashboard;
