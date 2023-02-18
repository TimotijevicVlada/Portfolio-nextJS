import React, { useState, useEffect } from 'react';
import css from "./Projects.module.scss";

//assets
import Jetwild from "images/jetwild.png";
import Fitcher from "images/fitcher.png";

//components
import Backdrop from "../Backdrop/Backdrop";
import SingleProject from './SingleProject/SingleProject';

//types
import { ProjectProps } from '@/types/projects';

const Projects = () => {

    const projects = [
        { name: "Jetwild", src: Jetwild.src },
        { name: "Fitcher", src: Fitcher.src },
        { name: "Jetwild", src: Jetwild.src },
        { name: "Fitcher", src: Fitcher.src },
        { name: "Jetwild", src: Jetwild.src },
        { name: "Fitcher", src: Fitcher.src },
        { name: "Jetwild", src: Jetwild.src },
        { name: "Fitcher", src: Fitcher.src },
        { name: "Jetwild", src: Jetwild.src },
        { name: "Fitcher", src: Fitcher.src },
        { name: "Jetwild", src: Jetwild.src },
        { name: "Fitcher", src: Fitcher.src },
        { name: "Jetwild", src: Jetwild.src },
        { name: "Fitcher", src: Fitcher.src },
        { name: "Jetwild", src: Jetwild.src },
        { name: "Fitcher", src: Fitcher.src },
    ]

    const [fullView, setFullView] = useState<ProjectProps | null>(null);

    useEffect(() => {
        if (fullView) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset"
        }
    }, [fullView])

    return (
        <div className={css.container}>
            <div className={css.projectsInfo}>
                <div className={css.info}>
                    <h1>Projects</h1>
                    <p>Discover my projects by clicking on it and see the details.</p>
                    <p>My projects are made by the following technologies:</p>
                </div>
            </div>
            <div className={css.projects}>
                {projects.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        alt={item.name}
                        onClick={() => setFullView(item)}
                    />
                ))}
            </div>
            {!!fullView &&
                <Backdrop closeAction={() => setFullView(null)}>
                    <SingleProject
                        item={fullView}
                    />
                </Backdrop>
            }
        </div>
    )
}

export default Projects;