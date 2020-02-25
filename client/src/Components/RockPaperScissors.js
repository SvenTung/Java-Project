import React, {Component}from 'react';
import Player from "./Player";

class RockPaperScissors extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: this.props.player,
      computer: this.props.computer
    }
  };

  setPlayerOption = (option) => {
    const updatedPlayer = this.state.player
    updatedPlayer.selectedOption = option
    this.setState({player: updatedPlayer})
    this.props.checkGameState();
  };

  render = () => {
    return (
      <div className={"game"}>
        <h5>Games played: {this.props.gamesPlayed}</h5>
        <h5>Player {this.props.player.name} ({this.props.player.wins} wins)</h5>
        <h5>Computer wins: {this.props.computer.wins}</h5>
          <Player
            playerId={0}
            player={this.state.player}
            setPlayerOption={this.setPlayerOption}
            gameState={this.props.gameState}
            hoveredOption={this.props.hoveredOption}
          />
        {this.state.player.selectedOption !== '' ? (
          <div>
            <p>You chose {this.state.player.selectedOption.toUpperCase()}</p>
            <p>Computer chose {this.state.computer.selectedOption.toUpperCase()}</p>
            {this.props.gameState === 'draw' ? (
              <p>Draw!</p>
            ) : (
              this.props.gameState === 'win' ? (
                <p>You win!</p>
              ) : (
                <p>Computer wins!</p>
              )
            )
            }
            <button className="resetButton" onClick={() => {this.props.resetGame()}}>Play Again</button>
          </div>
      ) : <></>}
      </div>
    );
  }
};

export default RockPaperScissors;
