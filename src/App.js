import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './assets/styles/global.css'; // Import global CSS
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
