import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EntryPageStyles.css";
import images from "../../assets/images";

const EntryPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/weekselection");
  }; 

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img src={images.logo} alt="Company Logo" className="logo-image" />
            <span className="logo-text">Taras System and solutions</span>
          </div>
          <div className="user-info">
            <i className="fas fa-user"></i> Welcome, User
          </div>
        </div>
      </header>

      <div className="instructions">
        <h2>Important Instructions</h2>
        <ul>
          <li>
            * Enter actual hours you have worked on the project (even if it is
            more than the standard working hours)
          </li>
          <li>* Make sure you are entering into the right project ID</li>
          <li>
            * If you are working on multiple projects, submit the hours
            accordingly to the respective project IDs
          </li>
          <li>
            * The best practice is to save the timesheet on a daily basis and
            submit it before the "End of the Day" every Friday
          </li>
        </ul>
      </div>

      <nav className="nav">
        <div className="nav-content">
          <div className="nav-button-container">
            <button
              className="nav-button"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <i className="fas fa-exchange-alt"></i> Transaction
              {showDropdown && (
                <div className="dropdown">
                  <button className="dropdown-option">
                    Timesheet Page View Setting
                  </button>
                  <button className="dropdown-option" onClick={handleContinue}>Employee Timesheet</button>
                </div>
              )}
            </button>
          </div>
          <button className="nav-button">
            <i className="fas fa-home"></i> Home
          </button>
        </div>
      </nav>

      <main className="main-content">
        <TimesheetSection title="Timesheet Pending Approval List - Direct Reportees" />
        <TimesheetSection title="Timesheet Pending Approval List - Indirect Reportees" />
        <TimesheetSection title="Timesheet Pending Approval List - Trainee / Intern" />
      </main>

      <footer className="footer">
        <p>Copyright © 2025 YourCompany. All Rights Reserved</p>
      </footer>
    </div>
  );
};

const TimesheetSection = ({ title }) => {
  const sampleData = [
    {
      empNo: "EMP001",
      name: "John Doe",
      isoWk: "W32",
      startDate: "2023-08-07",
      endDate: "2023-08-13",
    },
    {
      empNo: "EMP002",
      name: "Jane Smith",
      isoWk: "W32",
      startDate: "2023-08-07",
      endDate: "2023-08-13",
    },
  ];

  return (
    <section className="timesheet-section">
      <div className="section-header">
        <h3>{title}</h3>
        <button className="view-details-button">
          <i className="fas fa-eye"></i>
          <span>View Details</span>
        </button>
      </div>
      <table className="timesheet-table">
        <thead>
          <tr>
            <th>Emp No.</th>
            <th>Employee Name</th>
            <th>ISO WK No.</th>
            <th>ISO Work Week Start Date</th>
            <th>ISO Work Week End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.length > 0 ? (
            sampleData.map((item, index) => (
              <tr key={index}>
                <td>{item.empNo}</td>
                <td>{item.name}</td>
                <td>{item.isoWk}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>
                  <span style={{ color: "#ff6600", fontWeight: "500" }}>
                    Pending
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No records to display
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <span>Showing 1-2 of 2 entries</span>
        <button className="pagination-button" disabled>
          {"<<"}
        </button>
        <button className="pagination-button" disabled>
          {"<"}
        </button>
        <button className="pagination-button" disabled>
          {">"}
        </button>
        <button className="pagination-button" disabled>
          {">>"}
        </button>
        <span>Page size:</span>
        <select className="page-size-selector">
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </section>
  );
};

export default EntryPage;
