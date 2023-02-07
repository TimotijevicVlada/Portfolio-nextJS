import React, { useState } from 'react';
import css from "./Header.module.scss";

//components
import HeaderIcon from './HeaderIcon/HeaderIcon';

//assets
import HomeIcon from "svg/home.svg";
import AboutIcon from "svg/about.svg";
import SkillsIcon from "svg/skills.svg";
import ProjectsIcon from "svg/projects.svg";
import ContactIcon from "svg/contact.svg";

const Header = () => {

    const icons = [
        { name: "Home", icon: <HomeIcon /> },
        { name: "About", icon: <AboutIcon /> },
        { name: "Skills", icon: <SkillsIcon /> },
        { name: "Projects", icon: <ProjectsIcon /> },
        { name: "Contact", icon: <ContactIcon /> },
    ]

    return (
        <div className={css.container}>
            {icons.map((item, index) => (
                <HeaderIcon
                    key={index}
                    item={item}
                />
            ))}
        </div>
    )
}

export default Header;