import React from 'react';
import css from "./Home.module.scss";
import { useRouter } from 'next/router';

//hooks
import useWindowSize from '@/hooks/useWindowSize';

//assets
import ProfileImage from "../../images/profile_image/profile_photo.jpg";

const Home = () => {

  const router = useRouter();
  const windowSize = useWindowSize();

  const isMobile = windowSize && windowSize < 768;

  const title = ["H", "i", ",", "I", ".", "a", "m", "/", "V", "l", "a", "d", "i", "m", "i", "r", ",", "f", "u", "l", "l", "-", "s", "t", "a", "c", "k", "/", "w", "e", "b", "/", "d", "e", "v", "e", "l", "o", "p", "e", "r"]

  return (
    <div className={css.container}>
      <div className={css.section}>
        <div className={css.leftSideContainer}>
          {!isMobile ? title.map((char, index) => (
            <>
              {(index === 3 || index === 17) && <br />}
              <span
                key={index}
                className={`${css.title} ${(char === "." || char === "/") ? css.hidden : ""}`}
                style={{ animationDelay: `${index / 10}s` }}
              >
                {char}
              </span>
            </>
          )) :
            <span className={css.title}>Hi, <br /> I am Vladimir, <br /> full-stack web developer</span>
          }
          <p>JavaScript expert | React developer | Node.js developer</p>
          <button onClick={() => router.push("/contact")}>Contact me</button>
        </div>
      </div>
      <div className={css.section}>
        <div className={css.imageWrapper}>
          <img src={ProfileImage.src} alt="profile_image" />
        </div>
      </div>
    </div>
  )
}

export default Home;