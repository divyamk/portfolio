import React from 'react';
import './index.css';
import Project from '../../components/Project';

const Projects = () => {
  return (
    <>
      <div className="element" id='projects'>
        <h1 className='page-header' id='proj-head'>Projects</h1>
        <div className="proj-container">
          <Project name="This is a Project" desc="This is a short description of that project. Click to learn more." />
          <Project name="This is a Project" desc="This is a short description of that project. Click to learn more." />
          <Project name="This is a Project" desc="This is a short description of that project. Click to learn more." />
          <Project name="This is a Project" desc="This is a short description of that project. Click to learn more." />
          <Project name="This is a Project" desc="This is a short description of that project. Click to learn more." />
          <Project name="This is a Project" desc="This is a short description of that project. Click to learn more." />
        </div>
      </div>
    </>
  );
};

export default Projects;