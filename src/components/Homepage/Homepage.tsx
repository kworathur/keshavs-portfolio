import React, { useState, ReactElement } from "react";

import SEO from '../SEO/SEO'
import Links, { Locations } from "../Links/Links";

import Education from "../Resume/Education/Education";
import Experience from "../Resume/Experience/Experience";
import Projects from "../Resume/Projects/Projects";

import Intro from "../Intro/Intro";
import Footer from "../Footer/Footer"

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
