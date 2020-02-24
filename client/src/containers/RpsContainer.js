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
    this.state.hover -= 1
    if (this.state.hover === 3) {
      this.state.hover = 0
    } else if (this.state.hover === -1) {
      this.state.hover = 2
    }
    console.log(this.state.choices[this.state.hover]);
  }
  handleRightClick(){
    this.state.hover += 1
    if (this.state.hover === 3) {
      this.state.hover = 0
    } else if (this.state.hover === -1) {
      this.state.hover = 2
    }
    console.log(this.state.choices[this.state.hover]);
  }
  handleUpClick(){
    console.log("Up");
  }
  handleDownClick(){
    console.log("Down");
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
      case 'o':
      console.log('o key pressed')
      break;
      case 'k':
      console.log('k key pressed')
      break;
      case 'a':
      console.log('a key pressed');
      break
      case 'd':
      console.log('d key pressed');
      break
      case 's':
      console.log('s key pressed');
      break
      case 'w':
      console.log('w key pressed');
      break
    }
  }

  render(){
    const { eject } = this.state;
    return (
      <div className="main-content"
      
      onKeyDown={this.handleKeyPress}
      >

      <div className="cartridge-container">
      {eject ? ( <img src="/assets/cartridge.png" style={{height: "45vh"}} className="cartridge" />): (<div></div>)}
      </div>
      <Template

      aKey={this.handleLeftClick}
      dKey={this.handleRightClick}
      sKey={this.handleDownClick}
      wKey={this.handleUpClick}

      kKey={this.handleBClick}
      aButton={this.handleAClick}
      bButton={this.handleBClick}
      upPress={this.handleUpClick}
      downPress={this.handleDownClick}
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
