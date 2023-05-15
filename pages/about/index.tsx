import React from 'react';
import css from "./index.module.scss";
import Head from 'next/head';

//components
import About from '@/components/About/About';

const index = () => {
  return (
    <>
      <Head>
        <title>Portfolio | About</title>
      </Head>
      <div>
        <About />
      </div>
    </>

  )
}

export default index;