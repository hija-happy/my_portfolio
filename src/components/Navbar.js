import React, { useState } from 'react';
import './Navbar.css'; // Import custom CSS for Navbar

const Navbar = ({scrollToSection, refs}) => {

  const { aboutRef, experienceRef, projectsRef, contactRef } = refs;

  // STATE MANAGEMENT
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">HIJA HAPPY</div> {/* Logo container */}

        <button className="drawer-toggle" onClick={toggleDrawer}>
          ☰
        </button>


    {/*  Responsive View (DESKTOP VIEW) */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection(aboutRef)}>Home</button>
          </li>
          <li className="nav-item">
           <button className="nav-link" onClick={() => scrollToSection(experienceRef)}>Experience</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => scrollToSection (projectsRef)}>Project</button>
          </li>
          <li className="nav-item">
           <button className="nav-link" onClick={() => scrollToSection(contactRef)}>Contact</button> 
          </li>
        </ul>
      </nav>


       {/*  Responsive View (MOBILE VIEW) */}

      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <span className="drawer-close" onClick={toggleDrawer}>
          &times;
        </span>
        <ul className="drawer-nav">
          <li className="drawer-item">
          <button className="drawer-link" onClick={() => scrollToSection(aboutRef)}>Home</button>
          </li>
          <li className="drawer-item">
            <button className="drawer-link" onClick={() => scrollToSection(experienceRef)}>Experience</button>
          </li>
          <li className="drawer-item">
            <button className="drawer-link" onClick={() => scrollToSection(projectsRef)}>Projects</button>
          </li>
          <li className="drawer-item">
            <button className="drawer-link" onClick={() => scrollToSection(contactRef)}>Contact</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
