import React, { ReactElement } from "react";
import Collapsible from "react-collapsible";
import { Link } from "gatsby";

import resume from "../../../data/resume.json";
import cv from "../../../data/cv.json";
import {projects} from "../../../data/cv.json";

const Projects = (): ReactElement => {
    const projectIds = resume.projects;
    const projects = cv.projects.filter((project) => {
        return projectIds.includes(project.id);
    })

    return (
        <>
            <h2 className="section-title">
                Projects
            </h2>
            {/* <h5 className="section-redirect" style={{ fontStyle: "oblique" }}>
                Project reflections can be found in the <Link to="/projects">projects page</Link>.
                
            </h5> */}
            <div className="section">
                {projects.map((project, i) => {
                    const character = ``;
                    const triggerTitle = (
                        <>
                            <div className="item"></div>
                            <h3 className="entry-title">
                                {project.name}, <i>{project.summary}</i> {character}
                            </h3>
                        </>
                    );
                    return (
                        <Collapsible
                            key={i}
                            trigger={triggerTitle}
                            transitionTime={300}
                            easing="ease-in-out"
                        >
                            <div className="entry" key={i}>
                                <h5>
                                    {project.location}—{project.date}
                                </h5>
                                <ul className="description">
                                    {project.highlights.map((bullet, i) => {
                                        return <li key={i}>{bullet}</li>;
                                    })}
                                </ul>
                                <div className="techstack">
                                    {project.technologies.map((tech, i) => {
                                        return (
                                            <div key={i} className="tech">
                                                {tech}
                                            </div>
                                        );
                                    })}
                                </div> 
                            </div>
                        </Collapsible>
                    );
                })}
            </div>  
        </>
    );
};

export default Projects;
