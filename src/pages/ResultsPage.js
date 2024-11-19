// JavaScript source code
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BarGraph from './Graph.js'

function Results() {
    const navigate = useNavigate();

    const goToSurvey = () => {
        navigate('/Survey')
    }

    return (
        <div className="Results">
            <BarGraph className="graph"/>
            <BarGraph className="graph"/>
        </div>
    );
}

export default Results;