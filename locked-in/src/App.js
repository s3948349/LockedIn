import React, { useEffect } from 'react';
import logo from './logo.png';
import './App.css';

function App({ onAnimationEnd }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 5000); // The duration matches the CSS animation time.

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

export default App;
