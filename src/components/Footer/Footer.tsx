import React, { ReactElement } from "react";
import Socials from "../Socials/Socials"

import * as styles from "./Footer.module.scss"

const Footer = (): ReactElement => {
    return (
        <footer className={styles.footer}>
            <p>© Keshav Worathur {new Date().getFullYear()}</p>
            <Socials />
        </footer>
    );
};

export default Footer;
