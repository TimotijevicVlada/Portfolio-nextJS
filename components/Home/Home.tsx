import React from 'react';
import css from "./Home.module.scss";
import { useRouter } from 'next/router';

//assets
import ProfileImage from "../../images/profile_image/profile_photo.jpg";

const Home = () => {

  const router = useRouter();

  return (
    <div className={css.container}>
      <div className={css.section}>
        <div className={css.leftSideContainer}>
          <h1>
            Hi, <br /> I am Vladimir,<br />  full-stack developer.
          </h1>
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