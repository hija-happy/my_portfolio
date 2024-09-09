import React, { useState } from 'react';
import './Navbar.css'; // Import custom CSS for Navbar

const Navbar = () => {
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

        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/experience" className="nav-link">Experience</a>
          </li>
          <li className="nav-item">
            <a href="/projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>

      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <span className="drawer-close" onClick={toggleDrawer}>
          &times;
        </span>
        <ul className="drawer-nav">
          <li className="drawer-item">
            <a href="/" className="drawer-link" onClick={toggleDrawer}>Home</a>
          </li>
          <li className="drawer-item">
            <a href="/experience" className="drawer-link" onClick={toggleDrawer}>Experience</a>
          </li>
          <li className="drawer-item">
            <a href="/projects" className="drawer-link" onClick={toggleDrawer}>Projects</a>
          </li>
          <li className="drawer-item">
            <a href="/contact" className="drawer-link" onClick={toggleDrawer}>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
