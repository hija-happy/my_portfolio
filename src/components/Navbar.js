import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"></div> {/* Logo container with embedded text */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link nav-hover">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/experience" className="nav-link nav-hover">Experience</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link nav-hover">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link nav-hover">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
