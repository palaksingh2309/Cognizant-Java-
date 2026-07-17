import React from 'react';
import '../Stylesheets/mystyle.css';

/**
 * CalculateScore functional component
 * Accepts student details as props, calculates the average score,
 * and renders a styled student score card.
 */
const CalculateScore = ({ Name, School, Total, goal }) => {
  // Calculate average score
  // If 'goal' is the number of subjects, average is Total / goal
  // If 'goal' represents maximum marks (e.g. 500), average could be percentage
  const calculateAverage = (total, targetGoal) => {
    if (!targetGoal || targetGoal <= 0) return 0;
    return (total / targetGoal).toFixed(2);
  };

  const average = calculateAverage(Total, goal);
  
  // Determine performance status based on the average score
  const getStatus = (avg) => {
    const numericAvg = parseFloat(avg);
    if (numericAvg >= 80) return { text: 'Excellent', class: 'status-excellent' };
    if (numericAvg >= 60) return { text: 'Very Good', class: 'status-good' };
    if (numericAvg >= 35) return { text: 'Pass', class: 'status-pass' };
    return { text: 'Needs Improvement', class: 'status-fail' };
  };

  const status = getStatus(average);

  return (
    <div className="score-card-container">
      <div className="score-card">
        <div className="card-header">
          <h2>Student Management Portal</h2>
          <span className="portal-badge">Score Card</span>
        </div>
        <div className="card-body">
          <div className="detail-row">
            <span className="detail-label">Student Name:</span>
            <span className="detail-value highlight-name">{Name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">School:</span>
            <span className="detail-value">{School}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Total Marks:</span>
            <span className="detail-value">{Total}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Goal / Subjects:</span>
            <span className="detail-value">{goal}</span>
          </div>
          <div className="divider"></div>
          <div className="detail-row result-row">
            <span className="detail-label result-label">Average Score:</span>
            <span className="detail-value result-value">{average}</span>
          </div>
          <div className="detail-row status-row">
            <span className="detail-label">Performance Status:</span>
            <span className={`status-badge ${status.class}`}>{status.text}</span>
          </div>
        </div>
        <div className="card-footer">
          <p>© Student Portal Score Calculator App</p>
        </div>
      </div>
    </div>
  );
};

export default CalculateScore;
