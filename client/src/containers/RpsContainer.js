import React, {Component} from 'react';
import RockPaperScissors from  '../components/RockPaperScissors'
import CodeBoyTemplate from '../components/CodeBoyTemplate'
import GameOverScreen from '../components/GameOverScreen'
import CommentBox from './CommentBox'

class RpsContainer extends Component{
  state = {
    ejected: false
  }

  handleEjectClick = () => {
    this.setState({ejected: true})
  }

  render = () => {
    return(
      <div className = "main-content">
        {this.state.ejected ? (
          <div className="gameOverDiv">
            <div className="cartridge-container">
              <img src="/assets/cartridge2.png" style={{height: "45vh"}} className="cartridge" alt=""/>
            </div>
            <CodeBoyTemplate />
            <GameOverScreen />
          </div>
        ) : (
          <div className="main-game">
            <CodeBoyTemplate />
            <RockPaperScissors eject={this.state.ejected} handleEjectClick={this.handleEjectClick}/>
          </div>
        )}
        <CommentBox/>
      </div>
    )
  }
}

export default RpsContainer
