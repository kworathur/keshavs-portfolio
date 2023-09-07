import React, { useState, ReactElement } from "react";

import SEO from '../SEO/SEO'
import Links, { Locations } from "../Links/Links";
// import Arrow from "../Arrow/Arrow";

import Education from "../Resume/Education/Education";
import Experience from "../Resume/Experience/Experience";
import Projects from "../Resume/Projects/Projects";
import Extracurriculars from "../Resume/Activities/Activities";

import Intro from "../Intro/Intro";
import Footer from "../Footer/Footer"
import { UNIVERSITY_YEAR_AS_STRING } from "../../data/Constants";

import * as styles from "./Homepage.module.scss"
import { StaticImage } from "gatsby-plugin-image";

const Homepage: React.FC = (): ReactElement => {

    return (
        <>
            <Links location={Locations.HOMEPAGE} />
            <SEO title="Home" />
            <Intro />
            <div className="resume">
                <Education />
                <Experience />
                <Projects />
                {/* <Extracurriculars /> */}
                <Footer />
        
            </div>
        </>
    );
};

export default Homepage;
