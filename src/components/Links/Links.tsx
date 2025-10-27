import React, { ReactElement } from "react";
import { Link } from "gatsby";
import Toggle from "../Toggle/Toggle";
import * as styles from "./Links.module.scss";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import {ThemeToggler} from 'gatsby-plugin-dark-mode';
export enum Locations {
    HOMEPAGE,
    POSTS,
}

export const Destinations = [
    // {name: 'Projects'}
];

interface InnerLinksProps {
    location: Locations;
}

type ToggleThemeFn = {
    (checked: string): void;
};

export interface ThemeTogglerProps {
    theme: unknown;
    toggleTheme: ToggleThemeFn;
}

const InnerLinks = (props: InnerLinksProps): ReactElement => {
    const { location } = props;
    const prefix = location === Locations.HOMEPAGE ? "homepage" : "";

    return (

            <ThemeToggler>
                            {({ theme, toggleTheme }: ThemeTogglerProps) => {
                                const isDarkMode = theme === 'dark';
                                return (
                                       <div className={styles[`${prefix}Links`]}>
                                            <Link className={styles.headerLink} to={"/"}>          
                                            {isDarkMode ? <StaticImage width={128} height={128} src='../../../content/assets/KVW-monogram-dark.svg' alt='Keshav Worathur' />   : <StaticImage width={128} height={128} src='../../../content/assets/KVW-monogram.svg' alt='Keshav Worathur' />}
                                        </Link>
                                        <div className={styles.linksAndLights}>
                                            {Destinations.map((d, index) => {
                                                    return (
                                                        <Link
                                                            key={index}
                                                            className={styles[`${prefix}Link`]}
                                                            to={`/${d.name}`}
                                                        >
                                                            {d.name}
                                                        </Link>
                                                    );
                                            })}
                                            {location !== Locations.HOMEPAGE && <br />}
                                        </div>
                                        <Toggle location={location} theme={theme} toggleTheme={toggleTheme}/>
                                        </div>
                                )
                            }}
            </ThemeToggler>

    );
};

interface LinksProps {
    location: Locations;
}

const Links = (props: LinksProps): ReactElement => {
    const { location }  = props;
    switch (location) {
        case Locations.HOMEPAGE:
            return (
                <div className={styles.homepageWrapper}>
                    <InnerLinks location={location} />
                </div>
            );
        case Locations.POSTS:
            return <InnerLinks location={location} />;
        default:
            throw new Error(`Invalid location given in Links.tsx`);
    }
};

export default Links;
