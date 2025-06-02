import React, { useState } from 'react';
import './WelcomePage.css'; 

function WelcomePage({ onEnter }) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      onEnter(); 
    }, 1500); 
  };

  return (
    <div className="welcome-container">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="welcome-content">
          <h1 className="welcome-title">WELCOME!</h1>
          <p className="welcome-subtitle">This is my personal <br /> portfolio website</p>
          <button className="enter-button" onClick={handleClick}>
            WELCOME
          </button>
        </div>
      )}
    </div>
  );
}

export default WelcomePage;
