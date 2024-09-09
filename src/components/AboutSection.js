import React from 'react';
import profilePic from '../assets/icons/profile.png';
import './AboutSection.css'; // Import custom CSS for AboutSection

const AboutSection = () => {
  return (
    <section id = 'about' className='about-section'> 
      <div className='about-row'>

        {/* TEXT */}
        <div className='about-text'>
          <p className='big-text'>I'm Hija Happy</p>
          <h3 className='medium-text'>Engineering Student and Tech Enthusiast</h3>
          <p className='small-text'>Hi, I'm Hija Happy, a passionate developer and tech enthusiast. I enjoy working on web and mobile applications, and I have a keen interest in photography and portrait sketching. I'm currently working on projects related to emotion detection, image processing, and more. Let's connect and collaborate!</p>
        </div>

        {/* PROFILE PIC */}
        <div className='about-image'> 
          <img src={profilePic} alt='Hija Happy' className='profile-pic'></img>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
