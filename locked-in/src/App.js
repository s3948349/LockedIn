import React, { useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import Homepage from './HomePage';
import Animation from './Animation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

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