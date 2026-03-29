import React, { ReactElement } from "react";
import { rhythm } from "../../utils/typography";


const Intro = (): ReactElement => {

    const resumeLink = (
        <a
            target="_blank"
            href="https://uploads.kworathur.com/keshav_worathur_resume.pdf"
            rel="noreferrer"
        >
            here
        </a>
    );

    const bio1 = (
        <p className="redirects-bio">
            Hi there! {"I'm"} Keshav, a passionate Master's student diving deeper into data engineering and computing systems at Georgia Tech. 
            
            Welcome to my interactive resume! To learn more about my skills and experience, please click on the resume sections below, or download a PDF version {resumeLink}. 
        </p>
    );

    return (
        <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(37.5),
                padding: '1rem 2rem'
            }}
        >
            {bio1}
            <p className="redirects-bio">
                If you would like to discuss more about my interests or are looking to add a passionate data engineer to your team, please feel free to reach out via email or LinkedIn.  
            </p>
        </div>
    );
};

export default Intro;
