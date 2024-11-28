// JavaScript source code
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { pollData } from './backend';
import { doc, getData, onSnapshot } from 'firebase/firestore';
import './ResultsPage.css'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const backgroundColorPlugin = {
    id: "backgroundColor",
    beforeDraw: (chart) => {
        const { ctx, width, height } = chart;
        ctx.fillStyle = "rgba(34, 34, 34, 1)"; // Set your background color
        ctx.fillRect(0, 0, width, height);
    },
};

const BarGraph = (
    { situation ,
     graphTitle ,
     choiceTitle1 ,
     choiceTitle2,
     choiceTitle3 }
      ) => {
    // Get data from database
    const [pollResults, setPollResults] = useState({
        Option1: 0,
        Option2: 0,
        Option3: 0
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
    });

    const chartData = {
        labels: [choiceTitle1, choiceTitle2, choiceTitle3],
        datasets: [
            {
                label: graphTitle,
                data: [pollResults.Option1, pollResults.Option2, pollResults.Option3],
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
                text: graphTitle,
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
                        size: 18,
                    },
                },
            },
            y: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 17,
                    },
                   },
                }
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

    return (
        <div className="graph">
        <Bar data={chartData} options={options} plugins={[backgroundColorPlugin]} />
        </div>
            );
};

export default BarGraph;