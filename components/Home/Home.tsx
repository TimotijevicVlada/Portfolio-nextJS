import React from 'react';
import css from "./Home.module.scss";
import { useRouter } from 'next/router';

const Home = () => {

  const router = useRouter();

  return (
    <div className={css.container}>
      <div className={css.section}>
        <div className={css.leftSideContainer}>
          <h1>
            Hi, <br /> I am Vladimir,<br />  frontend developer.
          </h1>
          <p>Frontend developer | JavaScript expert | React developer</p>
          <button onClick={() => router.push("/contact")}>Contact me</button>
        </div>
      </div>
      <div className={css.section}>RIGHT SIDE</div>
    </div>
  )
}

export default Home;