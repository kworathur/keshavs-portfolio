import React, { ReactElement } from 'react';

import * as styles from './Projects.module.scss';

import resume from '../../../data/resume.json';
import cv from '../../../data/cv.json';

const Projects = (): ReactElement => {
  const projectIds = resume.projects;
  const projects = cv.projects.filter((project) => {
    return projectIds.includes(project.id);
  });
  console.log(styles);
  return (
    <>
      <h2 className="section-title">Selected Work</h2>

      <div className="section">
        <div className={styles['projects']}></div>
        {projects.map((project, i) => {
          return (
            <div className={styles['portfolioCard']}>
              <div className={styles['portfolioCardMedia']}>
                Media
                {/* TODO: research how to add lightbox */}
              </div>
              <div className={styles['portfolioCardBody']}>
                <h3>{project.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// const character = ``;
//           const triggerTitle = (
//             <>
//               <div className="item"></div>
//               <h3 className="entry-title">
//                 {project.name}, <i>{project.summary}</i> {character}
//               </h3>
//             </>
//           );
//           return (
//             <Collapsible
//               key={i}
//               trigger={triggerTitle}
//               transitionTime={300}
//               easing="ease-in-out"
//             >
//               <div className="entry" key={i}>
//                 <h5>
//                   {project.location}—{project.date}
//                 </h5>
//                 <ul className="description">
//                   {project.highlights.map((bullet, i) => {
//                     return <li key={i}>{bullet}</li>;
//                   })}
//                 </ul>
//                 <div className="techstack">
//                   {project.technologies.map((tech, i) => {
//                     return (
//                       <div key={i} className="tech">
//                         {tech}
//                       </div>
//                     );
//                   })}
//                 </div>
//                 {project.demo_url && (
//                   <p>
//                     📽️ View a demo of this project{' '}
//                     <a href={project.demo_url}>here</a>!
//                   </p>
//                 )}
//               </div>
//             </Collapsible>
//           );

export default Projects;
