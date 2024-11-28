import logo from './logo.svg';
import './App.css';
import { React, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/HomePage.js';
import Survey from './pages/SurveyPage.js';
import Results from './pages/ResultsPage.js';
import Navbar from './pages/components/Navbar.js';
import './styles.css';

// Close the button
const ToastClose = ({ closeToast }) => (
    <button onClick={closeToast} className="custom-close-btn">
        OK
    </button>
);

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top whenever the path changes
    }, [pathname]);

    return null; // This component doesn't render anything
};


function App() {
    return (
        <Router>
        <ScrollToTop />
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
