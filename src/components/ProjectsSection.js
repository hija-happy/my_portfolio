import React from 'react';
import AndroidSVG from '../assets/icons/Android.svg';
import CSSSVG from '../assets/icons/CSS3.svg';
import FirebaseIcon from '../assets/icons/Firebase.svg';
import FlutterIcon from '../assets/icons/Flutter.svg';
import HTML5Icon from '../assets/icons/HTML5.svg';
import JavaIcon from '../assets/icons/Java.svg';
import JSIcon from '../assets/icons/JavaScript.svg';
import PythonSVG from '../assets/icons/Python.svg';

import C from '../assets/icons/C.svg';
import Dart from '../assets/icons/Dart.svg';
import DjangoSV from '../assets/icons/Django.svg';
import FigmaSVG from '../assets/icons/Figma.svg';
import GitIcon from '../assets/icons/Git.svg';
import LinuxSVG from '../assets/icons/Linux.svg';
import My from '../assets/icons/MySQL.svg';
import Numpy from '../assets/icons/NumPy.svg';
import SQL from '../assets/icons/SQLite.svg';
import TF from '../assets/icons/TensorFlow.svg';
import Keras from '../assets/icons/Keras.svg';
import projectsData from '../assets/json/projectsData.json';
import './ProjectsSection.css'; // Make sure to update or create this CSS file

const skillsData = [
  { icon: HTML5Icon, text: 'HTML' },
  { icon: CSSSVG, text: 'CSS' },
  { icon: JSIcon, text: 'JavaScript' },
  { icon: PythonSVG, text: 'Python' },

  { icon: JavaIcon, text: 'Java' },
   { icon: C, text: 'C' },
   { icon: DjangoSV, text: 'Django' },
   { icon: FirebaseIcon, text: 'Firebase' },

   { icon: FlutterIcon, text: 'Flutter' },
  { icon: Dart, text: 'Dart' },
  { icon: FigmaSVG, text: 'Figma' },
     { icon: FigmaSVG, text: 'LightRoom' },

   { icon: GitIcon, text: 'Git' },
  { icon: AndroidSVG, text: 'Android' },
   { icon: TF, text: 'TensorFlow' },
   { icon: LinuxSVG, text: 'Linux' },
   
   { icon: My, text: 'MySQL' },
  { icon: Numpy, text: 'Numpy' },
   { icon: Keras, text: 'Keras' },
   { icon: SQL, text: 'SQLite' },

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
                  alt={`${project.projectTitle} Projectimage`}
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
