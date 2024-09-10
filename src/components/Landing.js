import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    WebFont.load({
      custom: {
        families: ['Dancing Matilda'],
        urls: ['/fonts/DancingMatilda.ttf'] // Ensure the path is correct
      }
    });
  }, []);

  const goToAboutMe = () => {
    navigate('/about');
  };

  return (
    <div className="landing-page">
      <video className="background-video" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/video/landing5.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <img src={`${process.env.PUBLIC_URL}/images/HH.png`} alt="Logo" className="overlay" />
        <h1 className="name">Hija Happy</h1>
        <div className="arrow" onClick={goToAboutMe}>
          <span>&#8595;</span> {/* Down arrow */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
