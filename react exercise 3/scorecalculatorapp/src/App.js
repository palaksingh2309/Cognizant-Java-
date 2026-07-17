import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        Name="Steve Rogers" 
        School="DAV Public School" 
        Total={385} 
        goal={5} 
      />
    </div>
  );
}

export default App;

