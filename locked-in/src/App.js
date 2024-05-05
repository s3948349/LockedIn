import React, { useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import Homepage from './HomePage';
import Animation from './Animation';
import Cards from './Cards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form';

function App() {

  return (
    <>
    <>
    <Router>
      <Routes>
      <Route path ="/" element = {<Animation/>} />
      <Route path ="/Home" element = {<Homepage/>} />
      <Route path="/Form" element = {<Form/>} />
      <Route path="/Cards" element = {<Cards/>} />
      </Routes>
    </Router>
    </>
    </>
  );
}

export default App;