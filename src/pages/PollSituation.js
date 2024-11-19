// React component that allows the user to vote what option they would choose in the situation

import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { pollData, incrementOption } from './backend';

function PollSituation({ situation }) {
    const [pollResults, setPollResults] = useState({
        Option1_Result: 0,
        Option2_Result: 0,
        Option3_Result: 0
    });

    useEffect(() => {
        const docRef = doc(pollData, "DriverDilemmaQuestionResult", situation);

        const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
                setPollResults(docSnapshot.data());
            } else {
                console.warn("Document does not exist.");
            }
        });

        return () => unsubscribe();
    }, [situation]);

    const handleVote = (option) => {
        incrementOption(situation, option);
    };

    return (
        <div>
            <h2>What should the driver do?</h2>
            <button onClick={() => handleVote("Option1_Result")}>Option 1</button>
            <button onClick={() => handleVote("Option2_Result")}>Option 2</button>
            <button onClick={() => handleVote("Option3_Result")}>Option 3</button>

            <h2>Results:</h2>
            <p>Option 1: {pollResults?.Option1_Result ?? 0}</p>
            <p>Option 2: {pollResults?.Option2_Result ?? 0}</p>
            <p>Option 3: {pollResults?.Option3_Result ?? 0}</p>
        </div>
    );
}


export { PollSituation };