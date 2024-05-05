import React, { useState } from "react";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Select, FormControl, FormLabel, Checkbox, Button, Text, Container } from '@chakra-ui/react'
import './App.css';

function Form() {
    const [tabIndex, setTabIndex] = useState(0);
    const [university, setUniversity] = useState('');
    const [goal, setGoal] = useState('');
    const [level, setLevel] = useState('');
    const [discipline, setDiscipline] = useState('');
    const [platform, setPlatform] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleNext = () => {
        if (isValidInput()) {
            if (tabIndex < 4) {
                setTabIndex(tabIndex + 1);
                setErrorMessage('');
            }
        } else {
            setErrorMessage('Please fill in all required fields to proceed.');
        }
    };

    const handleBack = () => {
        if (tabIndex > 0) {
            setTabIndex(tabIndex - 1);
            setErrorMessage('');
        }
    };

    const isValidInput = () => {
        switch (tabIndex) {
            case 0: return university !== '';
            case 1: return goal !== '';
            case 2: return level !== '';
            case 3: return discipline !== '';
            case 4: return platform.length > 0;
            default: return false;
        }
    };

    const handleCheckboxChange = (value) => {
        const currentIndex = platform.indexOf(value);
        const newChecked = [...platform];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setPlatform(newChecked);
    };

    return (
        <Container centerContent>
            <Box width="100%" maxW="600px" p="4" bg="#FFF8E3" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Box display="flex" justifyContent="center" mt="4">
                    <input
                        type='range'
                        min='0'
                        max='4'
                        value={tabIndex}
                        style={{ width: '100%' }}
                        onChange={() => {}} // This does nothing when slider is used
                    />
                </Box>
            
                <Tabs index={tabIndex} onChange={() => {}} variant="soft-rounded" colorScheme="pink">
                    <TabList mb="1em">
                        <Tab isDisabled>University</Tab>
                        <Tab isDisabled>Goal</Tab>
                        <Tab isDisabled>University Level</Tab>
                        <Tab isDisabled>Discipline</Tab>
                        <Tab isDisabled>Platform</Tab>
                    </TabList>
            
                    <TabPanels>
                        <TabPanel>
                            <FormControl>
                                <FormLabel htmlFor='university'>Choose University</FormLabel>
                                <Select id='university' value={university} onChange={e => setUniversity(e.target.value)}>
                                    <option value=''>Select an option</option>
                                    <option value='uni1'>RMIT University</option>
                                    <option value='uni2'>Monash University</option>
                                    <option value='uni3'>Deakin University</option>
                                    <option value='uni3'>University of Melbourne</option>
                                </Select>
                            </FormControl>
                        </TabPanel>

                        <TabPanel>
                            <FormControl>
                                <FormLabel htmlFor='goal'>Select Your Goal</FormLabel>
                                <Select id='goal' value={goal} onChange={e => setGoal(e.target.value)}>
                                    <option value=''>Select an option</option>
                                    <option value='buddy'>Find study buddies</option>
                                    <option value='community'>Find a community</option>
                                </Select>
                            </FormControl>
                        </TabPanel>

                        <TabPanel>
                            <FormControl>
                                <FormLabel htmlFor='level'>Select University Level</FormLabel>
                                <Select id='level' value={level} onChange={e => setLevel(e.target.value)}>
                                    <option value=''>Select an option</option>
                                    <option value='undergrad'>Undergraduate</option>
                                    <option value='grad'>Graduate</option>
                                    <option value='doct'>Doctorate</option>
                                </Select>
                            </FormControl>
                        </TabPanel>

                        <TabPanel>
                            <FormControl>
                                <FormLabel htmlFor='discipline'>Choose Discipline</FormLabel>
                                <Select id='discipline' value={discipline} onChange={e => setDiscipline(e.target.value)}>
                                    <option value=''>Select an option</option>
                                    <option value='science'>Science</option>
                                    <option value='engineering'>Engineering</option>
                                    <option value='law'>Law</option>
                                    <option value='business'>Business & Economics</option>
                                    <option value='comp'>Computer Science & IT</option>
                                </Select>
                            </FormControl>
                        </TabPanel>

                        <TabPanel>
                            <FormControl>
                                <FormLabel htmlFor='platform'>Select Platform</FormLabel>
                                <Checkbox isChecked={platform.includes('online')} onChange={() => handleCheckboxChange('online')}>Online</Checkbox>
                                <Checkbox isChecked={platform.includes('offline')} onChange={() => handleCheckboxChange('offline')}>On Campus</Checkbox>
                                <Checkbox isChecked={platform.includes('hybrid')} onChange={() => handleCheckboxChange('hybrid')}>Hybrid</Checkbox>
                            </FormControl>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                {errorMessage && <Text color="#F7418F" mb="4">{errorMessage}</Text>}
                <Box display="flex" justifyContent="space-between" mt="4">
                    <Button colorScheme="pink" variant="outline" onClick={handleBack} isDisabled={tabIndex === 0}>Back</Button>
                    <Button colorScheme="pink" onClick={handleNext}>Next</Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Form;

