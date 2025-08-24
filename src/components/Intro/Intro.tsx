import React, { ReactElement } from "react";
import { rhythm } from "../../utils/typography";

import { UNIVERSITY_YEAR_AS_STRING } from "../../data/Constants";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from './Intro.module.scss'

const Intro = (): ReactElement => {

    const resumeLink = (
        <a
            target="_blank"
            href="https://kworathur-portfolio.s3.amazonaws.com/kw_resume_portfolio.pdf" // TODO: Modify permissions for private access with access keys
            rel="noreferrer"
        >
            here
        </a>
    );

    const bio1 = (
        <p className="redirects-bio">
            My name is Keshav and I am a {UNIVERSITY_YEAR_AS_STRING}{" "} master's student in Computer Science at <strong>Georgia Tech</strong>. 
            I enjoy using my experience working in Agile teams and instinct for automation to deliver high-quality software. {"I'm"} also interested in machine learning 
            and its applications to healthcare. To learn more about my skills and experience, please click on the resume sections below or download a PDF version {resumeLink}.
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
            <StaticImage src='../../../images/headshot.png' layout="constrained" className={styles.headshot} alt="Keshav headshot" />
            {bio1}
            <p className="redirects-bio">
                If you would like to discuss more about my interests or are looking to add a passionate software developer to your team, please feel free to reach out via email or LinkedIn.  
            </p>

            
        </div>
    );
};

export default Intro;
