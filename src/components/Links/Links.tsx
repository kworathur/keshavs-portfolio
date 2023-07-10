import React, { ReactElement } from "react";
import { Link } from "gatsby";

import * as styles from "./Links.module.scss";

export enum Locations {
    HOMEPAGE,
    POSTS,
}

export const Destinations = [
    {
        name: "Blog",
    },
    {
        name: "Projects",
    },

    {
        name: "About",
    },
];

interface InnerLinksProps {
    location: Locations;
}

const InnerLinks = (props: InnerLinksProps): ReactElement => {
    const { location } = props;
    const prefix = location === Locations.HOMEPAGE ? "homepage" : "";

    return (
        <div className={styles[`${prefix}Links`]}>
            <Link className={styles.headerLink} to={"/"}>
                <h1 className={styles[`${prefix}Title`]}><span style={{ "marginRight": 5 }}></span>Keshav Worathur</h1>
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
        </div>
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
