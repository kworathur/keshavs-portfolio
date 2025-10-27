import React, { useEffect, useState, ReactElement } from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import { Locations, ThemeTogglerProps } from "../Links/Links";

import * as styles from "./Toggle.module.scss";
import { Pill } from "react-pill";
import { icon } from "@fortawesome/fontawesome-svg-core";
import ToggleSwitch from "./ToggleSwitch";


interface ToggleProps extends ThemeTogglerProps {
    location: Locations;
    
}

type ToggleThemeFn = {
    (checked: string): void;
};



const Toggle = (props: ToggleProps): ReactElement => {
    const prefix = props.location === Locations.HOMEPAGE ? "homepage" : "";

    const {theme, toggleTheme} = props
    return (
        <div className={styles[`${prefix}Toggle`]}>
          
                    <label>
                       <input
                            type="checkbox"
                            onChange={e => {  
                                toggleTheme(
                                    e.target.checked ? "dark" : "light"
                                );
                            }}
                            checked={theme === "dark"}
                        />{" "}
                        <span className="toggle-text">Dark Mode</span>
                    </label>
        </div>
    );
};

export default Toggle;
