import React, { useState } from "react";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import './HomePage.css';

function Form() {
    const [tabIndex, setTabIndex] = useState(0)
    
    const handleSliderChange = (event) => {
        setTabIndex(parseInt(event.target.value, 10))
    }
    
    const handleTabsChange = (index) => {
        setTabIndex(index)
    }
    
    return (
        <Box>
        <input
            type='range'
            min='0'
            max='4'
            value={tabIndex}
            onChange={handleSliderChange}
        />
    
        <Tabs index={tabIndex} onChange={handleTabsChange}>
            <TabList>
            <Tab>University</Tab>
            <Tab>Goal</Tab>
            <Tab>University Level</Tab>
            <Tab>Discipline</Tab>
            <Tab>Platform</Tab>
            </TabList>
    
            <TabPanels>

                <TabPanel>
                    <p>Click the tabs or pull the slider around</p>
                </TabPanel>

                <TabPanel>
                    <p>Yeah yeah. What's up?</p>
                </TabPanel>

                <TabPanel>
                    <p>Oh, hello there.</p>
                </TabPanel>
                
            </TabPanels>
        </Tabs>
        </Box>
    )
}

export default Form;
