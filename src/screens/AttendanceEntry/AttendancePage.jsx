import React, { useState, useEffect } from 'react';
import { isHoliday } from '../../utils/holidayUtils';
import { sendTimesheetEmail } from '../../utils/emailService';
import Notification from '../../components/Notification/Notification';
import './AttendancePageStyles.css';
import { useLocation } from 'react-router-dom';

const AttendancePage = () => {
  const location = useLocation();
  const selectedWeek = location.state?.selectedWeek;
  
  const [employeeName, setEmployeeName] = useState("username ");
  const [weekNumber, setWeekNumber] = useState(selectedWeek?.weekString || "");
  const [attendanceDetails, setAttendanceDetails] = useState([]);
  const [formDetails, setFormDetails] = useState({
    workWeekDate: '',
    projectID: '',
    SOWPhase: '',
    task: '',
    taskDescription: '',
    nonTesterHours: '',
    testerID: '',
    testerPlatform: '',
    testerLocation: '',
    testerHours: '',
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleDateInput = (e) => {
    const date = e.target.value;
    const dateObj = new Date(date);
    
    if (isHoliday(dateObj)) {
      e.target.classList.add('holiday-date');
      alert('This is a holiday! Please check the holiday calendar.');
    } else {
      e.target.classList.remove('holiday-date');
    }
    handleChange(e);
  };

  const handleAdd = () => {
    const dateObj = new Date(formDetails.workWeekDate);
    if (isHoliday(dateObj)) {
      alert('Warning: You are adding hours for a holiday. Please confirm if this is correct.');
    }
    setAttendanceDetails([...attendanceDetails, formDetails]);
    setFormDetails({
      workWeekDate: '',
      projectID: '',
      SOWPhase: '',
      task: '',
      taskDescription: '',
      nonTesterHours: '',
      testerID: '',
      testerPlatform: '',
      testerLocation: '',
      testerHours: '',
    });
  };

  const handleSubmit = async () => {
    try {
      // Send email notification
      const emailSent = await sendTimesheetEmail(employeeName, weekNumber, attendanceDetails);
      
      if (emailSent) {
        setNotification({
          type: 'success',
          message: 'Thank you for submitting your timesheet! A confirmation email has been sent.'
        });
        
        // Reset form after successful submission
        handleCancel();
      } else {
        setNotification({
          type: 'error',
          message: 'Failed to send email notification. Please try again.'
        });
      }
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'An error occurred while submitting the timesheet.'
      });
    }
  };

  const handleSave = () => {
    // Save logic here
    console.log('Saving attendance details:', attendanceDetails);
  };

  const handleCancel = () => {
    // Reset form and table
    setAttendanceDetails([]);
    setFormDetails({
      workWeekDate: '',
      projectID: '',
      SOWPhase: '',
      task: '',
      taskDescription: '',
      nonTesterHours: '',
      testerID: '',
      testerPlatform: '',
      testerLocation: '',
      testerHours: '',
    });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div className="attendance-container">
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={closeNotification}
        />
      )}
      <header className="attendance-header">
        <div className="attendance-logo">Taras System Solutions</div>
        <div className="attendance-user-info">Hi {employeeName}</div>
      </header>
      <div className="attendance-instructions">
        <h2>Important Instructions</h2>
        <ul>
          <li>* Enter actual hours you have worked on the project (even if it is more than the standard working hours)</li>
          <li>* Make sure you are entering into the right project ID</li>
          <li>* If you are working on multiple projects, submit the hours accordingly to the respective project IDs</li>
          <li>* The best practice is to save the timesheet on a daily basis and submit it before the "End of the Day" every Friday</li>
        </ul>
      </div>
      <form className="attendance-form" onSubmit={(e) => e.preventDefault()}>
        <div className="attendance-section">
          <label htmlFor="employee-select">Employee Name:</label>
          <select id="employee-select" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)}>
            <option value="Krishna Kumar Dhanabalan">user</option>
            {/* Add more employee options here */}
          </select>
        </div>
        <div className="attendance-section">
          <label htmlFor="week-select">ISO Work Week Number:</label>
          <input 
            type="text" 
            id="week-select" 
            value={weekNumber} 
            readOnly 
            className="readonly-input"
          />
        </div>
        <div className="attendance-section">
          <label htmlFor="workWeekDate">Work Week Date:*</label>
          <input 
            type="date" 
            id="workWeekDate" 
            name="workWeekDate" 
            value={formDetails.workWeekDate} 
            onChange={handleDateInput}
            required
          />
        </div>
        <div className="attendance-section">
          <label htmlFor="projectID">Project ID & Name:*</label>
          <input 
            type="text" 
            id="projectID" 
            name="projectID" 
            value={formDetails.projectID} 
            onChange={handleChange}
            required 
          />
        </div>
        <div className="attendance-section">
          <label htmlFor="SOWPhase">SOW Phase:</label>
          <input type="text" id="SOWPhase" name="SOWPhase" value={formDetails.SOWPhase} onChange={handleChange} />
        </div>
        <div className="attendance-section">
          <label htmlFor="task">Task:</label>
          <input type="text" id="task" name="task" value={formDetails.task} onChange={handleChange} />
        </div>
        <div className="attendance-section">
          <label htmlFor="taskDescription">Task Description:</label>
          <input type="text" id="taskDescription" name="taskDescription" value={formDetails.taskDescription} onChange={handleChange} />
        </div>
        <div className="attendance-section">
          <label htmlFor="nonTesterHours">Non-Tester Hours:</label>
          <input type="number" id="nonTesterHours" name="nonTesterHours" value={formDetails.nonTesterHours} onChange={handleChange} />
        </div>
        <div className="attendance-section">
          <label htmlFor="testerID">Tester ID:</label>
          <input type="text" id="testerID" name="testerID" value={formDetails.testerID} onChange={handleChange} />
        </div>
        <div className="attendance-section">
          <label htmlFor="testerPlatform">Tester Platform:</label>
          <input type="text" id="testerPlatform" name="testerPlatform" value={formDetails.testerPlatform} onChange={handleChange} />
        </div>
        <div className="attendance-section">
          <label htmlFor="testerLocation">Tester Location:</label>
          <input type="text" id="testerLocation" name="testerLocation" value={formDetails.testerLocation} onChange={handleChange} />
        </div>
        <div className="attendance-section">
          <label htmlFor="testerHours">Tester Hours:</label>
          <input type="number" id="testerHours" name="testerHours" value={formDetails.testerHours} onChange={handleChange} />
        </div>
        <button className="btn btn-add" onClick={handleAdd}>Add Entry</button>
      </form>
      <div className="attendance-table-container">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Work Week Date</th>
              <th>Project ID & Name</th>
              <th>SOW Phase</th>
              <th>Task</th>
              <th>Task Description</th>
              <th>Non-Tester Hours</th>
              <th>Tester ID</th>
              <th>Tester Platform</th>
              <th>Tester Location</th>
              <th>Tester Hours</th>
            </tr>
          </thead>
          <tbody>
            {attendanceDetails.map((detail, index) => (
              <tr key={index}>
                <td>{detail.workWeekDate}</td>
                <td>{detail.projectID}</td>
                <td>{detail.SOWPhase}</td>
                <td>{detail.task}</td>
                <td>{detail.taskDescription}</td>
                <td>{detail.nonTesterHours}</td>
                <td>{detail.testerID}</td>
                <td>{detail.testerPlatform}</td>
                <td>{detail.testerLocation}</td>
                <td>{detail.testerHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-group">
        <button className="btn btn-save" onClick={handleSave}>Save</button>
        <button className="btn btn-submit" onClick={handleSubmit}>Submit</button>
        <button className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </div> 
  );
};

export default AttendancePage;
