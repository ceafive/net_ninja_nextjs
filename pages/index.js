import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Jokes</title>
        <meta name="keywords" content="jokes" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          officia in quasi ducimus ratione placeat, consectetur dolore nam
          laudantium fugiat! Pariatur magni necessitatibus aliquid minus.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          officia in quasi ducimus ratione placeat, consectetur dolore nam
          laudantium fugiat! Pariatur magni necessitatibus aliquid minus.
        </p>
        <Link href="/jokes">
          <a className={styles.btn}>Check Out Our Jokes</a>
        </Link>
      </div>
    </>
  );
}
