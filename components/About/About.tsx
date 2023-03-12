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
                    <h1>About me</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book.
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