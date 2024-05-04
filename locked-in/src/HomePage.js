import React from 'react';

function Homepage() {
    const numStars = 100; // Number of stars you want

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
    </div>
    );
}

export default Homepage;