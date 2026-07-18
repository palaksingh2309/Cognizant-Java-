import React, { useState } from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';
import './Stylesheets/styles.css';

function App() {
  // Define state for the Flag variable (default true)
  const [flag, setFlag] = useState(true);

  // Using a simple if-else on the flag variable to determine which component to render
  let componentToDisplay;
  if (flag === true) {
    componentToDisplay = <ListofPlayers />;
  } else {
    componentToDisplay = <IndianPlayers />;
  }

  return (
    <div className="app-container">
      {/* Premium Header */}
      <header className="app-header">
        <h1>Cricket App</h1>
        <p>Demonstrating ES6 features: Map, Filter, Arrow Functions, Destructuring & Spread Operator</p>
      </header>

      {/* Interactive Toggle for the Flag */}
      <div className="toggle-wrapper">
        <div className="toggle-container">
          <button 
            id="toggle-flag-true"
            className={`toggle-button ${flag ? 'active' : ''}`} 
            onClick={() => setFlag(true)}
          >
            Flag = True (ListofPlayers)
          </button>
          <button 
            id="toggle-flag-false"
            className={`toggle-button ${!flag ? 'active' : ''}`} 
            onClick={() => setFlag(false)}
          >
            Flag = False (IndianPlayers)
          </button>
        </div>
      </div>

      {/* Main Component Display Area */}
      <main className="content-area">
        {componentToDisplay}
      </main>
    </div>
  );
}

export default App;
