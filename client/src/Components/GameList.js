import React from 'react';
import Game from './Game.js';

const GameList = (props) => {

  if (props.games.length === 0){
    return (<p>Loading...</p>)
  }

  const games = props.games.map((game, index) => {
    return (
      <li>
        <div className="game-component">
          <Game game={game} />
        </div>
      </li>
    )
  })

  return (
    <ul className="component-list">
      {games}
    </ul>
  )
}
export default GameList;
