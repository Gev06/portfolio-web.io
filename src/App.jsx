import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import MainPage from './MainPage';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnter = () => {
    setShowWelcome(false);
  };

  return (
    <div className="App">
      {showWelcome ? <WelcomePage onEnter={handleEnter} /> : <MainPage />}
    </div>
  );
}

export default App;
