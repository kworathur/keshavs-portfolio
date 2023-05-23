import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from "./Layout.module.scss";

const Layout = ({children}) => {
    return (
        <main>
            <nav className={styles.navbar}>
                <ul>
                    <li><Link to="/">Keshav Worathur</Link></li>
                    <li className={styles.resourceLink}><Link to="">Writing</Link></li>
                    <li className={styles.resourceLink}><Link to="">Projects</Link></li>
                </ul>
            </nav>
            <div className={styles.contentContainer}>
            {children}
            </div>
        </main>
    );
}

export default Layout