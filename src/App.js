import logo from './logo.svg';
import './App.css';
import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage.js';
import Survey from './pages/SurveyPage.js';
import Results from './pages/ResultsPage.js';
import Navbar from './pages/components/Navbar.js';
import './styles.css';

function App() {
    return (
        <Router>
        <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/survey" element={<Survey />} />}
              <Route path="/results" element={<Results />} />}
            </Routes>
        </Router>
  );
}

export default App;
