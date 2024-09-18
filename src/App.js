import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './assets/styles/global.css'; // Import global CSS
import LandingPage from './components/Landing.js'; // Import the Landing Page component
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

const App = () => {
  const location = useLocation(); // Get the current path

  return (
    <div>
      {/* Conditionally render Navbar based on current location */}
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App