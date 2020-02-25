import React, {Component}from 'react';
import Player from "./Player";
import ActionButtons from '../components/ActionButtons'

class RockPaperScissors extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: {name: "One", selectedOption: "", wins: 0},
      computer: {name: "Computer", selectedOption: "", wins: 0},
      gamesPlayed: 0,
      options: {
        "rock": ["scissors"],
        "paper": ["rock"],
        "scissors": ["paper"]
      },
      eject: false,
      choices: ["rock", "paper", "scissors"],
      hover: 0
    }
  };

  handleLeftClick = () => {
    this.setState({hover: this.state.hover -= 1})
    if (this.state.hover === 3) {
      this.setState({hover: 0})
    } else if (this.state.hover === -1) {
      this.setState({hover: 2})
    }
  }

  handleRightClick = () => {
    this.setState({hover: this.state.hover += 1})
    if (this.state.hover === 3) {
      this.setState({hover: 0})
    } else if (this.state.hover === -1) {
      this.setState({hover: 2})
    }
  }

  handleAClick = () => {
    if (this.state.gameState === "active") {
      this.state.player.selectedOption = this.state.choices[this.state.hover];
      this.checkGameState()
    } else {
      this.resetGame()
    }
  }

  handleStartClick = () => {
    console.log("Start");
  }

  handleEjectClick = () => {
    console.log("Eject")
    this.setState({ eject: !this.state.eject })
  }

  selectComputerOption = () => {
    const choice = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    const updatedComputer = this.state.computer
    updatedComputer.selectedOption = (choice[randomNumber])
    this.setState({computer: updatedComputer})
  }

  checkGameState = () => {
    this.selectComputerOption()
    this.setState({gamesPlayed: this.state.gamesPlayed + 1});
    if (this.state.options[this.state.player.selectedOption].includes(this.state.computer.selectedOption)) {
      const updatedPlayer = this.state.player
      updatedPlayer.wins += 1
      this.setState({player: updatedPlayer})
      this.setState({gameState: 'win'});
    } else if (this.state.options[this.state.computer.selectedOption].includes(this.state.player.selectedOption)) {
      const updatedComputer = this.state.computer
      updatedComputer.wins += 1
      this.setState({computer: updatedComputer})
      this.setState({gameState: 'lose'});
    } else {
      this.setState({gameState: 'draw'});
    }
  };

  resetGame = () => {
    const updatedPlayer = this.state.player
    updatedPlayer.selectedOption = ''
    this.setState({player: updatedPlayer})
    const updatedComputer = this.state.computer
    updatedComputer.selectedOption = ''
    this.setState({computer: updatedComputer})
    this.setState({gameState: "active"})
  };

  handleKeyPress = (event) => {
    switch(event.key){
      case 'a':
      case 's':
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault()
        this.handleLeftClick()
      break
      case 'd':
      case 'w':
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault()
        this.handleRightClick()
      break
      case '1':
        this.setState({hover: 0})
      break
      case '2':
        this.setState({hover: 1})
      break
      case '3':
        this.setState({hover: 2})
      break
      case 'Enter':
      case ' ':
        event.preventDefault()
        this.handleAClick()
      break
      default:
      break
    }
  }

  setPlayerOption = (option) => {
    const updatedPlayer = this.state.player
    updatedPlayer.selectedOption = option
    this.setState({player: updatedPlayer})
    this.checkGameState();
  };

  render = () => {
    const {eject} = this.state;
      return (
        <div tabIndex={-1} onKeyDown={this.handleKeyPress}>
          <div className="cartridge-container">
            {eject ? ( <img src="/assets/cartridge2.png" style={{height: "45vh"}} className="cartridge" alt=""/>): (<></>)}
          </div>
          <ActionButtons
          aButton={this.handleAClick}
          leftPress={this.handleLeftClick}
          rightPress={this.handleRightClick}
          ejectPress={this.handleEjectClick}
          startPress={this.handleStartClick}
          />
          <div className={"game"}>
            <h5>Games played: {this.state.gamesPlayed}</h5>
            <h5>Player {this.state.player.name} ({this.state.player.wins} wins)</h5>
            <h5>Computer wins: {this.state.computer.wins}</h5>
              <Player
                playerId={0}
                player={this.state.player}
                setPlayerOption={this.setPlayerOption}
                gameState={this.state.gameState}
                hoveredOption={this.state.choices[this.state.hover]}
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
                <button className="resetButton" onClick={() => {this.resetGame()}}>Play Again</button>
              </div>
            ) : <></>}
          </div>
      </div>
    )
  }
};

export default RockPaperScissors;
