import React, {Component} from 'react';
import RockPaperScissors from  '../components/RockPaperScissors'
import Template from '../components/Template'

class RpsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: {name:"", choice:"", wins:0}
    }
  }

  handleLeftClick(){
    console.log("Left");
  }
  handleRightClick(){
    console.log("Right");
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
    console.log("Eject");
  }

  render(){
    return (
      <div className="main-content">
        <Template aButton={this.handleAClick} bButton={this.handleBClick} upPress={this.handleUpClick} downPress={this.handleDownClick} leftPress={this.handleLeftClick} rightPress={this.handleRightClick}
        ejectPress={this.handleEjectClick}
        startPress={this.handleStartClick}
        />
        <RockPaperScissors/>
      </div>
    )
  }
}

export default RpsContainer
