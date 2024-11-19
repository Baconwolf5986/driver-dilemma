// JavaScript source code
import React from 'react';
import { useNavigate } from 'react-router-dom';
import InteractiveImage from './InteractiveImage.js';

import Situation1Image from './images/Situation1_0.jpg';
import Situation2Image from './images/Situation2_0.jpg';

import './SurveyPage.css'

function Survey() {
    const navigate = useNavigate();

    const goToResults = () => {
        navigate('/Results')
    }

    return (
        <div className='survey'>
        <p> Situation 1 </p>
            <InteractiveImage filename={Situation1Image} />
        <p> Situation 2 </p>
            <InteractiveImage filename={Situation2Image} />
        <p> Situation 3 </p>
            <div className='Situation3'>
            </div>

            <div className="SubmitVotes">
            SUBMIT VOTES
            </div>
        </div>
    );
}

export default Survey;