import React, {Component}from 'react';
import ActionButtons from './ActionButtons.js'

class GameOverScreen extends Component {
  render = () => {
    return (
      <div>
        <ActionButtons />
        <div className={"gameOverScreen"}>
          <h5>Game Over</h5>
        </div>
      </div>
    )
  }
};

export default GameOverScreen
