import React, { useState, useEffect } from 'react';
import { generateWeeks } from '../../utils/weekUtils';
import './WeekselectionPageStyles.css';
import { useNavigate } from 'react-router-dom';

const WeekselectionPage = () => {
  const [employeeName, setEmployeeName] = useState("Krishna Kumar Dhanabalan");
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [weeks, setWeeks] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const generatedWeeks = generateWeeks(currentYear);
    setWeeks(generatedWeeks);
    setSelectedWeek(generatedWeeks[0]); 
  }, []);

  const handleProceed = () => {
    if (selectedWeek) {
      navigate('/attendance', { state: { selectedWeek } });
    }
  };

  return (
    <div className="attendance-container">
      <header className="attendance-header">
        <div className="attendance-logo">
          <span className="company-name">Taras System and Solutions</span>
          <span className="portal-name">Timesheet Portal</span>
        </div>
        <div className="attendance-user-info">
          <i className="fas fa-user-circle"></i>
          <span>Welcome, {employeeName}</span>
        </div>
      </header>

      <div className="attendance-content">
        <div className="attendance-instructions">
          <h2><i className="fas fa-info-circle"></i> Important Instructions</h2>
          <ul>
            <li>* Enter actual hours you have worked on the project</li>
            <li>* Make sure you are entering into the right project ID</li>
            <li>* If you are working on multiple projects, submit the hours accordingly</li>
            <li>* Save the timesheet daily and submit before Friday EOD</li>
          </ul>
        </div>

        <div className="attendance-main">
          <div className="selection-card">
            <div className="attendance-section">
              <label htmlFor="employee-select">
                <i className="fas fa-user"></i> Employee Name
              </label>
              <select id="employee-select" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)}>
                <option value="">user</option>
              </select>
            </div>

            <div className="attendance-section">
              <label htmlFor="week-select">
                <i className="fas fa-calendar-week"></i> Select Work Week
              </label>
              <select 
                id="week-select" 
                value={selectedWeek?.weekString} 
                onChange={(e) => setSelectedWeek(weeks.find(w => w.weekString === e.target.value))}
              >
                {weeks.map((week) => (
                  <option key={week.weekNumber} value={week.weekString}>
                    {week.weekString}
                  </option>
                ))}
              </select>
              {selectedWeek && (
                <div className="week-details">
                  <div className="working-days">
                    {selectedWeek.workDays.map((workDay, index) => (
                      <div key={index} className={`work-day ${workDay.isHoliday ? 'holiday' : ''}`}>
                        <span className="day-name">{workDay.day}</span>
                        <span className="day-date">
                          {workDay.date.toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short'
                          })}
                        </span>
                        {workDay.isHoliday && (
                          <span className="holiday-name">
                            <i className="fas fa-star holiday-icon"></i>
                            {workDay.holidayName}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="attendance-proceed-button" onClick={handleProceed}>
              <i className="fas fa-arrow-right"></i> Proceed to Timesheet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekselectionPage;
