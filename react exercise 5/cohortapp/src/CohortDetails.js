import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  // Check if cohort status is "ongoing" (case-insensitive)
  const isOngoing = cohort.status && cohort.status.toLowerCase() === 'ongoing';
  
  // Define style for h3: green when ongoing, blue in all other scenarios
  const h3Style = {
    color: isOngoing ? 'green' : 'blue',
    marginTop: '0px',
    marginBottom: '15px',
    fontSize: '1.35rem',
    fontWeight: 'bold',
    borderBottom: '1px dashed rgba(255, 255, 255, 0.1)',
    paddingBottom: '8px'
  };

  return (
    <div className={styles.box}>
      <h3 style={h3Style}>
        {cohort.code || cohort.name}
      </h3>
      <dl>
        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>
        
        <dt>End Date</dt>
        <dd>{cohort.endDate}</dd>
        
        <dt>Status</dt>
        <dd>{cohort.status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
