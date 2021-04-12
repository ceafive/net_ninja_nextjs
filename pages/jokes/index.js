import React from "react";
import styles from "../../styles/Listings.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const API_ENDPOINT = (amount = 10) =>
    `https://v2.jokeapi.dev/joke/Any?type=single&idRange=0-10&amount=${amount}`;
  const res = await fetch(API_ENDPOINT());
  const { jokes } = await res.json();

  return {
    props: {
      jokes,
    },
  };
};

const Listings = ({ jokes }) => {
  return (
    <div>
      <h1>Jokes</h1>
      {jokes.map((joke, index) => {
        return (
          <div key={joke.id}>
            <Link href={`/jokes/${joke.id}`}>
              <a className={styles.single}>
                <h3>{joke.joke}</h3>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Listings;
