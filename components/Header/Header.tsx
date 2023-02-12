import React, { useMemo, useState } from 'react';
import css from "./Header.module.scss";

//hook
import useWindowSize from '@/hooks/useWindowSize';

//router
import Link from 'next/link';

//components
import HeaderIcon from './HeaderIcon/HeaderIcon';
import Backdrop from '../Backdrop/Backdrop';
import ProfileImage from './ProfileImage/ProfileImage';

//assets
import HomeIcon from "svg/home.svg";
import AboutIcon from "svg/about.svg";
import SkillsIcon from "svg/skills.svg";
import ProjectsIcon from "svg/projects.svg";
import ContactIcon from "svg/contact.svg";
import GitHubIcon from "svg/git-icon.svg";
import LinkedinIcon from "svg/linkedin-icon.svg";
import ProfilePhoto from "svg/profile_photo.jpg";


const Header = () => {

    const windowSize = useWindowSize();
    const isMobile = useMemo(() => windowSize && windowSize < 768, [windowSize]);

    const [profileFullView, setProfileFullView] = useState(false);

    const icons = [
        { name: "home", icon: <HomeIcon />, route: "/" },
        { name: "about", icon: <AboutIcon />, route: "/about" },
        { name: "skills", icon: <SkillsIcon />, route: "/skills" },
        { name: "projects", icon: <ProjectsIcon />, route: "/projects" },
        { name: "contact", icon: <ContactIcon />, route: "/contact" },
    ]

    return (
        <>
            <nav className={css.container}>
                {!isMobile &&
                    <div className={css.logoWrapper}>
                        <h1> V</h1>
                        <p>Vladimir</p>
                    </div>
                }
                <div className={css.linksWrapper}>
                    {icons.map((item, index) => (
                        <HeaderIcon
                            key={index}
                            item={item}
                        />
                    ))}
                </div>
                {!isMobile &&
                    <div className={css.socialMediaWrapper}>
                        <Link href="https://github.com/TimotijevicVlada" target="_blank">
                            <GitHubIcon />
                        </Link>
                        <Link href="https://www.linkedin.com/in/vladimir-timotijevic" target="_blank">
                            <LinkedinIcon />
                        </Link>
                    </div>
                }
            </nav>
            {isMobile &&
                <header className={css.mobileHeader}>
                    <h1>V</h1>
                    <div className={css.socialMedia}>
                        <Link href="https://github.com/TimotijevicVlada" target="_blank">
                            <GitHubIcon />
                        </Link>
                        <Link href="https://www.linkedin.com/in/vladimir-timotijevic" target="_blank">
                            <LinkedinIcon />
                        </Link>
                        <img src={ProfilePhoto.src} alt="profile" onClick={() => setProfileFullView(true)} />
                    </div>
                </header>
            }
            {profileFullView &&
                <Backdrop closeAction={() => setProfileFullView(false)}>
                    <ProfileImage closeAction={() => setProfileFullView(false)}/>
                </Backdrop>
            }
        </>
    )
}

export default Header;