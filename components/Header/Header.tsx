import React from 'react';
import css from "./Header.module.scss";

const Header = () => {
    return (
        <div className={css.container}>
            <span>Home</span>
            <span>About</span>
            <span>Skills</span>
            <span>Projects</span>
            <span>Contact</span>
        </div>
    )
}

export default Header;