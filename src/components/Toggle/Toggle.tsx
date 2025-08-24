import React, { useEffect, useState, ReactElement } from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import { Locations } from "../Links/Links";

import * as styles from "./Toggle.module.scss";


interface ToggleProps {
    location: Locations;
}

type ToggleThemeFn = {
    (checked: string): void;
};

interface ThemeTogglerProps {
    theme: unknown;
    toggleTheme: ToggleThemeFn;
}

const Toggle = (props: ToggleProps): ReactElement => {
    const prefix = props.location === Locations.HOMEPAGE ? "homepage" : "";

    return (
        <div className={styles[`${prefix}Toggle`]}>
            <ThemeToggler>
                {({ theme, toggleTheme }: ThemeTogglerProps) => (
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
                )}
            </ThemeToggler>
        </div>
    );
};

export default Toggle;
