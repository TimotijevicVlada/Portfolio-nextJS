import React, { useState, useEffect } from 'react';
import css from "./Projects.module.scss";

//components
import Backdrop from "../Backdrop/Backdrop";
import SingleProject from './SingleProject/SingleProject';
import AppTech from './AppTech/AppTech';

//types
import { ProjectProps } from '@/types/projects';

//projects
import { projects } from './ProjectsImages';

//assets
import JSicon from "svg/js-icon.svg";
import TSicon from "svg/ts-icon.svg";
import ReactIcon from "svg/react-icon.svg";
import ReduxIcon from "svg/redux-icon.svg";
import NextIcon from "svg/next-js-icon.svg";
import ScssIcon from "svg/scss-icon.svg";
import HTMLicon from "svg/html-icon.svg";
import NPMicon from "svg/npm-icon.svg";
import MUIicon from "svg/mui.svg";
import CSSicon from "svg/css.svg";
import GITicon from "svg/git.svg";
import RQuery from "svg/react_query.svg";

const Projects = () => {

    const tech = [
        { name: "HTML", icon: <HTMLicon /> },
        { name: "CSS", icon: <CSSicon /> },
        { name: "SCSS(SASS)", icon: <ScssIcon /> },
        { name: "JavaScript", icon: <JSicon /> },
        { name: "TypeScript", icon: <TSicon /> },
        { name: "React", icon: <ReactIcon /> },
        { name: "React Query", icon: <RQuery /> },
        { name: "Redux", icon: <ReduxIcon /> },
        { name: "Next.js", icon: <NextIcon /> },
        { name: "MaterialUI", icon: <MUIicon /> },
        { name: "GIT", icon: <GITicon /> },
        { name: "NPM", icon: <NPMicon /> }
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
                <div className={css.tech}>
                    {tech.map((item, index) => (
                        <AppTech
                            key={index}
                            name={item.name}
                        >
                            {item.icon}
                        </AppTech>
                    ))}
                </div>
            </div>
            <div className={css.projects}>
                {projects.map((item, index) => (
                    <div className={css.imgWrapper} key={index}>
                        <img
                            src={item.images[0]}
                            alt={item.name}
                            onClick={() => setFullView(item)}
                        />
                        <div className={css.nameInfo}>
                            {item.name}
                        </div>
                    </div>
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