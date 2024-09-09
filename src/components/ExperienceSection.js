import React, { useEffect, useRef } from 'react';
import experienceData from '../assets/json/experienceData.json';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref) => {
        if (ref && ref.getBoundingClientRect().top < window.innerHeight) {
          ref.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id='experience' className='experience-section'>
      <h2>Experience</h2>
      <div className='experience-container'>
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className='experience-item'
            ref={(el) => (sectionRefs.current[index] = el)}
          >
            <div className='experience-logo'>
              <img
                src={process.env.PUBLIC_URL + '/' + experience.companyLogo}
                alt={`${experience.companyName} logo`}
                className='company-logo'
              />
            </div>
            <div className='experience-info'>
              <h3>{experience.companyName}</h3>
              <h4>{experience.projectTitle}</h4>
              {experience.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p><strong>Tech Stack:</strong> {experience.techStack.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
