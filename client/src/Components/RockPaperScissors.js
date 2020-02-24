import React, {Component}from 'react';
import Player from "./Player";

class RockPaperScissors extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: this.props.player,
      computer: this.props.computer,
      gameState: "active",
      gamesPlayed: 0
    }
  };

  resetGame = () => {
    this.state.player.selectedOption = ''
    this.state.computer.selectedOption = ''
    this.state.gameState = 'active'
  };

  setPlayerOption = (option) => {
    this.state.player.selectedOption = option
    this.props.checkGameState();
  };

  render = () => {
    return (
      <div className={"game"}>
        <h5>Games played: {this.state.gamesPlayed}</h5>
          <Player
            playerId={0}
            player={this.state.player}
            setPlayerOption={this.setPlayerOption}
            gameState={this.state.gameState}
          />
        {this.state.player.selectedOption !== '' ? (
          <div>
            <p>You chose {this.state.player.selectedOption.toUpperCase()}</p>
            <p>Computer chose {this.state.computer.selectedOption.toUpperCase()}</p>
            {this.state.gameState === 'draw' ? (
              <p>Draw!</p>
            ) : (
              this.state.gameState === 'win' ? (
                <p>You win!</p>
              ) : (
                <p>Computer wins!</p>
              )
            )
            }
            <button className="yol" onClick={() => {this.resetGame()}}>Play Again</button>
          </div>
      ) : <></>}
      </div>
    );
  }
};

export default RockPaperScissors;
