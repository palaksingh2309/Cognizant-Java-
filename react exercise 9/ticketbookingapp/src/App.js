import React, { useState } from 'react';
import FlightList from './Components/FlightList';
import BookingForm from './Components/BookingForm';
import ConceptGuide from './Components/ConceptGuide';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setSelectedFlight(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedFlight(null);
  };

  // OBJECTIVE: Define element variables
  // We declare `portalView` as a variable and conditionally assign a JSX tree to it.
  let portalView;

  if (isLoggedIn) {
    portalView = (
      <div className="portal-container user-portal animate-fade-in">
        <div className="portal-info-banner">
          <h4>✈️ Active Session: Logged In as Premium Member</h4>
          <p>You can now book flight tickets. Select a schedule below to open the boarding registrar form.</p>
        </div>
        
        {/* Render flight listings with booking active */}
        <FlightList 
          isLoggedIn={true} 
          onSelectFlight={setSelectedFlight} 
          selectedFlightId={selectedFlight?.id} 
        />

        {/* Dynamic Booking Form: returns null if no flight is selected */}
        <BookingForm 
          flight={selectedFlight} 
          onConfirmBooking={() => {}}
        />
      </div>
    );
  } else {
    portalView = (
      <div className="portal-container guest-portal animate-fade-in">
        <div className="portal-info-banner guest">
          <h4>🌐 Session Status: Browsing as Guest</h4>
          <p>You are viewing our real-time flight catalog. Booking forms are locked. Please log in to complete purchases.</p>
        </div>

        {/* Render flight listings with booking disabled */}
        <FlightList 
          isLoggedIn={false} 
          onSelectFlight={() => {}} 
          selectedFlightId={null} 
        />
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Top Banner and Navigation */}
      <header className="app-header">
        <div className="header-top-nav">
          <div className="logo-section">
            <span className="airplane-icon">✈️</span>
            <h2>AeroFlex Airways</h2>
          </div>
          
          <div className="auth-controls">
            {/* Conditional Rendering of Login / Logout Buttons */}
            {isLoggedIn ? (
              <button className="auth-btn logout" onClick={handleLogout}>
                Logout (Switch to Guest View)
              </button>
            ) : (
              <button className="auth-btn login" onClick={handleLogin}>
                Login (Switch to User View)
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Grid Layout containing Main Portal View and Concept Guides */}
      <div className="dashboard-grid">
        
        {/* Left Panel: Conditional rendering of portalView using our element variable */}
        <main className="portal-main-area">
          <h2 className="section-title">
            {isLoggedIn ? "User Booking Dashboard" : "Guest Flight Schedules"}
          </h2>
          {portalView}
        </main>

        {/* Right Panel: Concept Guide */}
        <section className="learning-guide-section">
          <h2 className="section-title">Lab Objectives & Concepts</h2>
          <ConceptGuide />
        </section>

      </div>
    </div>
  );
}

export default App;
