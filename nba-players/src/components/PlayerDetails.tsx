import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'

const PlayerDetails = () => {

    const {id} = useParams();
    const {data: player, error, isPending} = useFetch("http://localhost:8000/players/" + id);


  return (
    <>
            <section>
                {isPending && <p>Loading player details...</p>}

                {error && <p>{error}</p>}

                {player && (
                    <>
                        <h1>Player {player.id} details</h1>
                        <h2>{player.name}</h2>
                        <p>{player.email}</p>
                        <p>{player.phone}</p>
                        <p>{player.bio}</p>
                    </>
                )}
            </section>
    </>
  )
}

export default PlayerDetails