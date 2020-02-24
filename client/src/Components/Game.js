import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Game = (props) => {

  const url = "/" + props.game.name;

  return (
    <Fragment>
    <Link to = {url} className="name">
    {props.game.name}
    </Link>
    </Fragment>
  )
}

export default Game;
