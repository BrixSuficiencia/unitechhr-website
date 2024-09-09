import { useState } from 'react';
import Layout from './DevLayout';
import { FaSearch, FaEllipsisV, FaHome } from 'react-icons/fa';
import '../../PageCSS/Developer.css';

const Employees = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  const toggleDropdown = (index) => {
    setDropdownVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleSelectAll = () => {
    const newValue = !isAllSelected;
    setIsAllSelected(newValue);

    // Assuming there are 10 rows
    const newSelection = {};
    for (let i = 0; i < 10; i++) {
      newSelection[i] = newValue;
    }
    setSelectedCheckboxes(newSelection);
  };

  const handleCheckboxChange = (index) => {
    setSelectedCheckboxes((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Layout>
      <div className="page-header-container">
        <div className="page-header-left">
          <FaHome className="home-icon" />
          <span className="page-title-text">Home / Universities</span>
        </div>
        <div className="page-header-center">
          <span className="page-header-title">Universities</span>
        </div>
      </div>

      <div className="search-export-container">
        <div className="search-bar-wrapper">
          <input type="text" className="search-bar" placeholder="Search University" />
          <FaSearch className="search-table" />
        </div>
      </div>

      <div className="table-container">
        <button className="delete-selected-button">DELETE</button>

        <table className="general-table">
          <thead>
            <tr className="table-header-universities">
              <th>
                <input
                  type="checkbox"
                  className="select-all-checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th>University Name</th>
              <th>ID</th>
              <th>Subsciption Start</th>
              <th>Subsciption End</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10).keys()].map((index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedCheckboxes[index] || false}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td>Placeholder University</td>
                <td>2222222</td>
                <td>07/23/2024</td>
                <td>09/01/2025</td>
                <td>Active</td>
                <td>
                  <button
                    className={`action-button ${dropdownVisible[index] ? 'active' : ''}`}
                    onClick={() => toggleDropdown(index)}
                  >
                    <FaEllipsisV />
                  </button>
                  {dropdownVisible[index] && (
                    <div className="action-dropdown">
                      <ul>
                        <li>Edit</li>
                        <li>Delete</li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Employees;
