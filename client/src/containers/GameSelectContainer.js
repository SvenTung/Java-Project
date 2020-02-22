import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Game from '../components/Game.js';

const GameSelectContainer = (props) => {

  const games = props.games.map((game, index) => {
    return (
      <li>
        <Game game={game} />
      </li>
    )
  })

  return (
    <ul className="game-list">
      {games}
    </ul>
  )
}
export default GameSelectContainer
