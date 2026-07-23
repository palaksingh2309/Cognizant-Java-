import React from 'react';

const flightsData = [
  { id: 'AF-101', airline: 'AeroFlex Airways', from: 'New Delhi (DEL)', to: 'Mumbai (BOM)', dep: '08:00 AM', arr: '10:15 AM', price: 5400, type: 'Direct' },
  { id: 'AF-204', airline: 'AeroFlex Airways', from: 'Bengaluru (BLR)', to: 'Kolkata (CCU)', dep: '11:30 AM', arr: '02:00 PM', price: 6800, type: 'Direct' },
  { id: 'AF-309', airline: 'AeroFlex Airways', from: 'Mumbai (BOM)', to: 'Chennai (MAA)', dep: '04:15 PM', arr: '06:10 PM', price: 4200, type: 'Direct' },
  { id: 'AF-412', airline: 'AeroFlex Airways', from: 'Hyderabad (HYD)', to: 'Singapore (SIN)', dep: '09:45 PM', arr: '04:50 AM', price: 18500, type: '1 Stop' }
];

function FlightList({ isLoggedIn, onSelectFlight, selectedFlightId }) {
  return (
    <div className="flights-container">
      <h3>✈️ Available Flight Schedules</h3>
      <div className="flight-grid">
        {flightsData.map((flight) => {
          const isSelected = selectedFlightId === flight.id;
          
          return (
            <div key={flight.id} className={`flight-card ${isSelected ? 'selected' : ''}`}>
              <div className="flight-card-header">
                <span className="airline-name">{flight.airline}</span>
                <span className="flight-id">{flight.id}</span>
              </div>
              
              <div className="flight-route">
                <div className="route-stop">
                  <span className="city">{flight.from}</span>
                  <span className="time">{flight.dep}</span>
                </div>
                <div className="route-arrow">
                  <span className="line"></span>
                  <span className="type-badge">{flight.type}</span>
                </div>
                <div className="route-stop">
                  <span className="city">{flight.to}</span>
                  <span className="time">{flight.arr}</span>
                </div>
              </div>

              <div className="flight-card-footer">
                <div className="price-tag">
                  <span className="label">Fare:</span>
                  <span className="value">₹{flight.price.toLocaleString('en-IN')}</span>
                </div>

                {/* Conditional Rendering of the Action Button */}
                {isLoggedIn ? (
                  <button 
                    className={`book-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => onSelectFlight(flight)}
                  >
                    {isSelected ? 'Selected' : 'Book Ticket'}
                  </button>
                ) : (
                  <button className="book-btn disabled" disabled>
                    🔒 Login to Book
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FlightList;
