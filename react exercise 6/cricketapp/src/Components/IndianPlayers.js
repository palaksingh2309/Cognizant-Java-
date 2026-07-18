import React from 'react';
import '../Stylesheets/styles.css';

function IndianPlayers() {
  // Base players list to showcase destructuring
  const basePlayers = [
    'Sachin Tendulkar', // 1st (Odd)
    'Virat Kohli',      // 2nd (Even)
    'Rohit Sharma',     // 3rd (Odd)
    'MS Dhoni',         // 4th (Even)
    'Rishabh Pant',     // 5th (Odd)
    'KL Rahul',         // 6th (Even)
    'Hardik Pandya',    // 7th (Odd)
    'Jasprit Bumrah',   // 8th (Even)
    'Ravindra Jadeja',  // 9th (Odd)
    'Mohammed Shami'    // 10th (Even)
  ];

  // a. Display Odd Team Player and Even Team players using the Destructuring features of ES6
  // Destructuring the array elements into distinct variables
  const [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth
  ] = basePlayers;

  // Putting them into odd and even teams
  const oddTeam = [first, third, fifth, seventh, ninth];
  const evenTeam = [second, fourth, sixth, eighth, tenth];

  // b. Declare two arrays T20players and RanjiTrophy players
  const T20players = ['Virat Kohli', 'Rohit Sharma', 'Hardik Pandya', 'Jasprit Bumrah', 'Suryakumar Yadav'];
  const RanjiTrophyplayers = ['Ruturaj Gaikwad', 'Abhimanyu Easwaran', 'Sarfaraz Khan', 'Sai Sudharsan'];

  // Merge the two arrays and display them using the Merge feature of ES6 (Spread operator)
  const mergedPlayers = [...T20players, ...RanjiTrophyplayers];

  return (
    <div className="section-card">
      <h2 className="section-title">
        🇮🇳 Indian Players Portal
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
        Showcasing ES6 Array Destructuring and Spread Syntax (Merge feature).
      </p>

      {/* Side by side Odd and Even Teams */}
      <div className="teams-flex-container">
        {/* Odd Team Column */}
        <div className="team-column" style={{ borderLeft: '4px solid var(--primary)' }}>
          <h3 className="section-subtitle" style={{ color: 'var(--primary)', marginTop: 0 }}>
            Odd Team Players
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            Destructured from positions 1, 3, 5, 7, 9
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {oddTeam.map((player, idx) => (
              <div key={idx} className="merged-player-chip" style={{ borderLeft: '3px solid var(--primary)', textAlign: 'left' }}>
                <span style={{ color: 'var(--primary)', marginRight: '10px' }}>#{idx * 2 + 1}</span>
                {player}
              </div>
            ))}
          </div>
        </div>

        {/* Even Team Column */}
        <div className="team-column" style={{ borderLeft: '4px solid var(--secondary)' }}>
          <h3 className="section-subtitle" style={{ color: 'var(--secondary)', marginTop: 0 }}>
            Even Team Players
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
            Destructured from positions 2, 4, 6, 8, 10
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {evenTeam.map((player, idx) => (
              <div key={idx} className="merged-player-chip" style={{ borderLeft: '3px solid var(--secondary)', textAlign: 'left' }}>
                <span style={{ color: 'var(--secondary)', marginRight: '10px' }}>#{idx * 2 + 2}</span>
                {player}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Merged Players Section */}
      <div className="merged-players-section">
        <h3 className="section-subtitle">
          Merged Squad (T20 & Ranji Trophy)
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Combined using ES6 Spread syntax: <code>[...T20players, ...RanjiTrophyplayers]</code>
        </p>

        <div className="merged-list">
          {mergedPlayers.map((player, idx) => (
            <div key={idx} className="merged-player-chip">
              {player}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IndianPlayers;
