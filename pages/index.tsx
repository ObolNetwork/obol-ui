import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Text, Box } from "../components/atoms";
import { Card } from "../components/molecules";
import { CodeIcon } from "../components/icons";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Obol ui</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Text css={{ fontWeight: "$bold" }}>Test</Text>
        <h1 className={styles.title}>Welcome to Obol ui</h1>
        <Card
          heading="Heading"
          image="/image-card.png"
          variant="image"
          subheading="The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility."
          link="https://obol.tech"
        />
        <Box css={{ mt: "$xl" }} />
        <Card
          heading="Heading"
          image={<CodeIcon />}
          subheading="The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility."
          link="https://obol.tech"
        />
      </main>

      <footer className={styles.footer}>
        <a href="https://obol.tech" target="_blank" rel="noopener noreferrer">
          Powered by obol.tech
        </a>
      </footer>
    </div>
  );
};

export default Home;
