import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function Homepage() {
    const numStars = 100; // Number of stars you want
    const navigate = useNavigate();

    // Function to generate random positions for stars
    const randomPosition = () => {
        return `${Math.floor(Math.random() * 100)}%`;
    };

    // Create an array of stars
    const stars = Array.from({ length: numStars }, (_, index) => ({
        id: index,
        top: randomPosition(),
        left: randomPosition(),
        animationDelay: `${Math.random() * 2}s`
    }));

    const goToForm = () => {
        // This will cause the browser to load a new page and drop all React states
        navigate("/Form") ;   
    }

    return (
    <div className="HomePage-body">
        <div className="stars">
            {stars.map(star => (
                <span
                    key={star.id}
                    className="star"
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDelay: star.animationDelay
                    }}
                ></span>
            ))}
        </div>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Cantora+One&family=Contrail+One&display=swap" rel="stylesheet"></link>
        <div className="home-text">Ready?
        <button className="lock-in-button" onClick={goToForm}>Lock in</button></div>
    </div>
    );
}

export default Homepage;