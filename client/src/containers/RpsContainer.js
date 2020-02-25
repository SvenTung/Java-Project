import React, {Component} from 'react';
import RockPaperScissors from  '../components/RockPaperScissors'
import CodeBoyTemplate from '../components/CodeBoyTemplate'
import GameOverScreen from '../components/GameOverScreen'

class RpsContainer extends Component{
  state = {
    ejected: false
  }

  eject = () => {
    this.setState({ejected: true})
  }

  render = () => {
    const {eject} = this.state.ejected;
    return(
      <div className = "main-content">
      <div className="cartridge-container">
        {eject ? (
          <img src="/assets/cartridge2.png" style={{height: "45vh"}} className="cartridge" alt=""/>
        ): (<></>)}
      </div>
        <CodeBoyTemplate />
        {eject ? (
          <GameOverScreen />
        ) : (<RockPaperScissors />)}
      </div>
    )
  }
}

export default RpsContainer
