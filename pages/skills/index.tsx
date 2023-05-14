import Skills from '@/components/Skills/Skills';
import Head from 'next/head';
import React from 'react'

const index = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Skills</title>
      </Head>
      <div>
        <Skills />
      </div>
    </>
  )
}

export default index;