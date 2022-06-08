import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Obol ui</title>
        <meta name="description" content="Obol ui library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="https://obol.dev">Obol</a>
      <footer className={styles.footer}>
        <a href="https://obol.dev" target="_blank" rel="noopener noreferrer">
          Powered by obol.dev
        </a>
      </footer>
    </div>
  );
};

export default Home;
