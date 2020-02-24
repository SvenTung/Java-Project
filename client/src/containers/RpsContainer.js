import React, {Component} from 'react';
import RockPaperScissors from  '../components/RockPaperScissors'
import Template from '../components/Template'
import Arrow from '../components/Arrow'

class RpsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: {name:"", choice:"", wins:0},
      eject: false,
      choices: ["rock", "paper", "scissors"],
      hover: 0
    }
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleEjectClick = this.handleEjectClick.bind(this);
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
    console.log("A");
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
      <RockPaperScissors/>
      <Arrow choices={this.state.choices} hover={this.state.hover}/>
      </div>
    )
  }
}

export default RpsContainer
