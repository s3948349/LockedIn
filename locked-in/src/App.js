import React, { useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import Homepage from './HomePage';
import Animation from './Animation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App({ onAnimationEnd }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 5000); // The duration matches the CSS animation time.

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <>
    <>
    <Router>
      <Routes>
      <Route path ="/" element = {<Animation/>} />
      <Route path ="/Home" element = {<Homepage/>} />
      </Routes>
    </Router>
    </>
    </>
  );
}

export default App;