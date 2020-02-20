import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class RpsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: {name:"", choice:"", wins:0}
    }
  }

  render(){
    return (
      <div className="main-content">
        <p>Rock Paper Scissors!</p>
        <img src="/assets/rock.jpeg"/>
      </div>
    )
  }
}

export default RpsContainer
