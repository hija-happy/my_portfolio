import React, { useEffect, useRef } from 'react';
import experienceData from '../assets/json/experienceData.json';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const currentRefs = sectionRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    currentRefs.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentRefs.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      {experienceData.map((experience, index) => (
        <div
          key={index}
          className={`experience-item fade-in-${index % 2 === 0 ? 'left' : 'right'}`}
          ref={(el) => (sectionRefs.current[index] = el)}
        >
          <img src={experience.companyLogo} alt={experience.companyName} className="company-logo" />
          <div className="experience-content">
            <h3>{experience.companyName}</h3>
            <h4>{experience.projectTitle}</h4>
            <p>{experience.description}</p>
            <p><strong>Tech Stack:</strong> {experience.techStack.join(', ')}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
