import React, {Component} from 'react';
import RockPaperScissors from  '../components/RockPaperScissors'
<<<<<<< HEAD
import Template from '../components/template'
import Canvas from '../components/canvas'
=======
import Template from '../components/Template'
>>>>>>> parent of 52e9806... keyboard strokes now print to console

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
<<<<<<< HEAD
      <div  className="main-content"
      tabIndex={-1}
      onKeyDown={this.handleKeyPress}
      >
      <p>Rock Paper Scissors!</p>
<Canvas/>



=======
      <div className="main-content">
        <p>Rock Paper Scissors!</p>
        <Template aButton={this.handleAClick} bButton={this.handleBClick} upPress={this.handleUpClick} downPress={this.handleDownClick} leftPress={this.handleLeftClick} rightPress={this.handleRightClick}
        ejectPress={this.handleEjectClick}
        startPress={this.handleStartClick}
        />
        <RockPaperScissors/>
>>>>>>> parent of 52e9806... keyboard strokes now print to console
      </div>
    )
  }
}

export default RpsContainer
