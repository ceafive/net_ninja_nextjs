import React from "react";

export const getStaticPaths = async () => {
  const API_ENDPOINT = (amount = 10) =>
    `https://v2.jokeapi.dev/joke/Any?type=single&idRange=0-10&amount=${amount}`;
  const res = await fetch(API_ENDPOINT());
  const { jokes } = await res.json();

  const paths = jokes.map((joke) => ({
    params: {
      id: joke.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params; // id for each joke rendered

  const API_ENDPOINT = (amount = 10) =>
    `https://v2.jokeapi.dev/joke/Any?type=single&idRange=${id}`;
  const res = await fetch(API_ENDPOINT());
  const data = await res.json();

  return {
    props: {
      joke: data || null,
    },
  };
};

const Details = ({ joke }) => {
  return (
    <div>
      <h1>{joke.category}</h1>
      <p>{joke.joke}</p>
      <p>{joke.safe ? "Non-Explicit Joke" : "Explicit Joke"}</p>
    </div>
  );
};

export default Details;
