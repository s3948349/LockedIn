import "./Cards.css";
import "./App.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { Box, ButtonGroup, Divider, Text, Heading, Stack, Image, Card, Button, CardFooter, CardBody } from '@chakra-ui/react';



function Cards() {

const [checkMarkClickCount, setCheckMarkClickCount] = useState(0);

const [currentIndex, setCurrentIndex] = useState(0);

const [students, setStudents] = useState([
    {
        name: "Sophia Bridges",
        field: "STEM",
        matchPercentage: 80,
        imageUrl: 'https://t3.ftcdn.net/jpg/02/57/07/40/360_F_257074046_HnOJVuJxaTnk9rCOatQjZcmpEd48lNjs.jpg',
        description: "Sophia is an Undergraduate student at RMIT studying in the field of STEM."
    },
    {
        name: "John Doe",
        field: "Arts",
        matchPercentage: 95,
        imageUrl: 'https://t4.ftcdn.net/jpg/02/39/97/31/360_F_239973168_THApLcIPF6hu7ElDjH74MA5M9qr7MePg.jpg',
        description: "John is a Postgraduate student at RMIT studying in the field of Law."
    },
    {
        name: "Alice Johnson",
        field: "Medicine",
        matchPercentage: 75,
        imageUrl: 'https://st2.depositphotos.com/4431055/7494/i/450/depositphotos_74940665-Student-University-College-Student.jpg',
        description: "Alice is a PhD student at RMIT studying in the field of Arts."
    }
]);

const handleUserClick = (increment) => {
    const nextIndex = currentIndex + increment;
    if (nextIndex < students.length) {
        setCurrentIndex(nextIndex);
    } else {
        alert("No more users");
        setCurrentIndex(0); // Reset to the beginning or handle appropriately
    }
};

// Function to handle match confirmation
const isMatch = () => {
    setCheckMarkClickCount(prevCount => prevCount + 1);
    handleUserClick(1); 
};


const randomPosition = () => {
    return `${Math.floor(Math.random() * 100)}%`;
};

const numStars = 100; // Number of stars you want

const stars = Array.from({ length: numStars }, (_, index) => ({
    id: index,
    top: randomPosition(),
    left: randomPosition(),
    animationDelay: `${Math.random() * 2}s`
}));

const currentStudent = students[currentIndex];

    return (
        <div className="HomePage-body">
            <div className="match-counter">
                Matches: {checkMarkClickCount}
            </div>
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
        <div className="card-body">
        <FontAwesomeIcon className="check-icon" icon={faSquareCheck} onClick={isMatch} size="2xl"/>
            <div className="card">
                <Card maxW='sm'borderRadius='lg' overflow='hidden'>
                    <CardBody>
                        <Box display="flex" justifyContent="center" alignItems="center"> {/* Centering Image */}
                        <Image className="Image"
                            src={currentStudent.imageUrl}
                            alt={currentStudent.description}
                            borderRadius='lg'
                        />
                        </Box>

                        <Stack mt='6' spacing='3'>
                            <Heading className="Heading">{currentStudent.name} - {currentStudent.matchPercentage}% Study Buddy Match!</Heading>
                            <Text className="Text">
                                {currentStudent.description}
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </div>
            <FontAwesomeIcon className="x-icon" icon={faRectangleXmark} onClick={() => handleUserClick(1)} size="2xl"/>

    </div>
    </div>
    </div>
    );
}

export default Cards;
