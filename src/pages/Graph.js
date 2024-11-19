// JavaScript source code
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { pollData } from './backend';
import { doc, getData, onSnapshot } from 'firebase/firestore';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const backgroundColorPlugin = {
    id: "backgroundColor",
    beforeDraw: (chart) => {
        const { ctx, width, height } = chart;
        ctx.fillStyle = "rgba(34, 34, 34, 1)"; // Set your background color
        ctx.fillRect(0, 0, width, height);
    },
};

const BarGraph = () => {
    // Get data from database
    const [pollResults, setPollResults] = useState({
        Option1_Result: 0,
        Option2_Result: 0,
        Option3_Result: 0
    });

    useEffect(() => {
        const docRef = doc(pollData, "DriverDilemmaQuestionResult", "situation_1_result");

        const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
            if (docSnapshot.exists()) {
                setPollResults(docSnapshot.data());
            } else {
                console.warn("Document does not exist.");
            }
        });

        return () => unsubscribe();
    });

    const chartData = {
        labels: ['Chose to hit the pole', 'Chose to hit the group', 'Chose to hit the single person'],
        datasets: [
            {
                label: 'Situation 1: User Count',
                data: [pollResults.Option1_Result, pollResults.Option2_Result, pollResults.Option3_Result],
                backgroundColor: 'rgb(133,235,217)',
            },
        ],
    };

    const options = {
        responsive: true,
        animation: {
            duration: 1000,
        },
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Situation 1: Group vs Solo',
                font: {
                    size: 35,
                },
                color: 'white',
            },
        },
            scales: {
                x: {
                    ticks: {
                        color: 'white',
                        font: {
                            size: 20,
                        },
                    },
                },
        },
        layout: {
            padding: {
                top: 20,
                bottom: 20,
            },
            margin: {
                top: 20,
                bottom: 20,
            },
        },
    };

    return <Bar data={chartData} options={options} plugins={[backgroundColorPlugin]} />;
};

export default BarGraph;