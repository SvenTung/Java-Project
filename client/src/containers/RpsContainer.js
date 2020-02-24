import React, {Component} from 'react';
import RockPaperScissors from  '../components/RockPaperScissors'
import Template from '../components/Template'
import Arrow from '../components/Arrow'

class RpsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: {name: "One", selectedOption: "", wins: 0},
      computer: {name: "Computer", selectedOption: "", wins: 0},
      options: {
        "rock": ["scissors"],
        "paper": ["rock"],
        "scissors": ["paper"]
      },
      eject: false,
      choices: ["rock", "paper", "scissors"],
      hover: 0
    }
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleEjectClick = this.handleEjectClick.bind(this);
    this.handleAClick = this.handleAClick.bind(this);
    this.selectComputerOption = this.selectComputerOption.bind(this);
    this.checkGameState = this.checkGameState.bind(this);

  }

  handleLeftClick(){
    this.setState({hover: this.state.hover -= 1})
    if (this.state.hover === 3) {
      this.setState({hover: this.state.hover = 0})
    } else if (this.state.hover === -1) {
      this.setState({hover: this.state.hover = 2})
    }
    console.log(this.state.choices[this.state.hover]);
  }
  handleRightClick(){
    this.setState({hover: this.state.hover += 1})
    if (this.state.hover === 3) {
      this.setState({hover: this.state.hover = 0})
    } else if (this.state.hover === -1) {
      this.setState({hover: this.state.hover = 2})
    }
    console.log(this.state.choices[this.state.hover]);
  }
  handleAClick(){
    this.state.player.selectedOption = this.state.choices[this.state.hover];
    this.checkGameState()
  }

  handleBClick(){
    console.log("B");
  }
  handleStartClick(){
    console.log("Start");
  }
  handleEjectClick(){
    console.log("Eject")
    this.setState({ eject: !this.state.eject })
  }

  selectComputerOption(){
    const choice = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    this.state.computer.selectedOption = (choice[randomNumber])
    console.log(choice[randomNumber]);
  }

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

  handleKeyPress = (event) => {
    switch(event.key){
      case 'a':
      case 's':
      case 'ArrowLeft':
      case 'ArrowDown':
        this.handleLeftClick()
        break
      case 'd':
      case 'w':
      case 'ArrowRight':
      case 'ArrowUp':
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
      default:
      break
    }
  }

  render(){
    const { eject } = this.state;
    return (
      <div className="main-content"
      tabIndex={-1}
      onKeyDown={this.handleKeyPress}
      >
      <div className="cartridge-container">
      {eject ? ( <img src="/assets/cartridge.png" style={{height: "45vh"}} className="cartridge" alt=""/>): (<></>)}
      </div>
      <Template
      aButton={this.handleAClick}
      bButton={this.handleBClick}
      leftPress={this.handleLeftClick}
      rightPress={this.handleRightClick}
      ejectPress={this.handleEjectClick}
      startPress={this.handleStartClick}
      />
      <RockPaperScissors player={this.state.player} computer={this.state.computer} checkGameState={this.checkGameState}/>
      <Arrow choices={this.state.choices} hover={this.state.hover}/>
      </div>
    )
  }
}

export default RpsContainer
