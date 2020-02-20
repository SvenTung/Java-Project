import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RpsContainer from './RpsContainer';
import GameSelectContainer from './GameSelectContainer';

const GameContainer = () => {
  return (
    <Router>
    <Fragment>
    <Switch>
      <Route path="/rps" component={RpsContainer} />
      <Route path="/select" component={GameSelectContainer} />
    </Switch>
    </Fragment>
    </Router>
  )
}

export default GameContainer
