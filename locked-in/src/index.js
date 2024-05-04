import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './HomePage';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

function Main() {
  const [animationDone, setAnimationDone] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationDone(true); // This function will be called when the animation in App finishes
  };

  return (
    <React.StrictMode>
      {!animationDone ? <App onAnimationEnd={handleAnimationEnd} /> : <HomePage />}
    </React.StrictMode>
  );
}

root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
