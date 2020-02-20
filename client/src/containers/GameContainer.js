import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RpsContainer from './RpsContainer';

const GameContainer = () => {
  return (
    <Router>
    <Fragment>
    <Switch>
      <Route path="/rps" component={RpsContainer} />
    </Switch>
    </Fragment>
    </Router>
  )
}

export default GameContainer
