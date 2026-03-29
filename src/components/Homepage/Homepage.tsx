import React, { ReactElement } from "react";

import SEO from '../SEO/SEO'
import Links, { Locations } from "../Links/Links";



import Intro from "../Intro/Intro";
import Footer from "../Footer/Footer"


const Homepage: React.FC = (): ReactElement => {

    return (
        <>
   
            <Links location={Locations.HOMEPAGE} />
            <SEO title="Home" />
            <Intro />
            <div className="resume">
               
                <Footer />
        
            </div>
        </>
    );
};

export default Homepage;
