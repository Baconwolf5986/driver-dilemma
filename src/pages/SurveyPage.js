// JavaScript source code
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InteractiveImage from './InteractiveImage.js';
import { incrementOption } from './backend.js'
import {ToastContainer, toast } from 'react-toastify';

import Situation1Image from './images/Situation1_0.jpg';
import Situation2Image from './images/Situation2_0.jpg';
import Situation3Image from './images/Situation3_0.jpg';

import './SurveyPage.css'

function Survey() {
    const [selections, setSelections] = useState({
        Situation1Choice: 0,
        Situation2Choice: 0,
        Situation3Choice: 0
    });

    const handleChoice = (situation, choice) => {
        // Update and store the choices made by the user
        setSelections((prevSelections) => ({
            ...prevSelections,
            [situation]: choice,
        }));
    }

    const generateRandomID = () => {
        // Generate a random ID for the user
        return Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
    };

    // Check if the suer has already voted, if not generate a new ID
    function alreadyVoted() {
        let userID = localStorage.getItem('userID');
        if (!userID) {
            userID = generateRandomID();
            localStorage.setItem('userID', userID);
            return false;
        }

        toast('You have already voted! This vote will not be added to the total');
        return true;
    };

    const submitChoices = async () => {
        // Turn in choices to the firestore backend
        const { Situation1Choice, Situation2Choice, Situation3Choice } = selections;

        if (alreadyVoted()) {
            return;
        }

        try {
            if (Situation1Choice) {
                await incrementOption("situation_1_result",`Option${Situation1Choice}`);
            }
            if (Situation2Choice) {
                await incrementOption("situation_2_result", `Option${Situation2Choice}`);
            }
            if (Situation3Choice) {
                await incrementOption("situation_3_result", `Option${Situation3Choice}`);
            }
        } catch (error) {
            console.error("Error submitting votes", error);
        }
    };

    return (
        <div className='survey'>
        <div className="Instructions">
            <h className="InstructionsTitle"> SURVEY INSTRUCTIONS </h>
            <p className="CONTEXT">
                You will be presented with 3 situations. Each situation will provide context
                and three choices.
                Please read through each situation in its entirety before making a choice.
                </p>
            <p className="MoreContext">
                    <br />To make your choice click on the part of the image that you would want the Autonomous-Vehicle to choose.
                    <br />Submit your votes by clicking the button at the bottom of the page.
            </p>
        </div>
            <h4 className="SituationTitle"> SITUATION I </h4>
            <div className="SituationDescription">
            <p className="CONTEXT">
                CONTEXT: The AV is driving at a high speed and is unable to stop in time and must make a decision.
                The AV is going straight towards a group of people and sees a single pedestrian in the other lane. The AV can make one of the following choices.  
            </p>
            <p className="choice">
                1. Turn and hit the pole.
            </p>
            <p className="choice">
                2. Continue forward and hit the group of people.
            </p>
            <p className="choice">
                3. Turn and hit the single pedsetrian.
            </p>
            <p className="Question">
                What do you want the Autonomous-Vehicle to do?
            </p>

            <InteractiveImage
                filename={Situation1Image}
                imageMap="Situation 1"
                selection={(choice) => handleChoice('Situation1Choice', choice)}
                area1coords="168,555,1,224"
                area2coords="646,555,255,270"
                area3coords="803,279,983,555"
                />
            </div>
            <p className="SituationTitle"> SITUATION II </p>
            <div className="SituationDescription">
                <p className="CONTEXT">
                    CONTEXT: The AV is driving at a high speed and is unable to stop in time and must make a decision.
                    The AV is going straight towards a small child and sees an old man in the other lane. The AV can make one of the following choices.
                </p>
                <p className="choice">
                    1. Turn and hit the pole.
                </p>
                <p className="choice">
                    2. Continue forward and hit the child.
                </p>
                <p className="choice">
                    3. Turn and hit the elderly man.
                </p>
                <p className="Question">
                    What do you want the Autonomous-Vehicle to do?
                </p>
            <InteractiveImage
                filename={Situation2Image}
                imageMap="Situation 2"
                selection={(choice) => handleChoice('Situation2Choice', choice)}
                area1coords="3,224,168,552"
                area2coords="377,395,538,576"
                area3coords="853,371,1087,552"
                />
            </div>
            <p className="SituationTitle"> SITUATION III </p>
            <div className="SituationDescription">
                <p className="CONTEXT">
                    CONTEXT: The AV is driving at a high speed and is unable to stop in time and must make a decision.
                    The AV is going straight towards a pregnant woman and sees a couple in the other lane. The AV can make one of the following choices.
                </p>
                <p className="choice">
                    1. Turn and hit the pole.
                </p>
                <p className="choice">
                    2. Continue forward and hit the pregnant woman.
                </p>
                <p className="choice">
                    3. Turn and hit the couple.
                </p>
                <p className="Question">
                    What do you want the Autonomous-Vehicle to do?
                </p>
            <InteractiveImage
                filename={Situation3Image}
                imageMap="Situation 3"
                selection={(choice) => handleChoice('Situation3Choice', choice)}
                area1coords="4,224,166,552"
                area2coords="393,269,523,561"
                area3coords="687,266,978,565"
                />
             </div>

            <Link
                to='/results'
                className="SubmitVotes"
                onClick={submitChoices}
            >
            SUBMIT VOTES
            </Link>
        </div>
    );
}

export default Survey;