import css from "./index.module.scss";
import Head from "next/head";

//components
import Home from "@/components/Home/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
      </Head>
      <div className={css.container}>
        <Home />
      </div>
    </>

  )
}
