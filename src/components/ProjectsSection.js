import React from 'react';
import projectsData from '../assets/json/projectsData.json';
import './ProjectsSection.css'; // Make sure to update or create this CSS file

const skillsData = [
  { icon: 'https://img.icons8.com/?size=100&id=79904&format=png&color=000000', text: 'HTML' },
  { icon: 'https://img.icons8.com/?size=100&id=13745&format=png&color=000000', text: 'CSS' },
  { icon: 'https://img.icons8.com/?size=100&id=59621&format=png&color=000000', text: 'JavaScript' },
  { icon: 'https://img.icons8.com/?size=100&id=64462&format=png&color=000000', text: 'Python' },
  { icon: 'https://img.icons8.com/?size=100&id=14382&format=png&color=000000', text: 'Java' },
  { icon: 'https://img.icons8.com/?size=100&id=72265&format=png&color=000000', text: 'C' },
  { icon: 'https://img.icons8.com/?size=100&id=72938&format=png&color=000000', text: 'Django' },
  { icon: 'https://img.icons8.com/?size=100&id=14873&format=png&color=000000', text: 'Firebase' },
  { icon: 'https://img.icons8.com/?size=100&id=79904&format=png&color=000000', text: 'Flutter' },
  { icon: 'https://img.icons8.com/?size=100&id=13745&format=png&color=000000', text: 'OpenCV' },
  { icon: 'https://img.icons8.com/?size=100&id=59621&format=png&color=000000', text: 'Figma' },
  { icon: 'https://img.icons8.com/?size=100&id=64462&format=png&color=000000', text: 'LightRoom' },
  { icon: 'https://img.icons8.com/?size=100&id=14382&format=png&color=000000', text: 'Git' },
  { icon: 'https://img.icons8.com/?size=100&id=72265&format=png&color=000000', text: 'React' },
  { icon: 'https://img.icons8.com/?size=100&id=72938&format=png&color=000000', text: 'TensorFlow' },
  { icon: 'https://img.icons8.com/?size=100&id=14873&format=png&color=000000', text: 'Firebase' },
  // Add more skills if needed
];

const ProjectsSection = () => {
  return (
    <div>
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-image">
                <img
                  src={process.env.PUBLIC_URL + '/' + project.projectImage}
                  alt={`${project.projectTitle} image`}
                  className="project-logo"
                />
              </div>
              <div className="project-info">
                <h3>{project.projectTitle}</h3>
                <p>{project.description}</p>
                <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.icon} alt={skill.text} className="skill-icon" />
              <p>{skill.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
