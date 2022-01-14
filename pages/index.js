import Head from "next/head";
import Body from "../components/Body";
import Header from "../components/Header";
import Nav from "../components/Nav";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>Smart TV</Head>
      <Header />
      <Nav />
      <Body results={results} />
    </div>
  );
}

// this is will render first
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.trending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
