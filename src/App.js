import React, { useRef } from 'react';
//import { Route, Routes, useLocation } from 'react-router-dom';
import './assets/styles/global.css'; // Import global CSS
// import LandingPage from './components/Landing.js'; // Import the Landing Page component
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

const App = () => {

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
  

  return (
    <div>
     <Navbar scrollToSection={scrollToSection} refs={{ aboutRef, experienceRef, projectsRef,contactRef}} />

     <div id="about" ref={aboutRef}> 
      <About/>
     </div>

     <div id="experience" ref={experienceRef}> 
      <Experience/>
     </div>

     <div id="projects" ref={projectsRef}> 
      <Projects/>
     </div>

     <div id="contact" ref={contactRef}> 
      <Contact/>
     </div>
     

    </div>
  );
};

export default App