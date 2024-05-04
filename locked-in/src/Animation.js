import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './Animation.css';

function Animation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Home');
    }, 5000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigate]);

  return (
    <div className="Logo-box">
      <div className="Logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Animation;
