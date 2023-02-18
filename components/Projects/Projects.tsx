import React from 'react';
import css from "./Projects.module.scss";

//assets
import Jetwild from "images/jetwild.png";

const Projects = () => {
    return (
        <div className={css.container}>
            <div className={css.projectsInfo}>
                    PROJECTS
            </div>
            <div className={css.projects}>
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
                <img src={Jetwild.src} alt="jetwild" />
            </div>
        </div>
    )
}

export default Projects;