import React from 'react';
import Head from 'next/head';

//component
import Contact from '@/components/Contact/Contact';

const index = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Contact</title>
      </Head>
      <div>
        <Contact />
      </div>
    </>

  )
}

export default index;