import React, { useState } from 'react';

function BookingForm({ flight, onConfirmBooking }) {
  const [passengerName, setPassengerName] = useState('');
  const [age, setAge] = useState('');
  const [seatClass, setSeatClass] = useState('Economy');
  const [seatPreference, setSeatPreference] = useState('Window');
  const [ticketDetails, setTicketDetails] = useState(null);

  // OBJECTIVE: Explain how to prevent components from rendering
  // If no flight is selected, return null. React will render nothing for this component.
  if (!flight) {
    return null;
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!passengerName.trim() || !age) {
      alert("Please fill in passenger details.");
      return;
    }

    const bookingRef = `BK-${Math.floor(100000 + Math.random() * 900000)}`;
    const finalPrice = seatClass === 'Business' ? flight.price * 1.8 : flight.price;

    setTicketDetails({
      bookingRef,
      passengerName,
      age,
      seatClass,
      seatPreference,
      flightId: flight.id,
      from: flight.from,
      to: flight.to,
      dep: flight.dep,
      arr: flight.arr,
      price: finalPrice
    });

    if (onConfirmBooking) {
      onConfirmBooking();
    }
  };

  const handleReset = () => {
    setTicketDetails(null);
    setPassengerName('');
    setAge('');
    setSeatClass('Economy');
    setSeatPreference('Window');
  };

  return (
    <div className="booking-form-container animate-fade-in">
      {!ticketDetails ? (
        <div className="booking-form-card">
          <h4>🎟️ Ticket Booking Portal</h4>
          <p className="selected-flight-banner">
            Booking flight <strong>{flight.id}</strong>: {flight.from} to {flight.to}
          </p>

          <form onSubmit={handleBookingSubmit} className="booking-form">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="passenger-name">Passenger Name</label>
                <input 
                  id="passenger-name"
                  type="text" 
                  placeholder="Enter passenger name" 
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  required 
                />
              </div>

              <div className="input-group">
                <label htmlFor="passenger-age">Age</label>
                <input 
                  id="passenger-age"
                  type="number" 
                  placeholder="Age" 
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="1"
                  max="120"
                  required 
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="seat-class">Cabin Class</label>
                <select 
                  id="seat-class"
                  value={seatClass}
                  onChange={(e) => setSeatClass(e.target.value)}
                >
                  <option value="Economy">Economy Class (Standard)</option>
                  <option value="Business">Business Class (+80% fare)</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="seat-preference">Seat Selection</label>
                <select 
                  id="seat-preference"
                  value={seatPreference}
                  onChange={(e) => setSeatPreference(e.target.value)}
                >
                  <option value="Window">Window</option>
                  <option value="Aisle">Aisle</option>
                  <option value="Middle">Middle</option>
                </select>
              </div>
            </div>

            <button type="submit" className="confirm-booking-btn">
              Confirm Ticket Purchase
            </button>
          </form>
        </div>
      ) : (
        <div className="boarding-pass-card animate-fade-in">
          <div className="pass-header">
            <div>
              <span className="logo">AeroFlex Airways</span>
              <h3>BOARDING PASS</h3>
            </div>
            <div className="ref-box">
              <span className="ref-label">Booking Ref:</span>
              <span className="ref-val">{ticketDetails.bookingRef}</span>
            </div>
          </div>
          
          <div className="pass-body">
            <div className="pass-row">
              <div className="pass-item">
                <span className="label">Passenger</span>
                <span className="value">{ticketDetails.passengerName} (Age: {ticketDetails.age})</span>
              </div>
              <div className="pass-item">
                <span className="label">Flight</span>
                <span className="value highlighting">{ticketDetails.flightId}</span>
              </div>
            </div>

            <div className="pass-row">
              <div className="pass-item">
                <span className="label">From</span>
                <span className="value">{ticketDetails.from}</span>
              </div>
              <div className="pass-item">
                <span className="label">To</span>
                <span className="value">{ticketDetails.to}</span>
              </div>
            </div>

            <div className="pass-row">
              <div className="pass-item">
                <span className="label">Departure</span>
                <span className="value">{ticketDetails.dep}</span>
              </div>
              <div className="pass-item">
                <span className="label">Arrival</span>
                <span className="value">{ticketDetails.arr}</span>
              </div>
            </div>

            <div className="pass-row">
              <div className="pass-item">
                <span className="label">Seat Preference</span>
                <span className="value">{ticketDetails.seatPreference} / {ticketDetails.seatClass}</span>
              </div>
              <div className="pass-item">
                <span className="label">Total Price Paid</span>
                <span className="value highlight-price">₹{ticketDetails.price.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <div className="pass-footer">
            <p>✈️ Thank you for choosing AeroFlex. Have a safe journey!</p>
            <button className="book-another-btn" onClick={handleReset}>
              Book Another Ticket
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
