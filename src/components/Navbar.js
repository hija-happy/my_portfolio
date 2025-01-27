import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Import custom CSS for Navbar

const Navbar = ({scrollToSection, refs}) => {

  const { aboutRef, experienceRef, projectsRef, contactRef } = refs;

  // STATE MANAGEMENT 
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  
  useEffect(() => {
    const sections = [
      { id: 'about', ref: aboutRef },
      { id: 'experience', ref: experienceRef },
      { id: 'projects', ref: projectsRef },
      { id: 'contact', ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set the active section when it is in view
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [aboutRef, experienceRef, projectsRef, contactRef]);

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
            <button className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection(aboutRef)}>Home</button>
          </li>
          <li className="nav-item">
          <button id="experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => scrollToSection(experienceRef)}>Experience</button>
          </li>
          <li className="nav-item">
            <button id="projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection (projectsRef)}>Project</button>
          </li>
          <li className="nav-item">
           <button className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection(contactRef)}>Contact</button> 
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
