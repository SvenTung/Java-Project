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
    const { eject } = this.state;
    return (
      <div  className="main-content"
      tabIndex={-1}
      onKeyDown={this.handleKeyPress}
      >
      <p>Rock Paper Scissors!</p>
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
      </div>
    )
  }
}

export default RpsContainer
