import React from "react";
import PlayerList from "./PlayerList";
import useFetch from "../useFetch";

const Home = (): JSX.Element => {
  const {
    data: players,
    isPending,
    error,
  } = useFetch("http://localhost:8000/players");

  return (
    <section>
      {error && <p>{error}</p>}
      {isPending && <p>Loading players ...</p>}
      {players && <PlayerList players={players} />}
    </section>
  );
};

export default Home;
