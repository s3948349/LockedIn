import "./Cards.css";
import "./App.css";
import React, { useEffect, useState, setOutput, setError } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleXmark,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  ButtonGroup,
  Divider,
  Text,
  Heading,
  Stack,
  Image,
  Card,
  Button,
  CardFooter,
  CardBody,
} from "@chakra-ui/react";
import axios from "axios";

function Cards() {
    const [checkMarkClickCount, setCheckMarkClickCount] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [students, setStudents] = useState([]);
  
    const getRandomMatchPercentage = () => {
        return Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
      };
    //id,name,uni,discipline,level,goal,platform,preference
    const [matchPercentage, setMatchPercentage] = useState(getRandomMatchPercentage());

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:5000/array");
          const formattedStudents = response.data.map(student => ({
            id: student[0],
            name: student[1],
            university: student[2],
            discipline: student[3],
            level: student[4],
            goal: student[5],
            platform: student[6],
            preference : student[7],
            imageUrl: student[8],
          }));
          setStudents(formattedStudents);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleUserClick = (increment) => {
      const nextIndex = currentIndex + increment;
      if (nextIndex < students.length) {
        setCurrentIndex(nextIndex);
      } else {
        alert("No more users");
        setCurrentIndex(0); // Reset to the beginning or handle appropriately
      }
    };
  
    const isMatch = () => {
        if (currentIndex < students.length) {
            setCheckMarkClickCount((prevCount) => prevCount + 1);
            handleUserClick(1);
        }
        else {
            alert("No more users");
        setCurrentIndex(0); // Reset to the beginning or handle appropriately
              }
    };
  
    const randomPosition = () => `${Math.floor(Math.random() * 100)}%`;
    const numStars = 100;
    const stars = Array.from({ length: numStars }, (_, index) => ({
      id: index,
      top: randomPosition(),
      left: randomPosition(),
      animationDelay: `${Math.random() * 2}s`,
    }));
  
    const currentStudent = students[currentIndex];
  
    // Check if currentStudent is defined
    if (!currentStudent) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="HomePage-body">
        <div className="match-counter">Matches: {checkMarkClickCount}</div>
        <div className="stars">
          {stars.map((star) => (
            <span
              key={star.id}
              className="star"
              style={{
                top: star.top,
                left: star.left,
                animationDelay: star.animationDelay,
              }}
            ></span>
          ))}
          <div className="card-body">
            <FontAwesomeIcon
              className="check-icon"
              icon={faSquareCheck}
              onClick={isMatch}
              size="2xl"
            />
            <div className="card">
              <Card maxW="sm" borderRadius="lg" overflow="hidden">
                <CardBody>
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <Image
                      className="Image"
                      src={currentStudent.imageUrl || 'https://via.placeholder.com/150'}
                      alt={currentStudent.imageUrl}
                      borderRadius="lg"
                    />
                  </Box>
  
                  <Stack mt="6" spacing="3">
                    <Heading className="Heading">
                      {`${currentStudent.name} - ${matchPercentage}% Study Buddy Match!`}
                    </Heading>
                    <Text className="Text">Hi there, I am currenly an {currentStudent.discipline} student looking to find study buddies for {currentStudent.goal}. I would like to study {currentStudent.platform}.</Text>
                  </Stack>
                </CardBody>
              </Card>
            </div>
            <FontAwesomeIcon
              className="x-icon"
              icon={faRectangleXmark}
              onClick={() => handleUserClick(1)}
              size="2xl"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;
  