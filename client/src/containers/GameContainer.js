import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WelcomeContainer from './WelcomeContainer';
import RpsContainer from './RpsContainer';
import Rps2Container from './Rps2Container';
import GameSelectContainer from './GameSelectContainer';

const GameContainer = () => {
  return (
    <Router>
    <Fragment>
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
      <Route exact path="/rps" component={RpsContainer} />
      <Route exact path="/rps2" component={Rps2Container} />
      <Route exact path="/select" component={GameSelectContainer} />
    </Switch>
    </Fragment>
    </Router>
  )
}

export default GameContainer
