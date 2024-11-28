// JavaScript source code
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
                <div className="ProblemSection">
                <h3 className="Problem-Title"> THE PROBLEM </h3>
                <p className="Problem-Text">
                    Human lives are at risk, and human discrimination is impacted by AI models used for autonomous vehicles in challenging ethical vehicular-crash situations and decisions.
                    As self-driving cars become more prevalent engineers will inevitably have to face the ethical implications of unavoidable car accidents.
                    If a driver is unable to avoid an accident and the only choices are to crash into a wall, a person or a group of people, what choice should they make?
                    <p>
                    </p>The driver would have to make this choice quickly on the road. Self-driving cars will also have to make this choice.
                    Luckily, self-driving cars are built by humans, and thus we have the advantage of making the choice long before an accident ever happens.
                </p>
            </div>
            <div className="SolutionSection">
                <h3 className="Solution-Title"> OUR SOLUTION </h3>
                <p className="Solution-Text">
                    This project aims to answer this question by presenting users with a series of scenarios. The user will have to choose what decision would be best for that situation.
                   We will keep track of the answers and the result of all the users' choices will be presented to see what the general consensus is.
                    Hopefully these results will be informative to engineers and researchers, providing insight into what a majority of the people believe is an acceptable solution.
                </p>

                <p className="Solution-Next">
                    Click the button below to begin the survey.
                </p>
                <p className="Solution-Next">
                    &lt;NOTE: This survey works best on the phone.&gt;
                </p>
            </div>
            <Link to='/survey' className='SurveyButton'> TAKE THE SURVEY     </Link> 
        </div>
    );
}

export default Home;