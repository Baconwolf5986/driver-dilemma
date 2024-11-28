import logo from './logo.svg';
import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/HomePage.js';
import Survey from './pages/SurveyPage.js';
import Results from './pages/ResultsPage.js';
import Navbar from './pages/components/Navbar.js';
import './styles.css';

const ToastClose = ({ closeToast }) => (
    <button onClick={closeToast} className="custom-close-btn">
        OK
    </button>
);


function App() {
    return (
        <Router>
        <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/survey" element={<Survey />} />}
              <Route path="/results" element={<Results />} />}
            </Routes>
            <ToastContainer
                className="Message"
                closeOnClick={true}
                autoClose={10000}
                closeButton={<ToastClose />}
                hideProgressBar={true}
                position={"top-center"}
                theme={"dark"}
            />
        </Router>
  );
}

export default App;
