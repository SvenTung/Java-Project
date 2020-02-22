import React, {Component} from 'react';
import RockPaperScissors from  '../components/RockPaperScissors'
import Template from '../components/template'
import Canvas from '../components/canvas'

class RpsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: {name:"", choice:"", wins:0}
    }
    // this.handleAClick = this.handleAClick.bind(this)
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
    console.log('A button press');
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
    return (
      <div  className="main-content"
      tabIndex={-1}
      onKeyDown={this.handleKeyPress}
      >
      <p>Rock Paper Scissors!</p>
<Canvas/>



      </div>
    )
  }
}

export default RpsContainer
