import React, {useState, ReactElement} from "react"

import Links, {Locations} from "../Links/Links"


const Homepage: React.FC = (): ReactElement => {

    


    return (
        <>
            <Links location={Locations.HOMEPAGE} />

            <div className="resume">
                {/* <Education />
                <Experience />
                <Projects />
                <Extracurriculars />
                <Footer /> */}
            </div>
        
        
        </>
    )

}

export default Homepage 
