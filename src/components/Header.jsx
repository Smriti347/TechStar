import React from 'react';
import { Link } from "react-router-dom";
import { HashLink} from "react-router-hash-link";

const Header = () => {
    return (
        <nav>
            <h1>TechStar.</h1>
            <main>
                <HashLink to={"/#home"}>Home</HashLink>
                <Link to={"./Contect"}>Contact</Link>
                <HashLink to={"/#about"}>About</HashLink>
                <HashLink to={"/#brand"}>Brands</HashLink>
                <Link to={"/Services"}>Services</Link>
            </main>
        </nav>
    );
};

export default Header;
