import React from 'react';
import CohortDetails from './CohortDetails';
import './App.css';

function App() {
  // Mock cohort list for the Academy Dashboard
  const cohorts = [
    {
      id: 1,
      code: "FSE-React-01 (Ongoing)",
      startDate: "15-May-2026",
      endDate: "30-Aug-2026",
      status: "ongoing"
    },
    {
      id: 2,
      code: "FSE-Angular-02 (Completed)",
      startDate: "10-Jan-2026",
      endDate: "20-Apr-2026",
      status: "completed"
    },
    {
      id: 3,
      code: "FSE-JavaMS-03 (Ongoing)",
      startDate: "01-Jul-2026",
      endDate: "15-Oct-2026",
      status: "ongoing"
    },
    {
      id: 4,
      code: "FSE-Cloud-04 (Upcoming)",
      startDate: "01-Sep-2026",
      endDate: "30-Nov-2026",
      status: "upcoming"
    }
  ];

  return (
    <div className="App" style={{ padding: '2rem', minHeight: '100vh' }}>
      <header style={{ marginBottom: '3rem', borderBottom: '2px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          margin: '0 0 0.5rem 0',
          background: 'linear-gradient(to right, #4ade80, #3b82f6)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent'
        }}>
          Academy Cohorts Dashboard
        </h1>
        <p style={{ margin: 0, color: '#94a3b8', fontSize: '1.1rem' }}>
          Details of ongoing and completed academy cohorts at Cognizant.
        </p>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cohorts.map(cohort => (
          <CohortDetails key={cohort.id} cohort={cohort} />
        ))}
      </main>
    </div>
  );
}

export default App;
