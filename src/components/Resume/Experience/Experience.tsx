import React, { ReactElement } from "react";
import Collapsible from "react-collapsible";
import { Link } from "gatsby";

import resume from "../../../data/resume.json";
import cv from "../../../data/cv.json";

const Experience = (): ReactElement => {
    const expIds = resume.experience;
    const exps = cv.experiences.filter((exp) => {
        return expIds.includes(exp.id);
    })


    return (
        <>
            <h2 className="section-title">
                Experience
            </h2>
            
            <div className="section">
                {exps.map((exp, i) => {
                    const character = ``;
                    const triggerTitle = (
                        <>
                            <div className="item"></div>
                            <h3 className="entry-title">
                                {exp.position} @ <i>{exp.organization}</i> {character}
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
                                    {exp.location}—{exp.startDate} to{" "}
                                    {exp.endDate}
                                </h5>
                                <ul className="description">
                                    {exp.highlights.map((bullet, i) => {
                                        return <li key={i}>{bullet}</li>;
                                    })}
                                </ul>
                                <div className="techstack">
                                    {exp.technologies.map((tech, i) => {
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

export default Experience;
