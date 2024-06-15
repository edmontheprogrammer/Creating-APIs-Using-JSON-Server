import React from "react";
import { Link } from "react-router-dom";

interface Player {
  id: number;
  name: string;
  email: string;
  phone: number;
}

interface PlayerListProps {
  players: Player[];
  name: string;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, name }) => {
  return (
    <>
      <section>
        <section>
          <h1>NBA Players List</h1>
          <h3>Click on Player Details to learn more about a specific player</h3>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id}>
                  <td>
                    <p>{player.name}</p>
                  </td>
                  <td>
                    <p>{player.email}</p>
                  </td>

                  <td>
                    <Link to={`/players/${player.id}`}>
                      <button>Player Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};

export default PlayerList;
