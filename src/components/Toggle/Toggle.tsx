import React, { useEffect, useState, ReactElement } from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import { Locations, ThemeTogglerProps } from "../Links/Links";

import * as styles from "./Toggle.module.scss";
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
            <ToggleSwitch handleClick={() => {if (theme === "dark") {
                toggleTheme("light");
            } else {
                toggleTheme("dark");
            }}}/>
        </div>
    );
};

export default Toggle;
