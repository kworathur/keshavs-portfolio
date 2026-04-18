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
            Site under construction 🚧
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
            </p>
        </div>
    );
};

export default Intro;
