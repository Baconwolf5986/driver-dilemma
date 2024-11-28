// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, updateDoc, increment } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACQGY5hNGh4S962PB5b6vc3rdFIzh4g6Q",
    authDomain: "driver-dilemma.firebaseapp.com",
    projectId: "driver-dilemma",
    storageBucket: "driver-dilemma.firebasestorage.app",
    messagingSenderId: "26549660299",
    appId: "1:26549660299:web:b12bf222e00028a2e3028e",
    measurementId: "G-CWF5F4F2CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const pollData = getFirestore(app);

export { pollData };

// Function to increment the selected option
// ARGUMENTS:
// situation (string): The situation name in firestore (eg. situation1_result)
// option (string): The option to increment in firestore (Option1)
async function incrementOption(situation, option) {
    const docRef = doc(pollData, "DriverDilemmaQuestionResult", situation);

    try {
        await updateDoc(docRef, {
            [option]: increment(1)
        });
        console.log(`${option} incremented for ${situation}`);
     } catch (error) {
         console.error("Error updating document: ", error);
     }
}

export { incrementOption };