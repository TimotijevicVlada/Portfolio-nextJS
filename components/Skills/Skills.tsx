import React from 'react';
import css from "./Skills.module.scss";

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
import GitHub from "svg/github.svg";
import NodeJs from "svg/node-js.svg";
import MongoDB from "svg/mongodb.svg";
import StyledComponents from "svg/styled_components.svg";
import Express from "svg/express.svg";
import Vscode from "svg/vscode.svg";

const Skills = () => {

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
        { name: "Styled Components", icon: <StyledComponents /> },
        { name: "Node.js", icon: <NodeJs /> },
        { name: "Express.js", icon: <Express /> },
        { name: "MongoDB", icon: <MongoDB /> },
        { name: "Git hub", icon: <GitHub /> },
        { name: "GIT", icon: <GITicon /> },
        { name: "NPM", icon: <NPMicon /> },
        { name: "VS code", icon: <Vscode /> },
    ]

    return (
        <div className={css.container}>
            <h1 className={css.title}>Skills</h1>
            <p className={css.description}>
                As a frontend developer, I have experience in a range of technologies and frameworks,
                including JavaScript, React, Node.js, Redux etc. With a focus on building
                scalable and maintainable applications, I am skilled in developing server-side APIs and
                client-side interfaces. I am constantly learning and keeping up-to-date with the latest
                advancements in web development, ensuring I can provide the best solutions to any challenges
                that come my way.  
            </p>
            <div className={css.skillsContainer}>
                {tech.map((item, index) => (
                    <div
                        key={index}
                        className={css.techCard}
                        style={{ animationDelay: `${index / 10}s` }}
                    >
                        <div className={css.iconWrapper}>
                            {item.icon}
                        </div>
                        <p className={css.tech}>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;