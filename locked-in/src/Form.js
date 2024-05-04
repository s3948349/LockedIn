import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './HomePage.css';

function Form() {
    const [step, setStep] = useState(1); // Current step of the form
    const [institution, setInstitution] = useState('');
    const [discipline, setDiscipline] = useState('');
    const [degree, setDegree] = useState('');
    const navigate = useNavigate();

    const goBack=()=>{
        navigate(-1);
    }

    // Function to proceed to the next step
    const nextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    // Function to go back to the previous step
    const prevStep = () => {
        setStep(prevStep => prevStep - 1);
    };

    // Render different form fields based on the step
    switch (step) {
        case 1:
            return (
                <div className="form-step">
                    <h2>Enter Institution</h2>
                    <input
                        type="text"
                        value={institution}
                        onChange={e => setInstitution(e.target.value)}
                        placeholder="Institution name"
                    />
                    <button onClick={nextStep}>Next</button>
                </div>
            );
        case 2:
            return (
                <div className="form-step">
                    <h2>Enter Discipline</h2>
                    <input
                        type="text"
                        value={discipline}
                        onChange={e => setDiscipline(e.target.value)}
                        placeholder="Discipline"
                    />
                    <button onClick={prevStep}>Back</button>
                    <button onClick={nextStep}>Next</button>
                </div>
            );
        case 3:
            return (
                <div className="form-step">
                    <h2>Enter Degree</h2>
                    <input
                        type="text"
                        value={degree}
                        onChange={e => setDegree(e.target.value)}
                        placeholder="Degree"
                    />
                    <button onClick={prevStep}>Back</button>
                    <button onClick={() => alert('Submission Complete')}>Submit</button>
                </div>
            );
        default:
            // Normally won't get here
    }
}

export default Form;
