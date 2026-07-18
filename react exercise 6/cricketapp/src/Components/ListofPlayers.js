import React from 'react';
import '../Stylesheets/styles.css';

function ListofPlayers() {
  // Declare an array with 11 players storing names and scores
  const players = [
    { id: 1, name: 'Sachin Tendulkar', score: 120 },
    { id: 2, name: 'Virat Kohli', score: 95 },
    { id: 3, name: 'Rohit Sharma', score: 110 },
    { id: 4, name: 'MS Dhoni', score: 85 },
    { id: 5, name: 'Rishabh Pant', score: 75 },
    { id: 6, name: 'KL Rahul', score: 65 },
    { id: 7, name: 'Hardik Pandya', score: 60 },
    { id: 8, name: 'Shikhar Dhawan', score: 50 },
    { id: 9, name: 'Ravindra Jadeja', score: 45 },
    { id: 10, name: 'Jasprit Bumrah', score: 30 },
    { id: 11, name: 'Mohammed Shami', score: 20 }
  ];

  // Filter players with scores below 70 using arrow function of ES6
  const filteredPlayers = players.filter(player => player.score < 70);

  // Function to determine score badge class
  const getBadgeClass = (score) => {
    if (score >= 100) return 'player-score-badge high-score';
    if (score < 70) return 'player-score-badge low-score';
    return 'player-score-badge';
  };

  return (
    <div className="section-card">
      <h2 className="section-title">
        🏏 Player Management Portal
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Managing team scores and player performances using ES6 features.
      </p>

      {/* Grid displaying All Players */}
      <h3 className="section-subtitle">All Players (using map)</h3>
      <div className="player-grid">
        {players.map((player, index) => (
          <div key={player.id} className="player-card">
            <div className="player-info">
              <div className="player-number">Player {index + 1}</div>
              <div className="player-name">{player.name}</div>
              <span className={getBadgeClass(player.score)}>
                Score: {player.score}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ margin: '3rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}></div>

      {/* Grid displaying Filtered Players (Scores below 70) */}
      <h3 className="section-subtitle" style={{ color: '#f87171' }}>
        Players with Scores Below 70 (using filter & arrow function)
      </h3>
      <div className="player-grid">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <div key={player.id} className="player-card" style={{ borderColor: 'rgba(239, 68, 68, 0.2)' }}>
              <div className="player-info">
                <div className="player-number" style={{ color: '#ef4444' }}>Below Par</div>
                <div className="player-name">{player.name}</div>
                <span className="player-score-badge low-score">
                  Score: {player.score}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="info-banner" style={{ gridColumn: '1 / -1' }}>
            No players scored below 70!
          </div>
        )}
      </div>
    </div>
  );
}

export default ListofPlayers;
