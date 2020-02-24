import React, {Component}from 'react';
import Player from "./Player";

class RockPaperScissors extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: this.props.player,
      computer: {name: "Computer", selectedOption: "", wins: 0},
      gameState: "active",
      gamesPlayed: 0,
      options: {
        "rock": ["scissors"],
        "paper": ["rock"],
        "scissors": ["paper"]
      }
    }
  };

  resetGame = () => {
    this.setState({
      player: {name: "One", selectedOption: "", wins: this.state.player.wins},
      computer: {name: "Computer", selectedOption: "", wins: this.state.computer.wins},
      gameState: "active"
    });
  };

  checkGameState(){
    this.selectComputerOption()
    this.setState({gamesPlayed: this.state.gamesPlayed + 1});
    if (this.state.options[this.state.player.selectedOption].includes(this.state.computer.selectedOption)) {
      this.state.player.wins += 1;
      this.setState({gameState: 'win'});
    } else if (this.state.options[this.state.computer.selectedOption].includes(this.state.player.selectedOption)) {
      this.state.computer.wins += 1;
      this.setState({gameState: 'lose'});
    } else {
      this.setState({gameState: 'draw'});
    }
  };

  setPlayerOption = (option) => {
    this.state.player.selectedOption = option
    this.checkGameState();
  };

  selectComputerOption(){
    const choice = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    this.state.computer.selectedOption = (choice[randomNumber])
    console.log(choice[randomNumber]);
  }

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
