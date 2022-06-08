import type { NextPage } from "next";
import Head from "next/head";
import { HeroSection } from "../components/organisms";
import {
  Text,
  Button,
  ToggleGroup,
} from "../components/atoms";
import styles from "../styles/Home.module.css";
import { Card, ToggleCardItem } from "../components/molecules";
import { CodeIcon } from "../components/icons";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Obol ui</title>
        <meta name="description" content="Obol ui library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection
        heading="Building Distributed Validators for Ethereum"
        content={
          <>
            The Obol Network is an ecosystem for trust minimized staking that
            allows people to{" "}
            <Text css={{ display: "inline-block" }} color="create" glow>
              create
            </Text>
            ,
            <Text css={{ display: "inline" }} color="test" glow>
              {" "}
              test
            </Text>
            ,
            <Text css={{ display: "inline" }} color="obolGreen" glow>
              {" "}
              run
            </Text>{" "}
            &
            <Text css={{ display: "inline" }} color="coordinate" glow>
              {" "}
              co-ordinate
            </Text>{" "}
            distributed validators
          </>
        }
        css={{
          "@bp2": {
            mb: "100px",
          },
          "@md": {
            "& #heading-text": {
              fontSize: "$10",
            },
          },
        }}
      >
        <Button>Read the Docs</Button>
      </HeroSection>
   
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
