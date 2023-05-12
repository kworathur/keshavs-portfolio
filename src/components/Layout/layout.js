import * as React from 'react';
import { Link } from 'gatsby';
import "./layout.css"

const Layout = ({children}) => {
    return (
        <main>
            <nav>
                <ul className="links">
                    <li className="logo"><a href="/">Keshav Worathur</a></li>
                    <li className="resource-link" ><a href="#">Projects</a></li>
                    <li className="resource-link"><a href="#">Writing</a></li>
                </ul>
            </nav>
            {children}
        </main>
    );
}

export default Layout