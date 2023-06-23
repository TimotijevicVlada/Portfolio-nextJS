import React, { useState } from 'react';
import css from "./About.module.scss";

//assets
import ReactIcon from "svg/react-icon.svg";
import ReduxIcon from "svg/redux-icon.svg";
import JSicon from "svg/js-icon.svg";
import GITicon from "svg/git.svg";
import NextIcon from "svg/next-js-icon.svg";
import RQuery from "svg/react_query.svg";

const About = () => {

    const [animate, setAnimate] = useState(false);

    const animateQube = () => {
        setAnimate(true);
        const timeout = setTimeout(() => {
            setAnimate(false);
        }, 2000)
        return () => clearTimeout(timeout)
    }

    return (
        <div className={css.container}>
            <div className={css.leftWrapper}>
                <div className={css.innerWrapper}>
                    <h1 className={css.title}>About me</h1>
                    <p className={css.description}>
                        I am a frontend developer with a passion for tackling new challenges.
                        Whether it is working with React or diving into the latest JavaScript frameworks,
                        I am always excited to push the limits of what is possible.
                    </p>
                    <p className={css.description}>
                        I thrive in a fast-paced environment and enjoy finding creative solutions to complex problems.
                        As an enthusiast of all things tech, I am constantly looking for ways to stay up-to-date with the
                        latest industry trends.
                    </p>
                    <p className={css.description}>
                        I approach each project with enthusiasm and dedication to delivering high-quality results.
                        When I am not coding, you can find me exploring new technologies or experimenting with personal projects.
                    </p>
                </div>
            </div>
            <div className={css.rightWrapper}>
                <div className={css.box}>
                    <div id={css.front} className={`${css.card} ${animate ? css.frontActive : ""}`} >
                        <ReactIcon />
                    </div>
                    <div className={`${css.card} ${animate ? css.backActive : ""}`} id={css.back}>
                        <ReduxIcon />
                    </div>
                    <div className={`${css.card} ${animate ? css.leftActive : ""}`} id={css.left}>
                        <JSicon />
                    </div>
                    <div className={`${css.card} ${animate ? css.rightActive : ""}`} id={css.right}>
                        <RQuery />
                    </div>
                    <div className={`${css.card} ${animate ? css.topActive : ""}`} id={css.top}>
                        <NextIcon />
                    </div>
                    <div className={`${css.card} ${animate ? css.bottomActive : ""}`} id={css.bottom}>
                        <GITicon />
                    </div>
                </div>

                <button
                    className={css.hitButton}
                    onClick={animateQube}
                >
                    Hit me
                </button>
            </div>
        </div>
    )
}

export default About;