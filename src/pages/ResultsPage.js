// JavaScript source code
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BarGraph from './Graph.js'

function Results() {
    return (
        <div className="Results">
            <BarGraph situation="situation_1_result"
                graphTitle = "Situation 1: Group vs. Solo"
                choiceTitle1 = "Chose to hit the pole."
                choiceTitle2 = "Chose to continue to hit the group"
                choiceTitle3 = "Chose to hit the pedestrian"
            />
            <BarGraph situation="situation_2_result"
                graphTitle="Situation 2: Young vs. Old"
                choiceTitle1="Chose to hit the pole."
                choiceTitle2="Chose to continue to hit the child"
                choiceTitle3="Chose to hit the old man"
            />
            <BarGraph situation="situation_3_result"
                graphTitle="Situation 3: Pregnant Woman vs. Couple"
                choiceTitle1="Chose to hit the pole."
                choiceTitle2="Chose to continue to hit the pregnant woman"
                choiceTitle3="Chose to hit the couple"
            />
        </div>
    );
}

export default Results;