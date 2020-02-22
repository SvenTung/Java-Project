import React, {Component}from 'react';
import Player from "./Player";

class RockPaperScissors extends Component {
  options = {
    "rock": ["scissors"],
    "paper": ["rock"],
    "scissors": ["paper"]
  };

  state = {
    players: [
      {name: "one", selectedOption: "", winner: false, wins: 0},
      {name: "Computer", selectedOption: "", winner: false, wins: 0}
    ],
    gameState: "active",
    gamesPlayed: 0
  };

  resetGame = () => {
    this.setState({
      players: [
        {name: "one", selectedOption: "", winner: false, wins: this.state.players[0].wins},
        {name: "Computer", selectedOption: "", winner: false, wins: this.state.players[1].wins}
      ],
      gameState: "active"
    });
  };

  checkGameState(){
    this.setComputerOption()
    this.setState({gamesPlayed: this.state.gamesPlayed + 1});
    if (this.options[this.state.players[0].selectedOption].includes(this.state.players[1].selectedOption)) {
      this.setPlayerWinner(0);
      this.setState({gameState: 'win'});
    } else if (this.options[this.state.players[1].selectedOption].includes(this.state.players[0].selectedOption)) {
      this.setPlayerWinner(1);
      this.setState({gameState: 'lose'});
    } else {
      this.setState({gameState: 'draw'});
    }
  };

  setPlayerWinner(playerId){
    const newPlayers = this.state.players;
    newPlayers[playerId].winner = true;
    newPlayers[playerId].wins = newPlayers[playerId].wins + 1;
    this.setState({players: newPlayers});
  };

  setPlayerOption = (playerId, playerOption) => {
    const newPlayers = this.state.players;
    newPlayers[playerId].selectedOption = playerOption;
    this.setState({players: newPlayers});
    this.checkGameState();
  };

  setComputerOption(){
    const choice = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    this.state.players[1].selectedOption = (choice[randomNumber])
    console.log(choice[randomNumber]);
  }

  render = () => {
    return (
      <div className={"game"}>
        <h5>Games played: {this.state.gamesPlayed}</h5>
          <Player
            playerId={0}
            player={this.state.players[0]}
            setPlayerOption={this.setPlayerOption}
            gameState={this.state.gameState}
          />

        {this.state.players[0].selectedOption !== '' ? (
          <div>
            <p>You chose {this.state.players[0].selectedOption.toUpperCase()}</p>
            <p>Computer chose {this.state.players[1].selectedOption.toUpperCase()}</p>
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
            <button onClick={() => {this.resetGame()}}>Play Again</button>
          </div>
      ) : <></>}
      </div>
    );
  }
};

export default RockPaperScissors;
