import React from 'react';
import Head from "next/head";
import css from "./index.module.scss";

//components
import Projects from '@/components/Projects/Projects';

const index = () => {
  return (
    <div className={css.container}>
      <Head>
        <title>Portfolio | Projects</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Projects />
    </div>
  )
}

export default index;